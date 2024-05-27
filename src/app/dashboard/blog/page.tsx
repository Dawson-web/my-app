"use client";

import axios from "axios";
import Loading from "@/components/motion/Loading";
import { useEffect, useState } from "react";
import IndexCard from "@/components/client/IndexCard";

export default function Page() {
  const [indexs, setIndexs] = useState<
    Array<{ _id: string; title: string; introduction: string; date: string }>
  >([]);
  const getIndexs = async () => {
    const res = await axios.get("/api/index");
    setIndexs(res.data.page);
    console.log(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getIndexs();
    };
    fetchData();
  }, []);
  if (!indexs.length) return <Loading />;
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>文章</h1>
      <div className="flex flex-col gap-4">
        {indexs.map((index) => (
          <IndexCard index={index} key={index._id} />
        ))}
      </div>
    </main>
  );
}
