import { ArrowUpRight, Code2, MessageCircle } from 'lucide-react'
import { github } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contato" className="container contact-section"><div className="contact-panel">
      <div><span className="eyebrow">06 / VAMOS CONECTAR IDEIAS</span><h2>Seu próximo projeto<br />pode começar com<br /><span>uma boa conversa.</span></h2><p>Uma presença digital para seu negócio ou uma oportunidade em desenvolvimento de software: quero conhecer o que você tem em mente.</p></div>
      <div className="contact-details"><span className="contact-symbol" aria-hidden="true"><MessageCircle size={42} strokeWidth={1} /></span><h3>Vamos construir algo juntos?</h3><p>Os canais diretos para pedidos de orçamento serão disponibilizados aqui. Enquanto isso, conheça meus projetos e meu trabalho no GitHub.</p><a className="button" href={github} target="_blank" rel="noreferrer"><Code2 size={18} /> Conhecer meu GitHub <ArrowUpRight size={17} /></a><span className="contact-note">Desenvolvimento web · Full Stack · Back-end Java</span></div>
    </div></section>
  )
}
