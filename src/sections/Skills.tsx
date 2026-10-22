import { Braces, Database, PanelsTopLeft, Terminal } from 'lucide-react'
import { skills } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'

const icons = [Braces, PanelsTopLeft, Database, Terminal]

export function Skills() {
  return (
    <section id="habilidades" className="section container">
      <SectionHeading eyebrow="03 / REPERTÓRIO TÉCNICO" title="Tecnologia para dar forma às ideias." description="Meu foco está no ecossistema Java, com uma visão Full Stack para conectar os bastidores à experiência de quem usa." />
      <div className="skills-grid">{skills.map((group, index) => {
        const Icon = icons[index]
        return <article key={group.title} className={`skill-card ${index === 0 ? 'skill-primary' : ''}`}><div className="skill-heading"><span className="icon-box"><Icon size={21} /></span><div><h3>{group.title}</h3><p>{group.caption}</p></div></div><ul className="badges">{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>
      })}</div>
    </section>
  )
}
