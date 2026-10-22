import { ArrowUpRight, PanelsTopLeft, Monitor, MousePointer2 } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'

const services = [
  { icon: MousePointer2, title: 'Landing pages', text: 'Uma página pensada para apresentar seu negócio, produto ou serviço com clareza e conduzir o visitante ao próximo passo.', detail: 'Uma ideia. Uma mensagem bem apresentada.' },
  { icon: Monitor, title: 'Sites institucionais', text: 'Uma presença digital profissional que traduz a identidade da sua marca e organiza o que seu público precisa conhecer.', detail: 'Seu negócio com espaço para se apresentar.' },
  { icon: PanelsTopLeft, title: 'Interfaces web', text: 'Interfaces personalizadas, responsivas e adaptadas às necessidades de cada projeto, com cuidado em cada interação.', detail: 'Funcionalidade que encontra uma boa experiência.' },
]

export function Services() {
  return (
    <section id="servicos" className="section services-section"><div className="container">
      <div className="heading-with-aside"><SectionHeading eyebrow="01 / O QUE POSSO CRIAR PARA VOCÊ" title="Sua ideia merece uma boa presença digital." /><p>Do primeiro contato à última interação, cada escolha tem um propósito.</p></div>
      <div className="services-grid">{services.map(({ icon: Icon, title, text, detail }, index) => (
        <article className="service-card" key={title}>
          <div className="card-top"><span className="icon-box"><Icon size={23} /></span><span className="card-number">0{index + 1}</span></div>
          <h3>{title}</h3><p>{text}</p><span className="service-detail">{detail}</span><a href="#contato" className="text-link">Conversar sobre o projeto <ArrowUpRight size={16} /></a>
        </article>
      ))}</div>
    </div></section>
  )
}
