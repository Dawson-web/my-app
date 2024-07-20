"use client";
import Menu from "@/components/client/menu";
import { Toaster } from "@/components/ui/sonner";
import clsx from "clsx";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [layout, setLayout] = useState<string>(
    localStorage.getItem("layout") || "horizontal"
  );
  return (
    <main
      className={clsx("flex h-screen flex-1 sm:flex-row overflow-y-hidden", {
        "sm:flex-col": layout === "vertical",
        "flex-row": layout === "horizontal",
        "flex-col": layout === "vertical",
      })}
    >
      <Menu layout={layout} setLayout={setLayout} />
      <section
        className={clsx(
          "w-full flex flex-col items-center h-screen bg-gray-200 dark:bg-gray-900"
        )}
      >
        {children}
      </section>
      <Toaster />
    </main>
  );
}
