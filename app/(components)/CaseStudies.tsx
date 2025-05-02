"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import climaTech from "../(assets)/images/climatech.webp";
import energytech from "../(assets)/images/energytech.webp";
import meditech from "../(assets)/images/meditech.webp";
export function CaseStudies() {
  const projects = [
    {
      title: "Environmental Monitoring & ESG Compliance Agents",
      category: "ClimateTech AI",
      description: (
        <motion.p
          className="text-md text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Accelerating ESG compliance by{" "}
          <span className="text-white font-semibold">60%</span> while reducing
          reporting costs by{" "}
          <span className="text-white font-semibold">$300K annually</span>.
        </motion.p>
      ),
      image: climaTech,
      gradient: "from-[#36d6ff]/80 to-[#5c6cff]/80",
    },
    {
      title: "Offshore Platform Defect Detection Agents",
      category: "EnergyTech AI",
      description: (
        <motion.p
          className="text-md text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Saving{" "}
          <span className="text-white font-semibold">$450K annually</span> by
          proactively identifying structural anomalies and optimizing offshore
          maintenance strategies.
        </motion.p>
      ),
      image: meditech,
      gradient: "from-[#ff3366]/80 to-[#ff36d6]/80",
    },
    {
      title: "Surgical Risk Assessment & Prediction Agents",
      category: "MedTech AI",
      description: (
        <motion.p
          className="text-md text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Enhancing surgical outcomes by{" "}
          <span className="text-white font-semibold">35%</span> and reducing
          insurance claim costs by{" "}
          <span className="text-white font-semibold">25%</span> through
          AI-powered predictive imaging analysis.
        </motion.p>
      ),
      image: energytech,
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
                  src={project.image.src}
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
