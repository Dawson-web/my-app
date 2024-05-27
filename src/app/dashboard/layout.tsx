import Menu from "@/components/client/menu";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      <section className="w-full flex flex-col items-center ">
        {children}
      </section>
      <Toaster />
    </>
  );
}
