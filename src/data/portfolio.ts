export const navigation = [
  ['Serviços', 'servicos'], ['Sobre', 'sobre'], ['Habilidades', 'habilidades'],
  ['Projetos', 'projetos'], ['Trajetória', 'trajetoria'], ['Contato', 'contato'],
] as const

export const github = 'https://github.com/lari-dias'

export const skills = [
  { title: 'Back-end', caption: 'Meu foco principal', items: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'APIs REST', 'Microsserviços', 'OpenFeign'] },
  { title: 'Front-end', caption: 'Da ideia à interface', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Angular · em aprendizado'] },
  { title: 'Banco de dados', caption: 'Dados com estrutura', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { title: 'Ferramentas', caption: 'Parte do processo', items: ['Git', 'GitHub', 'Docker', 'Swagger/OpenAPI'] },
]

export const projects = [
  { title: 'API de Usuários', category: 'Identidade & acesso', description: 'Cadastro, autenticação e gerenciamento de usuários, com Spring Security e autenticação JWT.', stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'], url: `${github}/usuario`, icon: 'users' },
  { title: 'API de Agendamento de Tarefas', category: 'Organização & persistência', description: 'Criação e consulta de tarefas por meio de uma API REST, com persistência em MongoDB.', stack: ['Java', 'Spring Boot', 'MongoDB', 'APIs REST'], url: `${github}/agendador-tarefas`, icon: 'calendar' },
  { title: 'API de Notificações', category: 'Comunicação entre sistemas', description: 'Envio de notificações por e-mail com Spring Mail e templates em Thymeleaf.', stack: ['Java', 'Spring Boot', 'Spring Mail', 'Thymeleaf'], url: `${github}/notificacao`, icon: 'mail' },
  { title: 'BFF Agendador de Tarefas', category: 'Integração & arquitetura', description: 'Centralização da comunicação entre microsserviços com Spring Boot e OpenFeign.', stack: ['Java', 'Spring Boot', 'OpenFeign'], status: 'Em desenvolvimento', icon: 'network' },
]

export const journey = [
  { title: 'Jornalismo', description: 'Formação inicial e sete anos de atuação em comunicação, com experiência em rádio, conteúdo e social media.', status: 'Minha origem' },
  { title: 'Recode Pro IA', description: 'Formação em Desenvolvimento Full Stack.', status: 'Concluído' },
  { title: 'Ada Tech', description: 'Formação Front-end JavaScript.', status: 'Concluído' },
  { title: 'Anhanguera', description: 'Graduação em Análise e Desenvolvimento de Sistemas.', status: 'Em andamento' },
  { title: 'Javanauta', description: 'Formação Full Stack Java.', status: 'Em andamento' },
]
