
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Braces,
  Asterisk,
} from 'lucide-react'
import { whatsappUrl } from './whatsapp'

export function Hero() {
  return (
    <section id="inicio" className="hero-section container">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="tiny-dot" />
          CRIAÇÃO DE SITES · LANDING PAGES · SOLUÇÕES WEB
        </span>

        <h1>
          Sites que conectam{' '}
          <span className="accent-text">ideias, marcas</span> e pessoas
          <span className="accent-text">.</span>
        </h1>

        <p className="hero-intro">
          Sua marca merece uma presença digital profissional.
        </p>

        <p className="hero-description">
          Desenvolvo sites e landing pages personalizados, modernos e
          responsivos, criando experiências digitais que valorizam
          seu negócio e aproximam você dos seus clientes.
        </p>

        <div className="button-row">
          <a
            className="button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            Solicitar orçamento
            <ArrowUpRight size={18} />
          </a>

          <a className="text-link" href="#projetos">
            Conheça meus projetos
            <ArrowDown size={16} />
          </a>
        </div>

        <div
          className="hero-stack"
          aria-label="Diferenciais dos serviços"
        >
          <span>Design personalizado</span>
          <i />
          <span>Responsividade</span>
          <i />
          <span>Desenvolvimento sob medida</span>
        </div>
      </div>

      <div className="portrait-composition">
        <div className="portrait-orbit" aria-hidden="true" />

        <span className="portrait-spark" aria-hidden="true">
          <Asterisk size={32} strokeWidth={1.5} />
        </span>

        <div className="portrait-frame">
          <img
            src="/images/lari-perfil.jpg"
            alt="Lari, desenvolvedora e criadora da Lari Dev"
            width="400"
            height="400"
            fetchPriority="high"
          />
        </div>

        <div className="portrait-note note-top">
          <Code2 size={20} />
          <span>
            Sua ideia.
            <br />
            <strong>Uma presença digital única.</strong>
          </span>
        </div>

        <div className="portrait-note note-bottom">
          <Braces size={22} />
          <span>
            Sites personalizados
            <strong> para o seu negócio.</strong>
          </span>
        </div>

        <span className="portrait-caption">
          PRAZER, LARI
          <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>

      <div className="hero-footnote">
        <span>DO CONCEITO À EXPERIÊNCIA</span>
        <span>Design com intenção. Desenvolvimento com cuidado.</span>

        <a href="#servicos" aria-label="Explorar serviços">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  )
}
