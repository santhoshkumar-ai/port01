// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import TeckStack from "./TechStack";
import CustomCursor from "@/components/CustomCursor";
import './globals.css';

export default function Portfolio() {
  return (
    <div className="relative z-0 overflow-visible scroll-smooth">
      <CustomCursor />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="tech">
        <TeckStack />
      </section>
      <section id="experience">
        <Resume />
      </section>
      <section id="project">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}


