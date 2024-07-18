import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image"; // 如果你使用的是Next.js

export default function ProfileCard() {
  const avatarImage = "/avatar.jpeg";
  return (
    <main className=" gap-4 w-fll ">
      <Card>
        <CardHeader>
          <CardTitle>
            <Image
              src={avatarImage}
              alt="Dawson's avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
            Dawson
          </CardTitle>
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
