import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About/Main'
import Contact from '@/components/Contact'
import ProjectsSection from '@/components/Projects'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
      <p className='bg-red-400'> THIS IS DEMONSTRATION, SOME INFORMATION IS INNACCURATE</p>
    </main>
  )
}