import type { CSSProperties } from 'react'
import type {
  Character,
  Timeline as TimelineType,
  TimelineLink,
  TimelineNode,
  TimelineTag,
} from '../types'
import { withBase } from '../lib/assetPath'
import { QuoteClip } from './QuoteClip'

type JumpFn = (link: TimelineLink) => void

function matchesTag(node: TimelineNode, tag: string): boolean {
  if (node.tags?.includes(tag)) return true
  return (node.children ?? []).some((child) => matchesTag(child, tag))
}

function NodeItem({
  node,
  timelineId,
  openIds,
  onToggle,
  activeTag,
  tagsById,
  onJump,
}: {
  node: TimelineNode
  timelineId: string
  openIds: Set<string>
  onToggle: (fullId: string) => void
  activeTag: string | null
  tagsById: Record<string, TimelineTag>
  onJump: JumpFn
}) {
  const fullId = `${timelineId}:${node.id}`
  const hasChildren = Boolean(node.children?.length)
  const filtering = activeTag !== null

  if (filtering && !matchesTag(node, activeTag)) return null

  const open = openIds.has(fullId)
  const selfMatch = filtering && Boolean(node.tags?.includes(activeTag))
  // While a filter is active, force branches open so deep matches are visible.
  const showChildren = hasChildren && (open || filtering)

  return (
    <li
      className={`tl-node${selfMatch ? ' is-match' : ''}`}
      data-node-id={fullId}
      id={`tl-${timelineId}-${node.id}`}
    >
      <div className="tl-node-line">
        <span className="tl-date">{node.date}</span>
        {hasChildren && !filtering && (
          <button
            type="button"
            className="tl-node-toggle"
            aria-expanded={open}
            onClick={() => onToggle(fullId)}
          >
            {open ? '⊖ zoom out' : '⊕ zoom in'}
          </button>
        )}
      </div>

      <h4>{node.title}</h4>
      <p className="tl-summary">{node.summary}</p>

      {node.tags && node.tags.length > 0 && (
        <ul className="tl-tags">
          {node.tags.map((id) => {
            const tag = tagsById[id]
            if (!tag) return null
            return (
              <li
                key={id}
                className="tl-tag"
                style={{ '--swatch': tag.swatch } as CSSProperties}
              >
                {tag.label}
              </li>
            )
          })}
        </ul>
      )}

      {node.hedge && <p className="hedge">Uncertain / hedged: {node.hedge}</p>}
      {node.quote && <QuoteClip quote={node.quote} />}

      {node.links && node.links.length > 0 && (
        <ul className="tl-links">
          {node.links.map((link, index) => (
            <li key={index}>
              <button
                type="button"
                className="tl-link-chip"
                onClick={() => onJump(link)}
              >
                {'↗'} {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {showChildren && (
        <ol className="tl-nodes tl-children">
          {node.children!.map((child) => (
            <NodeItem
              key={child.id}
              node={child}
              timelineId={timelineId}
              openIds={openIds}
              onToggle={onToggle}
              activeTag={activeTag}
              tagsById={tagsById}
              onJump={onJump}
            />
          ))}
        </ol>
      )}
    </li>
  )
}

export function Timeline({
  timeline,
  characters,
  openIds,
  onToggle,
  activeTag,
  tagsById,
  onJump,
}: {
  timeline: TimelineType
  characters: Character[]
  openIds: Set<string>
  onToggle: (fullId: string) => void
  activeTag: string | null
  tagsById: Record<string, TimelineTag>
  onJump: JumpFn
}) {
  const subject = characters.find((c) => c.id === timeline.subjectId)

  if (activeTag !== null && !timeline.nodes.some((node) => matchesTag(node, activeTag))) {
    return null
  }

  return (
    <section className="timeline">
      <header className="timeline-head">
        {subject && (
          <img
            className="timeline-portrait"
            src={withBase(subject.portrait)}
            alt=""
            onError={(event) => {
              const img = event.currentTarget
              if (img.dataset.fallbackApplied) return
              img.dataset.fallbackApplied = 'true'
              img.src = withBase(subject.fallback)
            }}
          />
        )}
        <div>
          <span className="timeline-kicker">{timeline.kicker}</span>
          <h3>{timeline.title}</h3>
        </div>
      </header>

      <p className="timeline-tldr">{timeline.tldr}</p>

      <ol className="tl-nodes">
        {timeline.nodes.map((node) => (
          <NodeItem
            key={node.id}
            node={node}
            timelineId={timeline.id}
            openIds={openIds}
            onToggle={onToggle}
            activeTag={activeTag}
            tagsById={tagsById}
            onJump={onJump}
          />
        ))}
      </ol>
    </section>
  )
}
