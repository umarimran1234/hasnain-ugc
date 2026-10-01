import { CursorGlow, Nav, ScrollProgress } from "@/components/Chrome";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { Marquee, Niches, Process, Services, Why } from "@/components/Sections";
import { About, Contact, Faq, Footer, Packages } from "@/components/Rest";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Niches />
        <Work />
        <Services />
        <Why />
        <Process />
        <Packages />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
