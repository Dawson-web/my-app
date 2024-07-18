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
    <main className="grid grid-rows-3 gap-4 w-full h-full ">
      <div className="row-span-1  w-[90%]  justify-self-center ">
        <ProfileCard />
      </div>
      <div className="row-span-3  w-[90%]  justify-self-center overflow-y-scroll ">
        <div className="  gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
          {indexs.map((index) => (
            <IndexCard index={index} key={index._id} />
          ))}
        </div>
      </div>
    </main>
  );
}
