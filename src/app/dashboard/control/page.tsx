import FileInput from "@/components/client/FileInput";

export default async function Page() {
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>控制台</h1>

      <FileInput />
    </main>
  );
}
