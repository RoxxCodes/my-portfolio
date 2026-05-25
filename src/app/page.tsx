import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SystemDesign } from "@/components/SystemDesign";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <SystemDesign />
      <Contact />
    </>
  );
}
