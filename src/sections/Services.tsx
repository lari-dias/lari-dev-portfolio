
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
    text: 'Páginas estratégicas para divulgar seus serviços e atrair novos contatos.',
    message:
      'Olá, Lari! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para uma landing page. Podemos conversar?'
  },
  {
    icon: Monitor,
    title: 'Sites institucionais',
    text: 'Sites profissionais que valorizam sua marca e apresentam seu negócio.',
    message:
      'Olá, Lari! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para um site institucional. Podemos conversar?'
  },
  {
    icon: PanelsTopLeft,
    title: 'Interfaces web',
    text: 'Interfaces modernas, intuitivas e adaptadas a diferentes dispositivos.',
    message:
      'Olá, Lari! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para uma interface web. Podemos conversar?'
  }
]

export function Services() {
  return (
    <section id="servicos" className="section services-section">
      <div className="container">
        <div className="heading-with-aside">
          <SectionHeading
            eyebrow="01 / SERVIÇOS"
            title="Soluções digitais para valorizar seu negócio."
          />
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
                  aria-label={`Solicitar orçamento para ${title} pelo WhatsApp`}
                >
                  Solicitar orçamento
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
