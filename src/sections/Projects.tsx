
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectGallery } from '../components/ui/ProjectGallery'
import { webProjects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <SectionHeading
          eyebrow="04 / PORTFÓLIO"
          title="Projetos que conectam marcas e pessoas."
        />

        {webProjects.map((project, index) => (
          <article
            className="featured-project"
            key={project.id}
          >
            <div className="featured-description">
              <span className="eyebrow">
                {index === 0
                  ? 'PROJETO EM DESTAQUE'
                  : project.type.toUpperCase()}
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
                <li>Design responsivo</li>
                <li>Experiência do usuário</li>
                <li>Desenvolvimento personalizado</li>
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
              SEU PROJETO PODE SER O PRÓXIMO
            </span>

            <h3>
              Vamos transformar sua ideia em um site?
            </h3>
          </div>
        </div>

        <a
          className="text-link github-link"
          href="#contato"
        >
          Solicitar orçamento
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
