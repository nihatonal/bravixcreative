import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-11-20",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
  ignoreBrowserTokenWarning: true,
});
