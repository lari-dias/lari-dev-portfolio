
import {
  ArrowUpRight,
  PanelsTopLeft,
  Monitor,
  MousePointer2
} from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'

const services = [
  {
    icon: MousePointer2,
    title: 'Landing pages',
    text: 'Páginas estratégicas para apresentar seu produto ou serviço e incentivar o visitante a entrar em contato.',
    message: 'Olá, Lari! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para uma landing page. Podemos conversar?'
  },
  {
    icon: Monitor,
    title: 'Sites institucionais',
    text: 'Sites profissionais que valorizam sua marca, apresentam seus serviços e facilitam o contato com seus clientes.',
    message: 'Olá, Lari! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para um site institucional. Podemos conversar?'
  },
  {
    icon: PanelsTopLeft,
    title: 'Interfaces web',
    text: 'Interfaces modernas e responsivas, desenvolvidas para oferecer uma experiência intuitiva em diferentes dispositivos.',
    message: 'Olá, Lari! Conheci seu trabalho pelo site e gostaria de conversar sobre o desenvolvimento de uma interface web. Podemos conversar?'
  }
]

export function Services() {
  return (
    <section id="servicos" className="section services-section">
      <div className="container">
        <div className="heading-with-aside">
          <SectionHeading
            eyebrow="01 / O QUE POSSO CRIAR PARA VOCÊ"
            title="Sua ideia merece uma boa presença digital."
          />

          <p>
            Soluções web que combinam design, funcionalidade
            e uma experiência pensada para seu público.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text, message }, index) => {
            const whatsappUrl = `https://wa.me/5511965919355?text=${encodeURIComponent(message)}`

            return (
              <article className="service-card" key={title}>
                <div className="card-top">
                  <span className="icon-box">
                    <Icon size={23} />
                  </span>

                  <span className="card-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <a
                  href={whatsappUrl}
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar sobre ${title} pelo WhatsApp`}
                >
                  Conversar sobre o projeto
                  <ArrowUpRight size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
