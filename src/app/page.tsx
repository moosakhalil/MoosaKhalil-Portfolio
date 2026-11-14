import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import GithubSnake from "@/components/sections/GithubSnake";
import HealthSyncSpotlight from "@/components/sections/HealthSyncSpotlight";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GithubSnake />
        <HealthSyncSpotlight />
        <Achievements />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
