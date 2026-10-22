import { ArrowUpRight } from 'lucide-react'
import { journey } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Journey() {
  return (
    <section id="trajetoria" className="section container journey-grid">
      <div className="journey-intro"><SectionHeading eyebrow="05 / TRAJETÓRIA" title="Um percurso em constante construção." description="A comunicação faz parte da minha base. O desenvolvimento de software abre novos caminhos para criar." /><span className="journey-mark" aria-hidden="true"><ArrowUpRight strokeWidth={1} /></span><p className="journey-note">Formação, prática e aprendizado contínuo.</p></div>
      <ul className="timeline">{journey.map(item => <li key={item.title}><span className="timeline-dot" aria-hidden="true" /><div className="timeline-heading"><h3>{item.title}</h3><span className={`timeline-status ${item.status === 'Em andamento' ? 'ongoing' : ''}`}>{item.status}</span></div><p>{item.description}</p></li>)}</ul>
    </section>
  )
}
