"use client";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";

export default function ToMarkdown(props: any) {
  const content = Buffer.from(props.content.data, "base64");
  let string = content.toString();
  const article = Buffer.from(string, "base64").toString();
  return (
    <div className="min-w-[300px] w-[80vw] prose lg:prose-xl bg-zinc-200 p-8 rounded-lg shadow-lg">
      <Markdown remarkPlugins={[remarkGfm]}>{article}</Markdown>
    </div>
  );
}
