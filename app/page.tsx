import { Contact } from "lucide-react";
import { AboutUs } from "./(components)/AboutUs";
import { CaseStudies } from "./(components)/CaseStudies";
import { Hero } from "./(components)/Hero";
import { Process } from "./(components)/Process";
import { Services } from "./(components)/Services";

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
