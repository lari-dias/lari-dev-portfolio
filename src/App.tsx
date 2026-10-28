
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Process } from './sections/Process'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Services />
        <Process />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
