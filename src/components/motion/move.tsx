"use client";

import { motion } from "framer-motion";

export default function Move() {
  return (
    <motion.div
      style={{ width: "100px", height: "100px", background: "red" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
}
