
export const navigation = [
  ['Serviços', 'servicos'],
  ['Sobre', 'sobre'],
  ['Habilidades', 'habilidades'],
  ['Projetos', 'projetos'],
  ['Trajetória', 'trajetoria'],
  ['Contato', 'contato'],
] as const

export const github = 'https://github.com/lari-dias'

export const skills = [
  {
    title: 'Back-end',
    caption: 'Meu foco principal',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'APIs REST',
      'Microsserviços',
      'OpenFeign'
    ]
  },
  {
    title: 'Front-end',
    caption: 'Da ideia à interface',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Angular · em aprendizado'
    ]
  },
  {
    title: 'Banco de dados',
    caption: 'Dados com estrutura',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL'
    ]
  },
  {
    title: 'Ferramentas',
    caption: 'Parte do processo',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Swagger/OpenAPI'
    ]
  }
]

export const webProjects = [
  {
    id: 'claudio-barbosa',
    title: 'Cláudio Barbosa',
    subtitle: 'Advocacia',
    category: 'Desenvolvimento web',
    type: 'Projeto real',
    status: 'Em desenvolvimento',
    description: [
      'Landing page institucional desenvolvida para valorizar a identidade do escritório, apresentar suas áreas de atuação e facilitar o contato com clientes.'
    ],
    stack: ['React', 'TypeScript', 'Vite'],
    images: [
      {
        src: '/images/advocacia-01.jpg',
        description: 'Apresentação inicial e chamada para atendimento'
      },
      {
        src: '/images/advocacia-02.jpg',
        description: 'Serviços e áreas de atuação'
      },
      {
        src: '/images/advocacia-03.jpg',
        description: 'Apresentação do advogado'
      },
      {
        src: '/images/advocacia-04.jpg',
        description: 'Chamada para contato'
      },
      {
        src: '/images/advocacia-05.jpg',
        description: 'Rodapé e navegação'
      }
    ]
  }
]

export const projects = [
  {
    title: 'API de Usuários',
    category: 'Identidade & segurança',
    description: 'API REST para gerenciamento de usuários, com autenticação JWT, proteção de endpoints via Spring Security e persistência em PostgreSQL.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL'
    ],
    url: `${github}/usuario`,
    icon: 'users'
  },
  {
    title: 'API de Agendamento de Tarefas',
    category: 'Gestão & integração',
    description: 'Microsserviço para gerenciamento de tarefas, com autenticação JWT, persistência em MongoDB e integração com a API de Usuários via OpenFeign.',
    stack: [
      'Java',
      'Spring Boot',
      'MongoDB',
      'JWT',
      'OpenFeign'
    ],
    url: `${github}/agendador-tarefas`,
    icon: 'calendar'
  },
  {
    title: 'API de Notificações',
    category: 'Automação & comunicação',
    description: 'Microsserviço para envio de notificações por e-mail, utilizando Spring Mail, SMTP e templates HTML com Thymeleaf.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Mail',
      'SMTP',
      'Thymeleaf'
    ],
    url: `${github}/notificacao`,
    icon: 'mail'
  },
  {
    title: 'BFF Agendador de Tarefas',
    category: 'Arquitetura & integração',
    description: 'Camada Backend for Frontend para centralizar requisições e integrar microsserviços utilizando Spring Boot e OpenFeign.',
    stack: [
      'Java',
      'Spring Boot',
      'OpenFeign'
    ],
    url: `${github}/bff-agendador-tarefa`,
    status: 'Em desenvolvimento',
    icon: 'network'
  }
]

export const journey = [
  {
    title: 'Jornalismo',
    description: 'Formação inicial e sete anos de experiência em comunicação, rádio e mídias digitais.',
    status: 'Minha origem'
  },
  {
    title: 'Recode Pro IA',
    description: 'Bolsista em formação Full Stack de Desenvolvimento de Software.',
    status: 'Concluído'
  },
  {
    title: 'Ada Tech',
    description: 'Bolsista em formação Front-end com JavaScript.',
    status: 'Concluído'
  },
  {
    title: 'Anhanguera',
    description: 'Graduação em Análise e Desenvolvimento de Sistemas.',
    status: 'Em andamento'
  },
  {
    title: 'Javanauta',
    description: 'Formação Full Stack Java.',
    status: 'Em andamento'
  }
]
