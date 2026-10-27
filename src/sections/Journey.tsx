
import { journey } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Journey() {
  return (
    <section
      id="trajetoria"
      className="section container journey-grid"
    >
      <div className="journey-intro">
        <SectionHeading
          eyebrow="05 / TRAJETÓRIA"
          title="Um percurso em constante construção."
          description="Do Jornalismo ao desenvolvimento de software, uma trajetória marcada por aprendizado e evolução."
        />
      </div>

      <ul className="timeline">
        {journey.map(item => (
          <li key={item.title}>
            <span
              className="timeline-dot"
              aria-hidden="true"
            />

            <div className="timeline-heading">
              <h3>{item.title}</h3>

              <span
                className={`timeline-status ${
                  item.status === 'Em andamento'
                    ? 'ongoing'
                    : ''
                }`}
              >
                {item.status}
              </span>
            </div>

            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
