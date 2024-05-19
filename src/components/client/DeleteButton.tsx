"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";

export default function DeleteButton(props: any) {
  const { form, method } = props;
  const getPages = async () => {
    const res = await axios.get("/api");
    console.log(res.data);
  };
  const deleteTodo = async (id: string) => {
    await axios.delete("/api", { params: { id } });
  };
  const updateTodo = async (id: string) => {
    await axios.put("/api", {}, { params: { id } });
  };
  const postTodo = async (id: string) => {
    await axios.post(
      "/api",
      { title: form?.title, description: form?.description },
      { params: { id } }
    );
  };
  const doMethod = async (id: string) => {
    switch (method) {
      case "get":
        await getPages();
        break; // 这里需要break，否则会执行下一个case
      case "delete":
        await deleteTodo(id);
        break;
      case "update":
        await updateTodo(id);
        break;
      case "post":
        await postTodo(id);
        break;
      default:
        break;
    }
  };
  return (
    <Button
      onClick={async () => {
        await doMethod("1");
        console.log(props);
      }}
    ></Button>
  );
}
