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
export default function IndexCard(props: any) {
  const [index, setIndex] = useState(props.index);

  return (
    <Card className="w-[85vw] w-min-[300px] ">
      <CardHeader>
        <CardTitle className="transition  hover:text-zinc-400">
          <Link href={`blog/${index.title}`} legacyBehavior passHref>
            {index.title}
          </Link>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>简介：{index.introduction}</p>
      </CardContent>
      <CardFooter>
        <p className="text-zinc-500">发布时间：{index.date}</p>
      </CardFooter>
    </Card>
  );
}
