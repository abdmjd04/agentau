import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentaurix - Booking",
  applicationName: "Agentaurix",
  keywords: [
    "AI Solutions",
    "Full Stack Software Development",
    "MLOps",
    "DevOps",
    "Booking",
    "Contact"
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
  return <div>{children}</div>;
}
