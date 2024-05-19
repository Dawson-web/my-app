"use client";
import DeleteButton from "@/components/client/DeleteButton";
import ToMarkdown from "@/components/client/ToMarkdown";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [pages, setPages] = useState<
    Array<{ title: string; description: string }>
  >([]);
  const getPages = async () => {
    const res = await axios.get("/api");
    setPages(res.data.page);
    console.log(pages);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPages();
    };

    fetchData();
  }, []);
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>文章</h1>
      <DeleteButton method="get" />
      {pages.map((page) => (
        <>
          <div key={page.title}>{page.title}</div>
          <ToMarkdown file={page.description} />
        </>
      ))}
    </main>
  );
}
