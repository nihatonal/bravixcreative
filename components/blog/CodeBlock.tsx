"use client";

import dynamic from "next/dynamic";

const CodeHighlighter = dynamic(() => import("./CodeHighlighter"), {
  ssr: false,
  loading: () => (
    <pre className="overflow-x-auto p-5 text-sm text-zinc-200">
      Loading code...
    </pre>
  ),
});

type CodeBlockValue = {
  language?: string;
  code?: string;
};

export default function CodeBlock({ value }: { value: CodeBlockValue }) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-[#2e2305] shadow-lg">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="text-xs uppercase tracking-wider text-zinc-400">
          {value?.language || "code"}
        </span>

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>

      <CodeHighlighter
        language={value?.language}
        code={value?.code}
      />
    </div>
  );
}