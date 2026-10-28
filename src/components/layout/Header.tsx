
import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { whatsappUrl } from '../../sections/whatsapp'

const navigation = [
  ['Serviços', 'servicos'],
  ['Como funciona', 'processo'],
  ['Sobre', 'sobre'],
  ['Projetos', 'projetos'],
  ['Contato', 'contato']
]

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  return (
    <header
      className="site-header"
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          setOpen(false)
          toggle.current?.focus()
        }
      }}
    >
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Lari Dev, início"
          onClick={() => setOpen(false)}
        >
          lari<span>dev</span>
          <span className="brand-dot">.</span>
        </a>

        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-controls="main-nav"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav
          id="main-nav"
          className={`navigation ${open ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="button button-small"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  )
}
