import type { Metadata } from "next";
import { Navbar } from "../(components)/Navbar";
import { Footer } from "../(components)/Footer";

export const metadata: Metadata = {
  title: "Agentaurix - Projects",
  applicationName: "Agentaurix",
  keywords: [
    "AI Solutions",
    "Full Stack Software Development",
    "MLOps",
    "DevOps",
  ],
  publisher: "Agentaurix",
  description:
    "We build production-grade AI systems from LLM agents to DevOps pipelines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
