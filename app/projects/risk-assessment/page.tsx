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

import meditechChartSvg from "@/app/(assets)/images/meditech_chart.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CaseStudyInsidePage04() {
  const chartData = {
    labels: ["Before", "After"],
    datasets: [
      {
        label: "Surgical Success Rate (%)",
        data: [60, 81],
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
          Surgical Risk Assessment & Prediction
        </motion.h1>
        <motion.p
          className="text-lg mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Empowering surgeons with AI-driven predictive insights for safer
          outcomes.
        </motion.p>
      </section>

      <section className="py-20 bg-[#0e1a36] grid md:grid-cols-2 gap-10 p-10">
        <div className=" md:pl-8">
          <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
          <ul className="list-disc space-y-4 pl-5 text-pink-400">
            <li>High variability in pre-operative risk assessment accuracy.</li>
            <li>Delayed identification of surgical complications.</li>
            <li>Increased healthcare costs from avoidable complications.</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={meditechChartSvg}
            alt="MedTech AI Pipeline Diagram"
            className="w-96"
          />
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-10">The Agentaurix Solution</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          MedTech AI agents leverage MRI/CT imaging analysis, patient metadata
          fusion, and advanced predictive models to deliver real-time risk
          scoring and actionable LLM-generated surgical summaries.
        </p>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-10">Deployment | Tech Stack</h2>
        <div className="grid md:grid-cols-4 gap-8 px-10">
          <div className="bg-[#111b2f] p-6 rounded-lg">
            HIPAA-Compliant Secure Cloud
          </div>
          <div className="bg-[#111b2f] p-6 rounded-lg">
            NVIDIA Triton Inference Server
          </div>
          <div className="bg-[#111b2f] p-6 rounded-lg">Clinical LLM Agents</div>
          <div className="bg-[#111b2f] p-6 rounded-lg">
            Secure Health Data Pipelines
          </div>
        </div>
      </section>

      <section className="bg-pink-500 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#0a132b] mb-10">
          Measured Impact
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10">
          <div className="text-[#0a132b]">
            <p className="text-4xl font-bold mb-2">35%</p>
            <p className="text-lg">Improved Surgical Success Rate</p>
            <p className="text-4xl font-bold mt-6 mb-2">25%</p>
            <p className="text-lg">Reduction in Insurance Claim Costs</p>
            <p className="text-2xl font-bold mt-6">42%</p>
            <p className="text-lg">More Accurate Pre-Op Risk Scoring</p>
          </div>
          <div className="w-[300px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-10">
        <h2 className="text-2xl font-bold mb-8">Testimonial</h2>
        <blockquote className="text-lg italic text-gray-400 max-w-2xl mx-auto">
          {`"Agentaurix's surgical risk AI agents empowered our surgeons with real-time risk stratification, dramatically improving patient outcomes."`}
        </blockquote>
      </section>

      <section className="py-20 bg-[#0e1a36] text-center">
        <h2 className="text-2xl font-bold mb-6">
          Ready to Revolutionize Your Surgical Outcomes?
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
