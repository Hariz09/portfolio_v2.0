import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About/Main'
import Contact from '@/components/Contact/Main'
import ProjectsSection from '@/components/Projects'
import StarryBackground from '@/components/StarryBackground'

export default function Home() {
  return (
    <main>
      <div className="relative">
  <StarryBackground className="absolute inset-0"
  />
  <div className="relative z-10">

      <Header />
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
      </div>
      </div>
    </main>
  )
}