import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About/Main'
import Projects from '@/components/Projects/Main'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <p className='bg-red-400'> THIS IS DEMONSTRATION, SOME INFORMATION IS INNACCURATE</p>
    </main>
  )
}