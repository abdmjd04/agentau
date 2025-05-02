import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentaurix - Booking",
  description: "Agentaurix for Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
