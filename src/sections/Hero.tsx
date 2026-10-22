import { ArrowDown, ArrowUpRight, Code2, Braces } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="hero-section container">
      <div className="hero-copy">
        <span className="eyebrow"><span className="tiny-dot" /> DESENVOLVEDORA FULL STACK · FOCO EM BACK-END JAVA</span>
        <h1>Sites que conectam <span className="accent-text">ideias, marcas</span> e pessoas<span className="accent-text">.</span></h1>
        <p className="hero-intro">Sou a Lari, desenvolvedora Full Stack.<span>Meu foco é Back-end Java. Meu olhar conecta comunicação, criatividade e tecnologia.</span></p>
        <p className="hero-description">Desenvolvo sites e landing pages personalizados, combinando criatividade, tecnologia e atenção aos detalhes para valorizar sua presença digital.</p>
        <div className="button-row"><a className="button" href="#contato">Solicitar orçamento <ArrowUpRight size={18} /></a><a className="text-link" href="#projetos">Conheça meus projetos <ArrowDown size={16} /></a></div>
        <div className="hero-stack" aria-label="Tecnologias principais"><span>Java</span><i /><span>Spring Boot</span><i /><span>React</span><i /><span>TypeScript</span><span className="learning">Angular <small>em aprendizado</small></span></div>
      </div>
      <div className="portrait-composition">
        <div className="portrait-orbit" aria-hidden="true" />
        <span className="portrait-spark" aria-hidden="true">✳</span>
        <div className="portrait-frame"><img src="/images/lari-perfil.jpg" alt="Lari, desenvolvedora Full Stack" width="400" height="400" fetchPriority="high" /></div>
        <div className="portrait-note note-top"><Code2 size={20} /><span>Um olhar criativo.<br /><strong>Uma base técnica.</strong></span></div>
        <div className="portrait-note note-bottom"><Braces size={22} /><span>Back-end Java<strong> + interfaces com propósito</strong></span></div>
        <span className="portrait-caption">PRAZER, LARI <span>↗</span></span>
      </div>
      <div className="hero-footnote"><span>DO CONCEITO À EXPERIÊNCIA</span><span>Design com intenção. Desenvolvimento com cuidado.</span><a href="#servicos" aria-label="Explorar serviços"><ArrowDown size={18} /></a></div>
    </section>
  )
}
