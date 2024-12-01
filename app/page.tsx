import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IntroSection from '@/components/IntroSection'
import ExperienceSection from '@/components/ExperienceSection'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import SpotlightEffect from '@/components/SpotlightEffect'
import About from '@/components/About'
import Projects from '@/components/Projects'


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
  )
}
