"use client";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function InputFile() {
  const [file, setFile] = useState<string>();
  const readFile = () => {
    const inputFile = document.querySelector<HTMLInputElement>("#myFile");
    let file = inputFile?.files?.[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      let content = reader.result;
      setFile(content as string);
      console.log(content);
    });
    reader.readAsText(file as Blob);
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="myFile" type="file" />
      <Button
        onClick={() => {
          readFile();
        }}
      >
        上传文件
      </Button>

      <ReactMarkdown>{file}</ReactMarkdown>
    </div>
  );
}
