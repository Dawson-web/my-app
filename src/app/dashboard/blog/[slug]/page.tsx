"use client";
import ToMarkdown from "@/components/client/ToMarkdown";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  // 对params.slug进行URL解码
  const title = decodeURIComponent(params.slug);
  const [article, setArticle] = useState<{
    content: string;
    data: string;
    title: string;
    type: string;
    _id: string;
    _v: number;
  }>({
    content: "",
    data: "",
    title: "",
    type: "",
    _id: "",
    _v: 0,
  });
  const getPages = async () => {
    const res = await axios.get("/api/page", { params: { title } });
    setArticle(res.data.page[0]);
    console.log(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      // 使用params属性传递查询参数
      await getPages();
    };

    fetchData();
  }, []);

  // 判断article是否存在，不存在就返回"Loading..."
  if (!article.content) return "Loading...";

  return (
    <div>
      <ToMarkdown file={article.content}></ToMarkdown>
    </div>
  );
}
