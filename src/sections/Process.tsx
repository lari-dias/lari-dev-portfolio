const steps = [
  ['Briefing', 'Uma conversa para entender seu negócio, suas ideias e seus objetivos.'],
  ['Planejamento', 'Estrutura, conteúdo e experiência definidos antes de começar a construir.'],
  ['Desenvolvimento', 'Sua ideia ganha forma em uma interface responsiva e organizada.'],
  ['Entrega', 'Testes, ajustes e preparação do projeto para a publicação.'],
]

export function Process() {
  return (
    <section className="container process-section" aria-labelledby="process-title">
      <div className="process-intro"><span className="eyebrow">COMO VAMOS TRABALHAR</span><h2 id="process-title">Clareza em cada etapa.</h2><p>Um fluxo de trabalho pensado para construir juntos.</p></div>
      <ol className="process-grid">{steps.map(([title, text], index) => <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>
  )
}
