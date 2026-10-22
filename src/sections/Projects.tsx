import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectGallery } from '../components/ui/ProjectGallery'
import { ProjectCard } from '../components/ui/ProjectCard'
import { github, projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projetos" className="section projects-section"><div className="container">
      <SectionHeading eyebrow="04 / PROJETOS SELECIONADOS" title="Ideias que viraram código." description="Uma visão do que construo: da presença digital de uma marca à comunicação entre serviços." />
      <article className="featured-project">
        <div className="featured-description"><span className="eyebrow">EM DESTAQUE / DESENVOLVIMENTO WEB</span><h3>Cláudio Barbosa<br /><span>Advocacia</span></h3><p>Landing page institucional para apresentar a atuação do escritório, organizar seus serviços e facilitar o acesso às informações de contato.</p><p>Uma composição sóbria, com hierarquia clara e uma identidade visual que acompanha o contexto jurídico.</p><ul className="badges"><li>React</li><li>TypeScript</li><li>Vite</li></ul><span className="featured-label">Explore o projeto nas cinco imagens <ArrowUpRight size={16} /></span></div>
        <ProjectGallery />
      </article>
      <div className="backend-heading"><div><span className="eyebrow">NOS BASTIDORES</span><h3>Back-end Java, em prática.</h3></div><p>APIs, autenticação e integração entre serviços.<br />Conheça a implementação nos repositórios.</p></div>
      <div className="api-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      <a className="text-link github-link" href={github} target="_blank" rel="noreferrer">Mais código no meu GitHub <ArrowUpRight size={16} /></a>
    </div></section>
  )
}
