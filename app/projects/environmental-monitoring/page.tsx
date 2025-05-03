"use client";

import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";

import climatechChartSvg from "@/app/(assets)/images/climatech_chart.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CaseStudyInsidePage03() {
  const chartData = {
    labels: ["Before", "After"],
    datasets: [
      {
        label: "ESG Reporting Speed (Days)",
        data: [30, 12],
        backgroundColor: ["#0a132b", "#ff007f"],
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-[#0a132b] text-white font-sans pt-12">
      <section className="text-center py-20">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Environmental Monitoring & ESG Compliance
        </motion.h1>
        <motion.p
          className="text-lg mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Enabling real-time environmental insights and automated ESG reporting.
        </motion.p>
      </section>

      <section className="py-20 bg-[#0e1a36] grid md:grid-cols-2 gap-10 p-10">
        <div className=" md:pl-16">
          <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
          <ul className="list-disc space-y-4 pl-5 text-pink-400">
            <li>
              Manual ESG reporting processes delayed compliance deadlines.
            </li>
            <li>
              Inaccurate emission tracking and carbon footprint estimations.
            </li>
            <li>High operational costs for sustainability compliance.</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={climatechChartSvg}
            alt="ClimateTech AI Pipeline Diagram"
            className="w-96"
          />
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-10">The Agentaurix Solution</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          ClimateTech AI agents integrate sensor data from IoT environmental
          networks, apply real-time CV models for emissions tracking, and
          generate automated ESG compliance reports via LLM-based agents.
        </p>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-10">Deployment | Tech Stack</h2>
        <div className="grid md:grid-cols-4 gap-8 px-10">
          <div className="bg-[#111b2f] p-6 rounded-lg">
            AWS Sustainability Cloud
          </div>
          <div className="bg-[#111b2f] p-6 rounded-lg">
            NVIDIA Triton Server
          </div>
          <div className="bg-[#111b2f] p-6 rounded-lg">
            Carbon Tracking IoT Sensors
          </div>
          <div className="bg-[#111b2f] p-6 rounded-lg">
            LLM-Based Compliance Engines
          </div>
        </div>
      </section>

      <section className="bg-pink-500 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#0a132b] mb-10">
          Measured Impact
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10">
          <div className="text-[#0a132b]">
            <p className="text-4xl font-bold mb-2">60%</p>
            <p className="text-lg">Faster ESG Compliance Reporting</p>
            <p className="text-4xl font-bold mt-6 mb-2">$300K+</p>
            <p className="text-lg">Annual Reporting Cost Savings</p>
            <p className="text-2xl font-bold mt-6">97%</p>
            <p className="text-lg">Accuracy in Carbon Tracking</p>
          </div>
          <div className="w-[300px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-10">
        <h2 className="text-2xl font-bold mb-8">Testimonial</h2>
        <blockquote className="text-lg italic text-gray-400 max-w-2xl mx-auto">
          {`"Agentaurix ClimateTech solutions helped us streamline ESG compliance with unprecedented speed and transparency."`}
        </blockquote>
      </section>

      <section className="py-20 bg-[#0e1a36] text-center">
        <h2 className="text-2xl font-bold mb-6">
          Ready to Future-Proof Your Environmental Strategies?
        </h2>
        <motion.a
          href="/booking"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className="bg-pink-500 px-12 py-4 text-white rounded-full"
        >
          Book Now
        </motion.a>
      </section>
    </div>
  );
}
