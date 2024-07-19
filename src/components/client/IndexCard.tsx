import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
export default function IndexCard(props: any) {
  const [index, setIndex] = useState(props.index);

  return (
    <Card className=" sm:border-t-4 sm:border-blue-600 border-x-0 border-b-0 shadow-lg w-full ">
      <CardHeader>
        <CardTitle className="transition  hover:text-zinc-400 ">
          <Link href={`blog/${index.title}`} legacyBehavior passHref>
            {index.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className=" w-[90%] ">
        <p className="truncate text-nowrap">简介：{index.introduction}</p>
      </CardContent>
      <CardFooter className="flex justify-between self-end ">
        <p className="text-zinc-500">发布时间：{index.date}</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href={`blog/${index.title}`} legacyBehavior passHref>
            阅读
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
