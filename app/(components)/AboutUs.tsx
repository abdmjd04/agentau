"use client";

import { motion } from "framer-motion";
export function AboutUs() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "Chief AI Architect",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
    },
    {
      name: "David Park",
      role: "Head of Engineering",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    },
    {
      name: "Maya Rodriguez",
      role: "ML Operations Lead",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop",
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
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
    <section id="about" className="py-20 md:py-32 bg-[#0a0a1a] relative">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {`We're a team of AI engineers, data scientists, and full-stack
            developers passionate about building production-grade AI systems
            that deliver measurable business val`}
            ue
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-[#5c6cff]">
              Our Vision
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              We believe AI should be accessible, reliable, and impactful. Our
              mission is to bridge the gap between cutting-edge AI research and
              practical business applications.
            </p>
            <p className="text-lg text-gray-300">
              {`We're committed to building solutions that are not just
              technically impressive, but also deliver meaningful results for
              our clients and their customers.`}
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-[#ff3366]">
              Our Approach
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              We take a pragmatic, results-oriented approach to AI development.
              We focus on understanding your business challenges first, then
              design AI solutions that address those specific needs.
            </p>
            <p className="text-lg text-gray-300">
              Our expertise spans the entire AI lifecycle, from initial concept
              and data strategy to production deployment and ongoing
              optimization.
            </p>
          </motion.div>
        </motion.div>
        <motion.h3
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="text-2xl font-semibold mb-10 text-center"
        >
          Our Team
        </motion.h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="mb-6 relative mx-auto w-48 h-48 overflow-hidden rounded-full border-2 border-white/20"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
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
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#ff3366]/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#5c6cff]/10 rounded-full blur-3xl"
      />
    </section>
  );
}
