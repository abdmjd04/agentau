"use client";

import { Search, PenTool, Code2, Network, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
export function Process() {
  const steps = [
    {
      icon: <Search size={24} className="text-white" />,
      title: "Discovery",
      description:
        "We analyze your business & identify AI integration opportunities",
      color: "#ff3366",
      gradient: "from-[#ff3366]/20 to-transparent",
    },
    {
      icon: <PenTool size={24} className="text-white" />,
      title: "Design",
      description:
        "We architect a solution that aligns with your objectives and technical requirements",
      color: "#5c6cff",
      gradient: "from-[#5c6cff]/20 to-transparent",
    },
    {
      icon: <Code2 size={24} className="text-white" />,
      title: "Build",
      description:
        "We develop and test your AI solution using industry best practices",
      color: "#36d6ff",
      gradient: "from-[#36d6ff]/20 to-transparent",
    },
    {
      icon: <Network size={24} className="text-white" />,
      title: "Integrate",
      description:
        "We seamlessly integrate the AI solution with your existing systems",
      color: "#ffb238",
      gradient: "from-[#ffb238]/20 to-transparent",
    },
    {
      icon: <BarChart3 size={24} className="text-white" />,
      title: "Launch & Monitor",
      description:
        "We deploy your solution and provide ongoing support and optimization",
      color: "#36ffb2",
      gradient: "from-[#36ffb2]/20 to-transparent",
    },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  const glowVariants = {
    initial: {
      opacity: 0.5,
    },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a1a]"></div>
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 h-10"
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={glowVariants}
          className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#ff3366]/10 rounded-full blur-[100px]"
        />
        <motion.div
          variants={glowVariants}
          className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#5c6cff]/10 rounded-full blur-[100px]"
        />
      </motion.div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our proven methodology ensures we deliver high-quality AI solutions
            that meet your business objectives
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              {/* Connector line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] right-0 h-[2px] bg-gradient-to-r from-[${step.color}] to-[${steps[index + 1].color}] transform -translate-y-1/2 opacity-20"></div>
              )}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                className={`
                 line-clamp-4 relative p-8 rounded-2xl transition-all duration-300
                  bg-gradient-to-b from-white/5 to-transparent
                  border border-white/10 hover:border-white/20
                  backdrop-blur-sm
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
                `}
              >
                <div className="relative">
                  {/* Step number with pulse effect */}
                  <div className="absolute -top-4 -left-4">
                    <div
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium"
                      style={{
                        color: step.color,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{
                        backgroundColor: step.color,
                      }}
                    />
                  </div>
                  {/* Icon container with hover animation */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3
                    className="text-xl font-semibold mb-4 transition-colors duration-300"
                    style={{
                      color: step.color,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
                {/* Animated gradient background */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 0.2,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, transparent)`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
