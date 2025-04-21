import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./(components)/Navbar";
import { Footer } from "./(components)/Footer";

export const metadata: Metadata = {
  title: "AI Services",
  description: "AI Services for Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
