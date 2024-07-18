"use client";

import axios from "axios";
import Loading from "@/components/motion/Loading";
import { useEffect, useState } from "react";
import IndexCard from "@/components/client/IndexCard";
import ProfileCard from "@/components/client/ProfileCard";

export default function Page() {
  const [indexs, setIndexs] = useState<
    Array<{ _id: string; title: string; introduction: string; date: string }>
  >([]);
  const getIndexs = async () => {
    const res = await axios.get("/api/index");
    setIndexs(res.data.page);
  };
  useEffect(() => {
    getIndexs();
  }, []);
  if (!indexs.length) return <Loading />;
  return (
    <main className="flex flex-col w-full h-full items-center gap-2 flex-1">
      <div className="row-span-1  w-[95%]  justify-self-center 	 ">
        <ProfileCard />
      </div>
      <div className="row-span-3  w-[95%]  justify-self-center overflow-y-scroll ">
        <div className="  gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   ">
          {indexs.map((index) => (
            <IndexCard index={index} key={index._id} />
          ))}
        </div>
      </div>
    </main>
  );
}
