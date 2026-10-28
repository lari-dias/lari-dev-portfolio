
const steps = [
  [
    'Briefing',
    'Conversamos para entender seu negócio, seus objetivos e o que você deseja transmitir ao seu público.'
  ],
  [
    'Planejamento',
    'Definimos a estrutura, o conteúdo e a identidade visual para criar uma experiência alinhada à sua marca.'
  ],
  [
    'Desenvolvimento',
    'Transformo o planejamento em um site moderno, responsivo e funcional, com atenção aos detalhes.'
  ],
  [
    'Entrega',
    'Realizo testes, ajustes finais e preparo seu site para publicação, garantindo uma experiência de qualidade.'
  ]
]

export function Process() {
  return (
    <section
      id="processo"
      className="container process-section"
      aria-labelledby="process-title"
    >
      <div className="process-intro">
        <span className="eyebrow">
          COMO VAMOS TRABALHAR
        </span>

        <h2 id="process-title">
          Clareza em cada etapa.
        </h2>
      </div>

      <ol className="process-grid">
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span className="step-number">
              0{index + 1}
            </span>

            <h3>{title}</h3>

            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
