"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
    language?: string;
    code?: string;
};

export default function CodeHighlighter({ language, code }: Props) {
    return (
        <SyntaxHighlighter
            language={language || "javascript"}
            style={vscDarkPlus}
            customStyle={{
                margin: 0,
                padding: "20px",
                background: "transparent",
                fontSize: "14px",
            }}
            showLineNumbers
        >
            {code || ""}
        </SyntaxHighlighter>
    );
}