"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [indexs, setIndexs] = useState<
    Array<{ _id: string; title: string; content: string; date: string }>
  >([]);
  const getIndexs = async () => {
    const res = await axios.get("/api/pages");
    setIndexs(res.data.page);
    console.log(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getIndexs();
    };
    fetchData();
  }, []);
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>文章</h1>
      {indexs.map((index) => (
        <>
          <Card key={index._id} className="w-[85vw] w-min-[300px]">
            <CardHeader>
              <CardTitle>
                <Link
                  href={`blog/page?title=${index.title}`}
                  legacyBehavior
                  passHref
                >
                  {index.title}
                </Link>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>简介：{index.content}</p>
            </CardContent>
            <CardFooter>
              <p className="text-zinc-500">发布时间：{index.date}</p>
            </CardFooter>
          </Card>
        </>
      ))}
    </main>
  );
}
