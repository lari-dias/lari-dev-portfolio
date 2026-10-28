
import { ArrowUpRight, MessageCircle, Code2 } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { whatsappUrl } from './whatsapp'

export function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="container about-grid">
        <div className="about-visual">
          <span className="eyebrow">
            A CONEXÃO ENTRE DOIS MUNDOS
          </span>

          <div className="about-word">
            comunicar<span>+</span>desenvolver
            <span className="about-period">.</span>
          </div>

          <div className="about-symbols" aria-hidden="true">
            <MessageCircle />
            <span>· · ·</span>
            <Code2 />
          </div>

          <p>
            Escuta para entender.
            <br />
            Criatividade para conectar.
            <br />
            Tecnologia para transformar.
          </p>
        </div>

        <div>
          <SectionHeading
            eyebrow="02 / SOBRE A LARI DEV"
            title="Tecnologia e comunicação para valorizar sua marca."
          />

          <div className="prose">
            <p>
              Sou a Lari, desenvolvedora Full Stack e criadora
              da Lari Dev. Desenvolvo sites e experiências digitais
              personalizadas para empresas e profissionais.
            </p>

            <p>
              Com sete anos de experiência em comunicação,
              uno criatividade e tecnologia para criar soluções
              que valorizam a identidade de cada negócio.
            </p>
          </div>

          <a
            className="text-link"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar sobre um projeto pelo WhatsApp"
          >
            Vamos conversar sobre seu projeto?
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
