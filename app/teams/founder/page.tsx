"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Code, Brain, Heart } from "lucide-react";
import Image from "next/image";
import majeed from "../../(assets)/images/majeed.webp";

const Founder = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0a0a1a";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-12">
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut",
            }}
          />
        </div>
        {/* Content */}
        <div className="relative container mx-auto px-6 py-24 max-w-4xl">
          {/* Profile Photo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="mb-8 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm transform scale-105" />
              <motion.div
                className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#0a0a1a]"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Image
                  fill
                  src={majeed}
                  alt="Founder"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300"
                  alt="Profile"
                  className="w-full h-full object-cover"
                /> */}
              </motion.div>
            </div>
          </motion.div>
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-16 text-center font-bold"
          >
            Founder & CEO
          </motion.div>
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeIn}
            custom={0.7}
            className="mb-16"
          >
            <p className="text-xl leading-relaxed mb-6">
              I founded{" "}
              <span className="font-semibold text-blue-400">Agentaurix</span>{" "}
              {`with a singular vision to build intelligent systems that don't
              just adapt to change — they drive it.`}
            </p>
          </motion.div>
          {/* Experience Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeIn}
            custom={0.9}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/30 rounded-full mr-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold">
                Background & Experience
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {`With over a decade of hands-on experience in AI, NLP, Robotics,
              and full-stack engineering — and a Master's degree from Université
              de Grenoble Alpes — I have led the application of AI across
              critical industries including aerospace, healthcare, and maritime.`}
            </p>
          </motion.div>
          {/* Achievement Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeIn}
            custom={1.1}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-900/30 rounded-full mr-4">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-semibold">
                Startup Growth & Innovation
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Throughout my journey, I have not only engineered advanced AI
              solutions — I have actively helped startups grow, scale, and
              secure funding by aligning deep technology innovation with real
              business value. From early-stage aerospace ventures to healthcare
              disruptors and maritime pioneers, I have partnered closely with
              founders to build AI-driven products, streamline operations, and
              position their companies for successful fundraising rounds.
            </p>
          </motion.div>
          {/* Expertise Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeIn}
            custom={1.3}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/30 rounded-full mr-4">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold">Technical Expertise</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              My expertise spans the full innovation stack: building intelligent
              agents, deploying scalable MLOps infrastructures, automating
              complex workflows, and integrating DevOps pipelines that prepare
              companies to scale sustainably.
            </p>
          </motion.div>
          {/* Philosophy Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeIn}
            custom={1.5}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-900/30 rounded-full mr-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-semibold">Philosophy</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              I believe that the true power of AI lies not just in technical
              excellence, but in its ability to create resilient, intelligent
              organizations that thrive in a dynamic world.
            </p>
          </motion.div>
          {/* Current Focus */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeIn}
            custom={1.7}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/30 rounded-full mr-4">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold">Current Focus</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Today, I continue to work with visionary founders and
              forward-thinking companies — helping them translate bold ideas
              into engineered, intelligent realities that shape the future.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Founder;
