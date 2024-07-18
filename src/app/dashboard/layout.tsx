import Menu from "@/components/client/menu";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col flex-1 sm:flex-row">
      <Menu />
      <section className="w-full flex flex-col items-center h-screen bg-zinc-100">
        {children}
      </section>
      <Toaster />
    </main>
  );
}
