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
    <div className="flex flex-col gap-4">
      <Input id="title" />
      <Input id="myFile" type="file" />
      <Button
        onClick={() => {
          readFile();
        }}
      >
        上传文件
      </Button>
      <ToMarkdown file={file} />
      <DeleteButton form={form} method={"post"} />
    </div>
  );
}
