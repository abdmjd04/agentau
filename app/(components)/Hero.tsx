"use client";

import { ChevronRight } from "lucide-react";
import { useLottie } from "lottie-react";
import aiAnimation from "./animations/ai-animation.json";
import { useState } from "react";
import { BookingDialog } from "./BookingDailog";
import { motion } from "framer-motion";
import { PopupWidget } from "react-calendly";
import Calandy from "./Calandy";
import { useRouter } from "next/navigation";
export default function Hero() {
  const defaultOptions = {
    animationData: aiAnimation,
    loop: true,
  };
  const router = useRouter();
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
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* <PopupWidget
            url="https://calendly.com/futureartificialintelligences/30min"
        
            rootElement={document.getElementById("root")}
            text="Click here to schedule!"
            textColor="#ffffff"
            color="#00a2ff"
          /> */}
         
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
                onClick={() => router.push("/booking")}
                className=" cursor-pointer px-6 py-3 bg-gradient-to-r from-[#ff3366] to-[#ff3366]/80 text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-[#ff3366]/20 transition-all"
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
          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0 relative"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#5c6cff]/30 to-[#ff3366]/30 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">{View}</div>
            </div>
          </motion.div>
        </div>
      </section>
      <BookingDialog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
