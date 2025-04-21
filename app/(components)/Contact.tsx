"use client"

import { Send, Calendar, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
export function Contact() {
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
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
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
            {/* Header Content */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Schedule a consultation with our team to discuss how our AI
              solutions can help you achieve your business goals
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12"
          >
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
              >
                {/* Contact Information */}
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail size={20} className="text-[#ff3366] mr-3" />
                    <span>contact@aiagency.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="text-[#5c6cff] mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-[#36d6ff] mr-3" />
                    <span>Book a meeting via Calendly</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                }}
                className="bg-gradient-to-br from-[#ff3366]/20 to-[#5c6cff]/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                {/* Office Content */}
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <p className="text-gray-300 mb-4">
                  123 AI Innovation Center
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form className="space-y-6">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#5c6cff] to-[#5c6cff]/80 text-white rounded-lg font-medium inline-flex items-center hover:shadow-lg hover:shadow-[#5c6cff]/20 transition-all"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Animated background elements */}
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
        className="absolute top-1/3 left-0 w-64 h-64 bg-[#ff3366]/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#5c6cff]/10 rounded-full blur-3xl"
      />
    </section>
  )
}
