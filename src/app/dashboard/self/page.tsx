import ControlButton from "@/components/client/ControlButton";
import FileInput from "@/components/client/FileInput";
import Menu from "@/components/client/menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page() {
  return (
    <main className=" gap-4 w-3/5 min-w-[300px]">
      Control
      <Card>
        <CardHeader>
          <CardTitle>Dawson</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>Cuit</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
