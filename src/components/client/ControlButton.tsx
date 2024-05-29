"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ControlButton(props: any) {
  const { form, method, title } = props;

  const getPages = async () => {
    const res = await axios.get("/api/page", {});
    console.log(res.data);
  };
  const deletePages = async () => {
    const res = await axios.delete("/api/page", { params: { title } });
    const res_ = await axios.delete("/api/index", { params: { title } });
    toast.success("Success", {
      description: res.data.msg,
    });
  };
  const updatePages = async () => {
    await axios.put("/api/page", {}, { params: {} });
  };
  const postPages = async () => {
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
  const doMethod = async () => {
    try {
      switch (method) {
        case "get":
          await getPages();
          break; // 这里需要break，否则会执行下一个case
        case "delete":
          await deletePages();
          break;
        case "update":
          await updatePages();
          break;
        case "post":
          await postPages();
          break;
        default:
          break;
      }
    } catch (e) {
      toast.error("Fail", {
        description: `操作失败：  ${e}`,
      });
    }
  };
  return (
    <Button
      className="w-[100px]"
      onClick={async () => {
        await doMethod();
      }}
    >
      {props.value}
    </Button>
  );
}
