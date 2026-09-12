import { useCallback, useEffect, useState } from 'react'
import type { Arc, Character } from '../types'
import { QuoteClip } from './QuoteClip'

export function StoryArc({
  arc,
  characters,
}: {
  arc: Arc
  characters: Character[]
}) {
  const anchorId = `arc-${arc.id}`
  const ownsHash = useCallback(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return false
    if (hash === anchorId) return true
    return arc.beats.some((beat) => hash === `beat-${beat.id}`)
  }, [anchorId, arc.beats])

  const [open, setOpen] = useState(
    () =>
      new URLSearchParams(window.location.search).get('open') === '1' || ownsHash(),
  )

  useEffect(() => {
    const onHashChange = () => {
      if (ownsHash()) {
        setOpen(true)
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [anchorId, ownsHash])

  const byId = Object.fromEntries(characters.map((c) => [c.id, c]))

  return (
    <section id={anchorId} className={`story-arc ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="arc-tldr"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="arc-kicker-row">
          <span className="arc-kicker">{arc.kicker}</span>
          <span className="arc-fold">{open ? 'fold the page' : 'open the beats'}</span>
        </div>
        <h2>{arc.title}</h2>
        <p>{arc.tldr}</p>
      </button>

      {open && (
        <ol className="comic-beats">
          {arc.beats.map((beat, index) => (
            <li key={beat.id} className="comic-panel">
              <div className="panel-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="panel-cast">
                {beat.characters.map((id) => {
                  const who = byId[id]
                  if (!who) return null
                  return (
                    <img
                      key={id}
                      src={who.portrait}
                      alt=""
                      className={who.crop ? `crop-${who.crop}` : undefined}
                      onError={(event) => {
                        event.currentTarget.src = who.fallback
                      }}
                    />
                  )
                })}
              </div>
              <div className="panel-copy">
                <h3>{beat.title}</h3>
                <p>{beat.body}</p>
                {beat.hedge && <p className="hedge">Uncertain / hedged: {beat.hedge}</p>}
                {beat.quote && <QuoteClip quote={beat.quote} />}
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
