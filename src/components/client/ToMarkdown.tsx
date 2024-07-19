"use client";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import clsx from "clsx";
import styles from "@/components/client/scroller.module.css";

export default function ToMarkdown(props: any) {
  const content = Buffer.from(props.content.data, "base64");
  let string = content.toString();
  const article = Buffer.from(string, "base64").toString();
  return (
    <div className="min-w-[300px] w-[80vw] prose lg:prose-xl bg-zinc-100 rounded-lg shadow-lg dark:bg-gray-400">
      <Markdown
        remarkPlugins={[remarkGfm]}
        className={clsx("w-full h-screen overflow-y-scroll p-8", styles.scroll)}
      >
        {article}
      </Markdown>
    </div>
  );
}
