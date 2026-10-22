import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../../data/portfolio'

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  return (
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        toggle.current?.focus()
      }
    }}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Lari Dev, início">lari<span>dev</span><span className="brand-dot">.</span></a>
        <button ref={toggle} className="menu-toggle" aria-controls="main-nav" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav id="main-nav" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button-small" href="#contato" onClick={() => setOpen(false)}>Solicitar orçamento <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  )
}
