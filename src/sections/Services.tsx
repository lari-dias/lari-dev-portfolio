
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
    text: 'Uma página pensada para apresentar seu negócio, produto ou serviço com clareza e conduzir o visitante ao próximo passo.',
    detail: 'Uma ideia. Uma mensagem bem apresentada.',
    message: 'Olá, Lari! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para uma landing page. Podemos conversar?'
  },
  {
    icon: Monitor,
    title: 'Sites institucionais',
    text: 'Uma presença digital profissional que traduz a identidade da sua marca e organiza o que seu público precisa conhecer.',
    detail: 'Seu negócio com espaço para se apresentar.',
    message: 'Olá, Lari! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para um site institucional. Podemos conversar?'
  },
  {
    icon: PanelsTopLeft,
    title: 'Interfaces web',
    text: 'Desenvolvimento de interfaces modernas, responsivas e funcionais, pensadas para oferecer uma navegação intuitiva e uma boa experiência em diferentes dispositivos.',
    detail: 'Tecnologia que transforma ideias em experiências digitais.',
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
            Do primeiro contato à última interação, cada escolha tem um propósito.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text, detail, message }, index) => {
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

                <span className="service-detail">
                  {detail}
                </span>

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
