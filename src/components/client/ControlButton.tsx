"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";

export default function ControlButton(props: any) {
  const { form, method } = props;

  const getPages = async () => {
    const res = await axios.get("/api/page", {});
    console.log(res.data);
  };
  const deletePages = async (id: string) => {
    await axios.delete("/api/page", { params: { id } });
  };
  const updatePages = async (id: string) => {
    await axios.put("/api/page", {}, { params: { id } });
  };
  const postPages = async (id: string) => {
    await axios.post("/api/page", {
      title: form?.title,
      content: form?.content,
      type: form?.type,
      date: form?.date,
    });
    await axios.post("/api/index", {
      title: form?.title,
      introduction: form?.introduction,
      date: form?.date,
    });
  };
  const doMethod = async (id: string) => {
    switch (method) {
      case "get":
        await getPages();
        break; // 这里需要break，否则会执行下一个case
      case "delete":
        await deletePages(id);
        break;
      case "update":
        await updatePages(id);
        break;
      case "post":
        await postPages(id);
        break;
      default:
        break;
    }
  };
  return (
    <Button
      className="w-[100px]"
      onClick={async () => {
        await doMethod("1");
        console.log(props);
      }}
    >
      {props.value}
    </Button>
  );
}
