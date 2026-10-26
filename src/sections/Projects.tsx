
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectGallery } from '../components/ui/ProjectGallery'
import { ProjectCard } from '../components/ui/ProjectCard'
import { github, projects, webProjects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <SectionHeading
          eyebrow="04 / PROJETOS SELECIONADOS"
          title="Ideias que viraram código."
          description="Uma visão do que construo: da presença digital de uma marca à comunicação entre serviços."
        />

        {webProjects.map((project, index) => (
          <article
            className="featured-project"
            key={project.id}
          >
            <div className="featured-description">
              <span className="eyebrow">
                {index === 0
                  ? 'EM DESTAQUE / DESENVOLVIMENTO WEB'
                  : `${project.type.toUpperCase()} / DESENVOLVIMENTO WEB`}
              </span>

              <h3>
                {project.title}
                <br />
                <span>{project.subtitle}</span>
              </h3>

              {project.description.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}

              <ul className="badges">
                {project.stack.map(technology => (
                  <li key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              <span className="featured-label">
                Explore o projeto nas {project.images.length} imagens
                <ArrowUpRight size={16} />
              </span>
            </div>

            <ProjectGallery
              key={project.id}
              title={`${project.title} · ${project.subtitle}`}
              images={project.images}
            />
          </article>
        ))}

        <div className="backend-heading">
          <div>
            <span className="eyebrow">
              NOS BASTIDORES
            </span>

            <h3>
              Back-end Java, em prática.
            </h3>
          </div>

          <p>
            APIs, autenticação e integração entre serviços.
            <br />
            Conheça a implementação nos repositórios.
          </p>
        </div>

        <div className="api-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <a
          className="text-link github-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais código no meu GitHub
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
