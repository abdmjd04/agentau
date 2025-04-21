"use client"

import { ChevronRight } from 'lucide-react'
import Lottie from 'lottie-react'
import aiAnimation from './animations/ai-animation.json'
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <div className="mb-2">AI Solutions</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#5c6cff]">
              Engineered
              <br />
              Deployed
              <br />
              Scaled
            </div>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            We build production-grade AI systems from LLM agents to DevOps
            pipelines
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-[#ff3366] to-[#ff3366]/80 text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-[#ff3366]/20 transition-all"
            >
              Book a Strategy Call
              <ChevronRight size={18} className="ml-1" />
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5c6cff]/30 to-[#ff3366]/30 rounded-3xl blur-3xl"></div>
            <div className="relative z-10">
              <Lottie
                animationData={aiAnimation}
                loop={true}
                className="w-full h-full"
               
              />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#5c6cff]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#0a0a1a] z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#ff3366]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#5c6cff]/10 rounded-full blur-3xl"></div>
    </section>
  )
}
