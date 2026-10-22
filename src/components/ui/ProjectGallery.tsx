import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'

const descriptions = ['Apresentação inicial e chamada para atendimento', 'Serviços e áreas de atuação', 'Apresentação do advogado', 'Chamada para contato', 'Rodapé e navegação']

export function ProjectGallery() {
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const change = (offset: number) => setSelected(value => (value + offset + descriptions.length) % descriptions.length)
  const source = `/images/advocacia-0${selected + 1}.jpg`
  const open = (button: HTMLButtonElement) => {
    opener.current = button
    dialog.current?.showModal()
  }

  return (
    <div className="project-gallery">
      <div className="browser-bar"><span aria-hidden="true">● ● ●</span><span>Cláudio Barbosa · Advocacia</span><button onClick={event => open(event.currentTarget)} aria-label="Ampliar imagem selecionada"><Expand size={16} /></button></div>
      <button className="gallery-main" onClick={event => open(event.currentTarget)} aria-label={`Ampliar: ${descriptions[selected]}`}><img src={source} alt={`Cláudio Barbosa Advocacia: ${descriptions[selected]}`} width="1349" height="589" loading="lazy" /></button>
      <div className="gallery-controls">
        <button className="gallery-arrow" aria-label="Imagem anterior" onClick={() => change(-1)}><ChevronLeft size={18} /></button>
        <div className="gallery-thumbnails" aria-label="Imagens do projeto">{descriptions.map((description, index) => <button key={description} className={index === selected ? 'selected' : ''} onClick={() => setSelected(index)} aria-label={`Mostrar imagem ${index + 1}: ${description}`} aria-pressed={index === selected}><img src={`/images/advocacia-0${index + 1}.jpg`} alt="" loading="lazy" width="100" height="44" /></button>)}</div>
        <button className="gallery-arrow" aria-label="Próxima imagem" onClick={() => change(1)}><ChevronRight size={18} /></button>
      </div>
      <p className="gallery-caption" aria-live="polite"><span>0{selected + 1} / 05</span>{descriptions[selected]}</p>
      <dialog ref={dialog} className="image-dialog" aria-label="Galeria ampliada do projeto Cláudio Barbosa Advocacia" onClose={() => opener.current?.focus()} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }} onKeyDown={event => { if (event.key === 'ArrowLeft') change(-1); if (event.key === 'ArrowRight') change(1) }}>
        <div className="dialog-toolbar"><span aria-live="polite">{descriptions[selected]} · {selected + 1}/5</span><button autoFocus onClick={() => dialog.current?.close()} aria-label="Fechar imagem ampliada"><X /></button></div>
        <img src={source} alt={`Cláudio Barbosa Advocacia: ${descriptions[selected]}`} />
        <div className="dialog-controls"><button onClick={() => change(-1)}><ChevronLeft size={18} /> Anterior</button><button onClick={() => change(1)}>Próxima <ChevronRight size={18} /></button></div>
      </dialog>
    </div>
  )
}
