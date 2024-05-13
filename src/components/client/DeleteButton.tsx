"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";

export default function DeleteButton() {
  const deleteTodo = async (id: string) => {
    await axios.delete("/api", { params: { id } });
  };
  const updateTodo = async (id: string) => {
    await axios.put("/api", {}, { params: { id } });
  };
  const postTodo = async (id: string) => {
    await axios.post("/api", {}, { params: { id } });
  };
  return (
    <Button
      onClick={async () => {
        await updateTodo("663cb5d206c89231b2f72356");
      }}
    ></Button>
  );
}
