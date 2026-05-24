import "dotenv/config";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import mime from "mime-types";
import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";

const BUCKET_NAME = process.env.YANDEX_BUCKET_NAME;
const ENDPOINT_URL =
  process.env.YANDEX_ENDPOINT_URL || "https://storage.yandexcloud.net";
const OUT_DIR = process.env.OUT_DIR || "./out";

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION || "ru-central1";

function fail(message) {
  console.error(`\nHata: ${message}\n`);
  process.exit(1);
}

function requireEnv(name, value) {
  if (!value) fail(`${name} tanımlı değil.`);
}

requireEnv("YANDEX_BUCKET_NAME", BUCKET_NAME);
requireEnv("AWS_ACCESS_KEY_ID", AWS_ACCESS_KEY_ID);
requireEnv("AWS_SECRET_ACCESS_KEY", AWS_SECRET_ACCESS_KEY);

const s3 = new S3Client({
  region: AWS_DEFAULT_REGION,
  endpoint: ENDPOINT_URL,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

function normalizeKey(key) {
  return key.replace(/\\/g, "/");
}

function shouldUseLongCache(key) {
  return key.startsWith("_next/static/");
}

function getCacheControl(key) {
  if (shouldUseLongCache(key)) {
    return "public, max-age=31536000, immutable";
  }

  if (
    key.endsWith(".html") ||
    key.endsWith(".xml") ||
    key.endsWith(".json") ||
    key.endsWith(".txt") ||
    key === "robots.txt" ||
    key === "sitemap.xml"
  ) {
    return "public, max-age=60, must-revalidate";
  }

  return "public, max-age=3600";
}

function getContentType(filePath) {
  const detected = mime.lookup(filePath);
  if (!detected) return "application/octet-stream";

  if (detected.startsWith("text/")) {
    return `${detected}; charset=utf-8`;
  }

  if (detected === "application/xml") {
    return "application/xml; charset=utf-8";
  }

  if (detected === "application/json") {
    return "application/json; charset=utf-8";
  }

  return detected;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function listAllObjects(bucket) {
  const keys = [];
  let continuationToken;

  do {
    const result = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        ContinuationToken: continuationToken,
      })
    );

    for (const item of result.Contents || []) {
      if (item.Key) keys.push(item.Key);
    }

    continuationToken = result.IsTruncated
      ? result.NextContinuationToken
      : undefined;
  } while (continuationToken);

  return keys;
}

async function fileChanged(bucket, key, bodyBuffer, contentType, cacheControl) {
  try {
    const head = await s3.send(
      new HeadObjectCommand({
        Bucket: bucket,
        Key: key,
      })
    );

    const sameSize = Number(head.ContentLength || 0) === bodyBuffer.length;
    const sameType = (head.ContentType || "") === contentType;
    const sameCache = (head.CacheControl || "") === cacheControl;

    return !(sameSize && sameType && sameCache);
  } catch {
    return true;
  }
}

async function uploadFile(bucket, localPath, key) {
  const body = await fs.readFile(localPath);
  const contentType = getContentType(localPath);
  const cacheControl = getCacheControl(key);

  const changed = await fileChanged(
    bucket,
    key,
    body,
    contentType,
    cacheControl
  );

  if (!changed) {
    console.log(`= skip ${key}`);
    return;
  }

  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: cacheControl,
    })
  );

  console.log(`+ upload ${key}`);
}

async function deleteRemovedObjects(bucket, localKeysSet, remoteKeys) {
  const keysToDelete = remoteKeys.filter((key) => !localKeysSet.has(key));

  if (keysToDelete.length === 0) {
    console.log("Silinecek eski obje yok.");
    return;
  }

  console.log(`${keysToDelete.length} eski obje siliniyor...`);

  for (let i = 0; i < keysToDelete.length; i += 1000) {
    const chunk = keysToDelete.slice(i, i + 1000);

    await s3.send(
      new DeleteObjectsCommand({
        Bucket: bucket,
        Delete: {
          Objects: chunk.map((Key) => ({ Key })),
          Quiet: false,
        },
      })
    );
  }

  for (const key of keysToDelete) {
    console.log(`- delete ${key}`);
  }
}

async function main() {
  console.log("Build başlatılıyor...");

  const { execSync } = await import("node:child_process");
  execSync("npm run build", {
    stdio: "inherit",
    shell: true,
    env: process.env,
  });

  const resolvedOutDir = path.resolve(OUT_DIR);

  if (!existsSync(resolvedOutDir)) {
    fail(`out klasörü bulunamadı: ${resolvedOutDir}`);
  }

  console.log(`\nOut klasörü taranıyor: ${resolvedOutDir}`);
  const localFiles = await walk(resolvedOutDir);

  const uploads = [];
  const localKeysSet = new Set();

  for (const filePath of localFiles) {
    const relativePath = path.relative(resolvedOutDir, filePath);
    const key = normalizeKey(relativePath);
    localKeysSet.add(key);
    uploads.push({ filePath, key });
  }

  console.log(`${uploads.length} dosya bulundu.`);
  console.log("Bucket içeriği okunuyor...");

  const remoteKeys = await listAllObjects(BUCKET_NAME);

  console.log(`${remoteKeys.length} uzak obje bulundu.`);
  console.log("Dosyalar yükleniyor...");

  for (const item of uploads) {
    await uploadFile(BUCKET_NAME, item.filePath, item.key);
  }

  await deleteRemovedObjects(BUCKET_NAME, localKeysSet, remoteKeys);

  console.log("\nRelease tamamlandı.");
}

main().catch((error) => {
  console.error("\nDeploy hatası:");
  console.error(error);
  process.exit(1);
});