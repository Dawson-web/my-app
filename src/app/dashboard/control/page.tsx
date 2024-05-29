"use client";
import { RenderComponent } from "@/components/client/RenderComponent";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";
export default function Page() {
  const [component, setComponent] = useState<string>("ArticleUpload");

  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>控制台</h1>
      <Menubar className="w-[80%]">
        <MenubarMenu>
          <MenubarTrigger>文章</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setComponent("ArticleUpload")}>
              发布
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => setComponent("ArticleDelete")}>
              删除
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>......</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-col gap-4 border-solid	border-2	rounded-lg	p-4 border-zinc-600	min-w-[360px] w-[85vw]">
        <RenderComponent component={component} />
      </div>
    </main>
  );
}
