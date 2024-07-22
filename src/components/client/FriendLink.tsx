"use client";
import LinkCard from "./FriendLink/LinkCard";

export default function FriendLink(props: any) {
  const finfo = [
    {
      name: "bakptr",
      avatar_url: "/ptr.png",
      link: "https://pooi.me/",
      intro: "社恐的bakaptr",
    },
    {
      name: "未晓",
      avatar_url: "/cn.png",
      link: "https://www.dawnot.online/",
      intro: "一只正在学习前端的未晓",
    },
  ];
  return (
    <div className="mt-[40px] p-4">
      <span className=" sm:text-3xl font-bold text-[#f5f5f5]">
        <span className="text-blue-400"># </span>
        你好这里是Dawson的好盆友们~哈哈哈
      </span>
      <div className="mt-4 gap-2 sm:gap-4 grid grid-cols-1  md:grid-cols-2 ">
        {finfo.map((item, index) => (
          <LinkCard
            key={index}
            name={item.name}
            avatar_url={item.avatar_url}
            link={item.link}
            intro={item.intro}
          />
        ))}
      </div>
    </div>
  );
}
