import { ArrowUpRight, CalendarDays, Mail, Network, Users } from 'lucide-react'
import { projects } from '../../data/portfolio'

const icons = { users: Users, calendar: CalendarDays, mail: Mail, network: Network }

export function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const Icon = icons[project.icon as keyof typeof icons]
  return (
    <article className="api-card">
      <div className="card-top"><span className="api-icon"><Icon size={25} /></span><span className="mono">JAVA / 0{index + 1}</span></div>
      <span className="project-category">{project.category}</span><h3>{project.title}</h3>
      {project.status && <span className="status"><span className="tiny-dot" />{project.status}</span>}
      <p>{project.description}</p><ul className="badges">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
      {project.url ? <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Explorar repositório <ArrowUpRight size={16} /></a> : <span className="project-progress">Construindo as próximas conexões.</span>}
    </article>
  )
}
