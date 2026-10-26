
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'

type GalleryImage = {
  src: string
  description: string
}

type ProjectGalleryProps = {
  title: string
  images: GalleryImage[]
}

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)

  if (images.length === 0) {
    return null
  }

  const currentIndex = Math.min(selected, images.length - 1)
  const currentImage = images[currentIndex]

  const change = (offset: number) => {
    setSelected(value => (value + offset + images.length) % images.length)
  }

  const open = (button: HTMLButtonElement) => {
    opener.current = button
    dialog.current?.showModal()
  }

  const close = () => {
    dialog.current?.close()
  }

  return (
    <div className="project-gallery">
      <div className="browser-bar">
        <span aria-hidden="true">● ● ●</span>
        <span>{title}</span>

        <button
          type="button"
          onClick={event => open(event.currentTarget)}
          aria-label={`Ampliar imagem do projeto ${title}`}
        >
          <Expand size={16} />
        </button>
      </div>

      <button
        type="button"
        className="gallery-main"
        onClick={event => open(event.currentTarget)}
        aria-label={`Ampliar: ${currentImage.description}`}
      >
        <img
          src={currentImage.src}
          alt={`${title}: ${currentImage.description}`}
          width="1349"
          height="589"
          loading="lazy"
        />
      </button>

      <div className="gallery-controls">
        <button
          type="button"
          className="gallery-arrow"
          aria-label="Imagem anterior"
          onClick={() => change(-1)}
        >
          <ChevronLeft size={18} />
        </button>

        <div
          className="gallery-thumbnails"
          aria-label={`Imagens do projeto ${title}`}
        >
          {images.map((image, index) => (
            <button
              type="button"
              key={`${image.src}-${index}`}
              className={index === currentIndex ? 'selected' : ''}
              onClick={() => setSelected(index)}
              aria-label={`Mostrar imagem ${index + 1}: ${image.description}`}
              aria-pressed={index === currentIndex}
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                width="100"
                height="44"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="gallery-arrow"
          aria-label="Próxima imagem"
          onClick={() => change(1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="gallery-caption" aria-live="polite">
        <span>
          {String(currentIndex + 1).padStart(2, '0')} /{' '}
          {String(images.length).padStart(2, '0')}
        </span>
        {currentImage.description}
      </p>

      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={`Galeria ampliada do projeto ${title}`}
        onClose={() => opener.current?.focus()}
        onClick={event => {
          if (event.target === event.currentTarget) {
            close()
          }
        }}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft') change(-1)
          if (event.key === 'ArrowRight') change(1)
        }}
      >
        <div className="dialog-toolbar">
          <span aria-live="polite">
            {currentImage.description} · {currentIndex + 1}/{images.length}
          </span>

          <button
            type="button"
            autoFocus
            onClick={close}
            aria-label="Fechar imagem ampliada"
          >
            <X />
          </button>
        </div>

        <img
          src={currentImage.src}
          alt={`${title}: ${currentImage.description}`}
        />

        <div className="dialog-controls">
          <button type="button" onClick={() => change(-1)}>
            <ChevronLeft size={18} />
            Anterior
          </button>

          <button type="button" onClick={() => change(1)}>
            Próxima
            <ChevronRight size={18} />
          </button>
        </div>
      </dialog>
    </div>
  )
}
