"use client";

import { ChevronRight } from "lucide-react";
import { useLottie } from "lottie-react";
import aiAnimation from "./animations/ai-animation.json";
import { useState } from "react";
import { BookingDialog } from "./BookingDailog";
import { motion } from "framer-motion";
export default function Hero() {
  const defaultOptions = {
    animationData: aiAnimation,
    loop: true,
  };
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { View } = useLottie(defaultOptions);
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const gradientTextVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 z-10"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={gradientTextVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textVariants} className="mb-2">
              AI Solutions
            </motion.div>
            <motion.div
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#5c6cff]"
              variants={gradientTextVariants}
            >
              {["Engineered", "Deployed", "Scaled"].map((word, index) => (
                <motion.div
                  key={index}
                  variants={wordVariants}
                  className="leading-tight"
                >
                  {word}
                </motion.div>
              ))}
            </motion.div>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
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
              duration: 0.5,
            }}
          >
            We build production-grade AI systems from LLM agents to DevOps
            pipelines
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.5,
            }}
          >
            <motion.button
              onClick={() => setIsBookingOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#ff3366] to-[#ff3366]/80 text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-[#ff3366]/20 transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book a Strategy Call
              <motion.div
                initial={{
                  x: 0,
                }}
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <ChevronRight size={18} className="ml-1" />
              </motion.div>
            </motion.button>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5c6cff]/30 to-[#ff3366]/30 rounded-3xl blur-3xl"></div>
            <div className="relative z-10">{View}</div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#5c6cff]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#0a0a1a] z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#ff3366]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#5c6cff]/10 rounded-full blur-3xl"></div>
      <BookingDialog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
}
