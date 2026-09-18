import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import VisitPing from '@/components/VisitPing'

export default function Page() {
  return (
    <>
      <VisitPing />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  )
}
