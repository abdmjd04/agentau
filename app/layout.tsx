import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Agentaurix",
  description: "Agentaurix for Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`antialiased`}>
        <ToastContainer theme="colored" autoClose={4000} />
        <main>{children}</main>
      </body>
    </html>
  );
}
