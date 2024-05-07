import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import "./index.css";
export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        I have some content in here
      </motion.div>
    </main>
  );
}
