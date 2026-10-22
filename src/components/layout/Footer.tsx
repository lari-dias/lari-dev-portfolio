import { ArrowUp, Code2 } from 'lucide-react'
import { github } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="container footer">
      <div><a className="brand" href="#inicio">lari<span>dev</span><span className="brand-dot">.</span></a><p>Comunicação, criatividade e código.</p></div>
      <nav aria-label="Navegação do rodapé"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a><a href={github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a></nav>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Lari Dev. Feito com atenção aos detalhes.</span><a href="#inicio">Voltar ao início <ArrowUp size={15} /></a></div>
    </footer>
  )
}
