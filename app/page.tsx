"use client"

import { Contact } from "lucide-react";
import { AboutUs } from "./(components)/AboutUs";
import { CaseStudies } from "./(components)/CaseStudies";
import { Process } from "./(components)/Process";
import { Services } from "./(components)/Services";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./(components)/Hero"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <AboutUs />
      <Contact />
    </>
  );
}
