import About from '@/components/About';
import Contact from '@/components/Contact';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SpotlightEffect from '@/components/SpotlightEffect';

export default function Home() {
  return (
    <>
      <SpotlightEffect />
      <Navbar />
      <IntroSection />
      <About />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
