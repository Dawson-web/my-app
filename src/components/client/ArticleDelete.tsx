import { useEffect, useState } from "react";
import ControlButton from "./ControlButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
export default function ArticleDelete() {
  const [indexs, setIndexs] = useState<
    Array<{ _id: string; title: string; introduction: string; date: string }>
  >([]);
  const [title, setTitle] = useState("");
  const getIndexs = async () => {
    const res = await axios.get("/api/index");
    setIndexs(res.data.page);
  };
  useEffect(() => {
    getIndexs();
  }, []);
  return (
    <>
      <Select
        onValueChange={(value) => {
          setTitle(value);
          console.log(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="选择文章" />
        </SelectTrigger>
        <SelectContent>
          {indexs.map((item) => {
            return (
              <SelectItem key={item._id} value={item.title}>
                {item.title}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <ControlButton method={"delete"} title={title} value="删除" />
    </>
  );
}
