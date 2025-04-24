import React from 'react'
import { Code, Database, Server, Layout, Shield, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'
export function Services() {
  const services = [
    {
      icon: <Code size={32} className="text-[#ff3366]" />,
      title: 'AI Agents',
      description:
        'Custom LLM agents built using LangGraph and AutoGen for specialized tasks and workflows',
      gradient: 'from-[#ff3366]/20 to-[#ff3366]/5',
    },
    {
      icon: <Database size={32} className="text-[#5c6cff]" />,
      title: 'MLOps Infrastructure',
      description:
        'End-to-end MLflow pipelines with CI/CD integration and Triton for model deployment',
      gradient: 'from-[#5c6cff]/20 to-[#5c6cff]/5',
    },
    {
      icon: <Server size={32} className="text-[#36d6ff]" />,
      title: 'DevOps Solutions',
      description:
        'Containerized deployments with Docker, Kubernetes, and GitHub Actions automation',
      gradient: 'from-[#36d6ff]/20 to-[#36d6ff]/5',
    },
    {
      icon: <Layout size={32} className="text-[#ffb238]" />,
      title: 'Full-stack Applications',
      description:
        'Modern web applications and dashboards built with Next.js and React',
      gradient: 'from-[#ffb238]/20 to-[#ffb238]/5',
    },
    {
      icon: <Shield size={32} className="text-[#36ffb2]" />,
      title: 'Compliance-focused AI',
      description:
        'Domain-specific AI solutions for ESG reporting and maritime optimization',
      gradient: 'from-[#36ffb2]/20 to-[#36ffb2]/5',
    },
    {
      icon: <BarChart size={32} className="text-[#ff36d6]" />,
      title: 'Energy Sector Solutions',
      description:
        'Specialized AI tools for energy monitoring, optimization and forecasting',
      gradient: 'from-[#ff36d6]/20 to-[#ff36d6]/5',
    },
  ]
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }
  return (
    <section id="services" className="pt-10 pb-20 md:pt-12 md:pb-32 relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We build and deploy production-ready AI solutions that solve real
            business problems with a focus on scalability, reliability, and
            performance.
          </p>
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
              }}
              className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-white/5 group"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
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
        className="absolute top-1/4 left-0 w-64 h-64 bg-[#5c6cff]/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff3366]/10 rounded-full blur-3xl"
      />
    </section>
  )
}
