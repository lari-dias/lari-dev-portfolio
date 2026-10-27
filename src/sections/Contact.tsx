
import { ArrowUpRight, Code2, MessageCircle } from 'lucide-react'
import { github } from '../data/portfolio'

const whatsappMessage =
  'Olá, Lari! Conheci seu portfólio e gostaria de conversar sobre um projeto. Podemos conversar?'

const whatsappUrl = `https://wa.me/5511965919355?text=${encodeURIComponent(whatsappMessage)}`

export function Contact() {
  return (
    <section id="contato" className="container contact-section">
      <div className="contact-panel">
        <div>
          <span className="eyebrow">
            06 / VAMOS CONECTAR IDEIAS
          </span>

          <h2>
            Seu próximo projeto
            <br />
            pode começar com
            <br />
            <span>uma boa conversa.</span>
          </h2>

          <p>
            Precisa de uma presença digital para seu negócio
            ou busca uma profissional para sua equipe?
            Vamos conversar!
          </p>
        </div>

        <div className="contact-details">
          <span
            className="contact-symbol"
            aria-hidden="true"
          >
            <MessageCircle size={42} strokeWidth={1} />
          </span>

          <h3>Sua ideia começa aqui.</h3>

          <p>
            Conte sua ideia, apresente seu projeto ou entre
            em contato para conhecer melhor meu trabalho.
          </p>

          <a
            className="button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Conversar pelo WhatsApp
            <ArrowUpRight size={17} />
          </a>

          <a
            className="text-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              width: 'fit-content',
              marginTop: '20px'
            }}
          >
            <Code2 size={17} />
            Conhecer meu GitHub
            <ArrowUpRight size={16} />
          </a>

          <span className="contact-note">
            Desenvolvimento web · Full Stack · Back-end Java
          </span>
        </div>
      </div>
    </section>
  )
}
