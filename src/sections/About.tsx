
import { ArrowUpRight, MessageCircle, Code2 } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'

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
            Código para construir.
          </p>
        </div>

        <div>
          <SectionHeading
            eyebrow="02 / SOBRE MIM"
            title="Antes de escrever código, aprendi a contar histórias."
          />

          <div className="prose">
            <p>
              Minha trajetória começou no Jornalismo, onde atuei
              por sete anos com comunicação, rádio e mídias digitais.
            </p>

            <p>
              Hoje, sou desenvolvedora Full Stack, com foco em
              Back-end Java. Trabalho com Spring Boot, React e
              TypeScript para transformar ideias em soluções digitais.
            </p>

            <p>
              Na Lari Dev, uno tecnologia e comunicação para
              desenvolver experiências web modernas, funcionais
              e alinhadas às necessidades de cada negócio.
            </p>
          </div>

          <a className="text-link" href="#trajetoria">
            Conheça minha trajetória
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
