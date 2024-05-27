"use client";

import axios from "axios";
import Loading from "@/components/motion/Loading";
import { useEffect, useState } from "react";
import IndexCard from "@/components/client/IndexCard";
import { toast } from "sonner";

export default function Page() {
  const [indexs, setIndexs] = useState<
    Array<{ _id: string; title: string; introduction: string; date: string }>
  >([]);
  const getIndexs = async () => {
    try {
      const res = await axios.get("/api/index");
      setIndexs(res.data.page);
    } catch (error: any) {
      toast.error("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message);
      }
      console.error(error);
    }
  };
  useEffect(() => {
    getIndexs();
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
