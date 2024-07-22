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
  const [layout, setLayout] = useState<string>("horizontal");
  return (
    <main className={clsx("flex h-screen sm:flex-row ")}>
      <Menu layout={layout} setLayout={setLayout} />

      <section
        className={clsx(
          "grow w-full flex flex-col items-center h-screen bg-gray-200 dark:bg-gray-900"
        )}
      >
        {children}
      </section>
      <Toaster />
    </main>
  );
}
