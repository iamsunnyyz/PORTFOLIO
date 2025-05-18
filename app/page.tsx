'use client';
import dynamic from 'next/dynamic'

// Server components
import Footer from '../components/Footer'
import Contact from '@/components/Contact'

// Client components with dynamic imports
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
const IntroSection = dynamic(() => import('@/components/IntroSection'), { ssr: false })
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const SpotlightEffect = dynamic(() => import('@/components/SpotlightEffect'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })

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
