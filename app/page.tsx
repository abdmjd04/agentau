"use client";

import { AboutUs } from "./(components)/AboutUs";
import { CaseStudies } from "./(components)/CaseStudies";
import { Footer } from "./(components)/Footer";
import { Navbar } from "./(components)/Navbar";
import { Process } from "./(components)/Process";
import { Services } from "./(components)/Services";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./(components)/Hero"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <Services />
      <Process />
      <CaseStudies />
      <AboutUs />
      <Footer />
    </>
  );
}
