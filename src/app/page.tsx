"use client";
import Move from "@/components/motion/move";
import { initializeAnalytics } from "@/lib/config/analytics";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    console.log(initializeAnalytics());
  }, []);
  return (
    <main className="flex min-w-40 min-h-screen flex-col items-center  justify-center p-24">
      <Move />
    </main>
  );
}
