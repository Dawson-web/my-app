import ControlButton from "@/components/client/ControlButton";
import FileInput from "@/components/client/FileInput";

export default async function Page() {
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard</h1>

      <ControlButton />
      <FileInput />
    </main>
  );
}
