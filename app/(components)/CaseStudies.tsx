"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export function CaseStudies() {
  const projects = [
    {
      title: "SmartShip Optimizer",
      category: "Maritime AI",
      description:
        "An intelligent system for optimizing ship routes, fuel consumption, and maintenance schedules using predictive analytics",
      image:
        "https://ucarecdn.com/a0982c9a-bce3-4d04-9474-49d14ebf4950/Gemini_Generated_Image_b4ohncb4ohncb4oh.jpeg",
      gradient: "from-[#36d6ff]/80 to-[#5c6cff]/80",
    },
    {
      title: "ESG Compliance Agent",
      category: "Regulatory Tech",
      description:
        "AI-powered agent that automates ESG reporting, ensures compliance, and identifies sustainability improvement opportunities",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1170&auto=format&fit=crop",
      gradient: "from-[#ff3366]/80 to-[#ff36d6]/80",
    },
    {
      title: "AIOps Monitoring Tool",
      category: "DevOps",
      description:
        "Intelligent monitoring system that predicts infrastructure issues before they occur and automates resolution",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
      gradient: "from-[#36ffb2]/80 to-[#ffb238]/80",
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
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
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
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              {`Explore our case studies to see how we've helped organizations
              transform their operations with AI`}
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 md:mt-0 inline-flex items-center text-[#5c6cff] hover:text-[#36d6ff] transition-colors"
          >
            View all case studies
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer"
            >
              <div className="absolute inset-0">
                <motion.img
                  initial={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-70`}
                />
              </div>
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
                  delay: index * 0.2,
                }}
                className="absolute inset-0 p-8 flex flex-col justify-end"
              >
                <span className="text-sm font-medium text-white/80 mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/80 mb-6">{project.description}</p>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute top-1/3 right-0 w-64 h-64 bg-[#ff3366]/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#5c6cff]/10 rounded-full blur-3xl"
      />
    </section>
  );
}
