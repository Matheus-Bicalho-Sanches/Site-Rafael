import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import Testimonials from '@/components/sections/Testimonials'
import Benefits from '@/components/sections/Benefits'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Testimonials />
      <Benefits />
      <FAQ />
      <Footer />
    </>
  )
} 