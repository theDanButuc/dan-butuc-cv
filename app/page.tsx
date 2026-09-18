import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Gate from '@/components/Gate'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'

export default function Page() {
  return (
    <Gate>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </Gate>
  )
}
