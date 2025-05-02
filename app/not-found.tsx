"use client";

import { motion } from "framer-motion";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      {/* Icon */}
      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-blue-900/30 flex items-center justify-center">
          <FileQuestion className="w-16 h-16 text-blue-400" />
        </div>
      </motion.div>
      {/* Error Message */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        404
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="text-2xl mb-8 text-gray-300"
      >
        Oops! Page not found
      </motion.p>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        className="text-gray-400 mb-12 max-w-md"
      >
        {`The page you're looking for doesn't exist or has been moved.`}
      </motion.p>
      {/* Back Button */}
      <motion.button
        onClick={() => router.push("/")}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
        }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="flex items-center gap-2 px-6 py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium transition-transform"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back Home
      </motion.button>
    </div>
  );
};
export default NotFound;
