
import { ArrowUpRight, MessageCircle } from 'lucide-react'

const whatsappMessage =
  'Olá, Lari! Conheci a Lari Dev pelo site e gostaria de solicitar um orçamento para o meu projeto. Podemos conversar?'

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
            Conte sua ideia e solicite um orçamento
            personalizado para o seu negócio.
          </p>
        </div>

        <div className="contact-details">
          <span
            className="contact-symbol"
            aria-hidden="true"
          >
            <MessageCircle size={42} strokeWidth={1} />
          </span>

          <h3>Vamos tirar sua ideia do papel?</h3>

          <p>
            Vamos conversar sobre o que sua marca precisa
            e encontrar a melhor solução para seu projeto.
          </p>

          <a
            className="button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            <MessageCircle size={18} />
            Solicitar orçamento
            <ArrowUpRight size={17} />
          </a>

          <span className="contact-note">
            Sites personalizados · Landing pages · Soluções web
          </span>
        </div>
      </div>
    </section>
  )
}
