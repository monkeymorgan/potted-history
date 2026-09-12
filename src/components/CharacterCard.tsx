import { useState } from 'react'
import type { Character } from '../types'
import { QuoteClip } from './QuoteClip'

function previewOpen() {
  return new URLSearchParams(window.location.search).get('open') === '1'
}

function withBase(path: string) {
  return path.startsWith('/') ? import.meta.env.BASE_URL + path.slice(1) : path
}

export function CharacterCard({
  character,
  featured,
}: {
  character: Character
  featured?: boolean
}) {
  const [open, setOpen] = useState(() => Boolean(featured && previewOpen()))

  return (
    <article
      id={`char-${character.id}`}
      className={`char-card ${featured ? 'is-featured' : ''} ${open ? 'is-open' : ''} ${character.crop ? `crop-${character.crop}` : ''}`}
    >
      <button
        type="button"
        className="char-card-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="char-portrait-frame">
          <img
            src={withBase(character.portrait)}
            alt={`Ink caricature of ${character.name}`}
            className="char-portrait"
            onError={(event) => {
              event.currentTarget.src = withBase(character.fallback)
            }}
          />
          <span className="char-wax">{open ? 'shut' : 'open'}</span>
        </div>
        <header className="char-nameplate">
          <p className="char-epithet">{character.epithet}</p>
          <h2>{character.name}</h2>
        </header>
      </button>

      <dl className="char-traits">
        <div>
          <dt>Craves</dt>
          <dd>{character.craves}</dd>
        </div>
        <div>
          <dt>Hates</dt>
          <dd>{character.hates}</dd>
        </div>
        <div>
          <dt>Demands</dt>
          <dd>{character.demands}</dd>
        </div>
      </dl>

      {open && (
        <div className="char-more">
          <p className="char-blurb">{character.blurb}</p>
          <dl className="char-traits extra">
            <div>
              <dt>Skills</dt>
              <dd>{character.skills}</dd>
            </div>
            <div>
              <dt>Weakness</dt>
              <dd>{character.weakness}</dd>
            </div>
          </dl>
          {character.quote && <QuoteClip quote={character.quote} />}
        </div>
      )}
    </article>
  )
}
