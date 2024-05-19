"use client";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DeleteButton from "@/components/client/DeleteButton";
import ToMarkdown from "./ToMarkdown";

export default function InputFile() {
  const [form, setForm] = useState<object>();
  const [file, setFile] = useState<string>();
  useEffect(() => {
    if (file) {
      setForm({
        title: document.querySelector<HTMLInputElement>("#title")?.value,
        description: file,
      });
      console.log(111, form);
      console.log(file);
    }
  }, [file]);
  const readFile = () => {
    const inputFile = document.querySelector<HTMLInputElement>("#myFile");
    const inputTitle = document.querySelector<HTMLInputElement>("#title");
    let file = inputFile?.files?.[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      let content = reader.result;
      setFile(content as string);
      setForm({
        title: inputTitle?.value,
        description: content,
      });
    });
    reader.readAsText(file as Blob);
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="title" />
      <Input id="myFile" type="file" />
      <Button
        onClick={() => {
          readFile();
        }}
      >
        上传文件
      </Button>
      {/* <ReactMarkdown
        children={file}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={a11yDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      /> */}
      <ToMarkdown file={file} />
      <DeleteButton form={form} method={"post"} />

      {/* {file}
      </ReactMarkdown> */}
    </div>
  );
}
