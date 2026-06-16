import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <ScrollReveal delay={0}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <Education />
      </ScrollReveal>
      <ScrollReveal delay={240}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={320}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <Certifications />
      </ScrollReveal>
      <ScrollReveal delay={480}>
        <Contact />
      </ScrollReveal>
    </main>
  );
}