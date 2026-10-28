
export const navigation = [
  ['Serviços', 'servicos'],
  ['Como funciona', 'processo'],
  ['Sobre', 'sobre'],
  ['Projetos', 'projetos'],
  ['Contato', 'contato']
] as const

export const webProjects = [
  {
    id: 'claudio-barbosa',
    title: 'Cláudio Barbosa',
    subtitle: 'Advocacia',
    category: 'Site institucional',
    type: 'Projeto real',
    status: 'Em desenvolvimento',
    description: [
      'Site institucional com design responsivo, apresentação dos serviços jurídicos e contato facilitado pelo WhatsApp.'
    ],
    stack: ['React', 'TypeScript', 'Vite'],
    images: [
      {
        src: '/images/advocacia-01.jpg',
        description: 'Apresentação do escritório e chamada para atendimento'
      },
      {
        src: '/images/advocacia-02.jpg',
        description: 'Áreas de atuação e serviços jurídicos'
      },
      {
        src: '/images/advocacia-03.jpg',
        description: 'Apresentação profissional do advogado'
      },
      {
        src: '/images/advocacia-04.jpg',
        description: 'Facilidade de contato pelo WhatsApp'
      },
      {
        src: '/images/advocacia-05.jpg',
        description: 'Navegação e informações institucionais'
      }
    ]
  }
]
