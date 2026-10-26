
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
              Minha primeira formação foi em Jornalismo, com sete anos
              de experiência em comunicação, rádio, produção de conteúdo
              e social media.
            </p>

            <p>
              Na transição para a tecnologia, encontrei uma nova forma
              de transformar ideias em soluções digitais. Hoje, sou
              desenvolvedora Full Stack, com foco em Back-end Java,
              e desenvolvo projetos utilizando Spring Boot, React e
              TypeScript, além de estudar Angular.
            </p>

            <p>
              Concluí as formações da Recode Pro IA e Ada Tech e sigo
              aprimorando meus conhecimentos na graduação em Análise
              e Desenvolvimento de Sistemas e na formação Full Stack
              Java da Javanauta.
            </p>

            <p>
              Uno minha experiência em comunicação, criatividade e
              escuta ao desenvolvimento de software, criando soluções
              que conectam tecnologia e pessoas.
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
