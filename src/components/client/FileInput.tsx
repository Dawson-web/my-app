"use client";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DeleteButton from "@/components/client/DeleteButton";
import ToMarkdown from "./ToMarkdown";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function InputFile() {
  const [form, setForm] = useState<object>();
  const [file, setFile] = useState<string>();
  useEffect(() => {
    if (file) {
      setForm({
        ...form,
        title: document.querySelector<HTMLInputElement>("#title")?.value,
        content: file,
      });
    }
  }, [file]);
  function formatDate(timestamp: number) {
    let now = new Date(timestamp); // 创建一个新的 Date 对象
    let year = now.getFullYear(); // 获取年份
    let month = String(now.getMonth() + 1).padStart(2, "0"); // 获取月份并将其格式化为两位数
    let date = String(now.getDate()).padStart(2, "0"); // 获取日期并将其格式化为两位数

    let formattedDate = `${year}-${month}-${date}`; // 组合年、月、日

    return formattedDate;
  }
  const readFile = () => {
    const inputFile = document.querySelector<HTMLInputElement>("#myFile");
    const inputTitle = document.querySelector<HTMLInputElement>("#title");
    const textareaIntroduction =
      document.querySelector<HTMLTextAreaElement>("#introduction");

    let file = inputFile?.files?.[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      let content = reader.result;
      setFile(content as string);
      setForm({
        ...form,
        title: inputTitle?.value,
        introduction: textareaIntroduction?.value,
        date: formatDate(Date.now()),
      });
    });
    console.log(form);

    reader.readAsText(file as Blob);
  };
  return (
    <div className="flex flex-col gap-4">
      <Input id="title" className="w-[180px]" />
      <Select
        onValueChange={(value) => {
          setForm({ ...form, type: value });
          console.log(form);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="类型" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="前端">前端</SelectItem>
          <SelectItem value="后端">后端</SelectItem>
        </SelectContent>
      </Select>
      <Textarea id="introduction" />
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
