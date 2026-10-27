
import { ArrowDown, CalendarDays, Database, Mail, Network, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Usuários',
    detail: 'PostgreSQL',
    icon: ShieldCheck,
    detailIcon: Database
  },
  {
    title: 'Agendamento',
    detail: 'MongoDB',
    icon: CalendarDays,
    detailIcon: Database
  },
  {
    title: 'Notificações',
    detail: 'E-mail / SMTP',
    icon: Mail,
    detailIcon: Mail
  }
]

export function MicroservicesArchitecture() {
  return (
    <div className="architecture-section">
      <div className="architecture-heading">
        <span className="eyebrow">ARQUITETURA EM PRÁTICA</span>
        <h3>Como os serviços se conectam.</h3>
        <p>
          Uma visão da arquitetura de microsserviços,
          com autenticação, gerenciamento de tarefas
          e notificações.
        </p>
      </div>

      <div className="architecture-diagram">
        <div className="architecture-client">
          <Network size={20} />
          <span>Cliente / Front-end</span>
        </div>

        <div className="architecture-arrow">
          <ArrowDown size={20} />
        </div>

        <div className="architecture-bff">
          <span className="architecture-status">
            EM DESENVOLVIMENTO
          </span>
          <Network size={23} />
          <h4>BFF Agendador de Tarefas</h4>
        </div>

        <div className="architecture-arrow">
          <ArrowDown size={20} />
        </div>

        <div className="architecture-services">
          {services.map(service => {
            const Icon = service.icon
            const DetailIcon = service.detailIcon

            return (
              <article
                className="architecture-service"
                key={service.title}
              >
                <Icon size={22} />
                <h4>{service.title}</h4>

                <div className="architecture-database">
                  <DetailIcon size={15} />
                  <span>{service.detail}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <p className="architecture-note">
        Representação conceitual das integrações planejadas.
        BFF em desenvolvimento.
      </p>
    </div>
  )
}
