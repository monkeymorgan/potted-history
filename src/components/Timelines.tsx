import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { CSSProperties } from 'react'
import type {
  Character,
  Timeline as TimelineType,
  TimelineLink,
  TimelineNode,
  TimelineTag,
} from '../types'
import { Timeline } from './Timeline'

type Wire = { id: string; d: string; lx: number; ly: number; label: string }
type NodeLink = { from: string; to: string; label: string }

const NARROW = '(max-width: 820px)'

function flash(el: Element | null) {
  if (!el) return
  el.classList.add('is-flash')
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  window.setTimeout(() => el.classList.remove('is-flash'), 1400)
}

/** Every "node -> node" cross-link in the content, flattened. */
function collectNodeLinks(timelines: TimelineType[]): NodeLink[] {
  const out: NodeLink[] = []
  const walk = (timelineId: string, nodes: TimelineNode[]) => {
    for (const node of nodes) {
      for (const link of node.links ?? []) {
        if (link.kind === 'node') {
          out.push({ from: `${timelineId}:${node.id}`, to: link.to, label: link.label })
        }
      }
      if (node.children) walk(timelineId, node.children)
    }
  }
  timelines.forEach((t) => walk(t.id, t.nodes))
  return out
}

/** Full-ids of every ancestor of `targetFullId`, so they can be expanded. */
function ancestorsOf(timelines: TimelineType[], targetFullId: string): string[] {
  const [timelineId, nodeId] = targetFullId.split(':')
  const timeline = timelines.find((t) => t.id === timelineId)
  if (!timeline) return []
  const trail: string[] = []
  const walk = (nodes: TimelineNode[], path: string[]): boolean => {
    for (const node of nodes) {
      if (node.id === nodeId) {
        trail.push(...path)
        return true
      }
      if (node.children && walk(node.children, [...path, `${timelineId}:${node.id}`])) {
        return true
      }
    }
    return false
  }
  walk(timeline.nodes, [])
  return trail
}

export function Timelines({
  timelines,
  tags,
  characters,
}: {
  timelines: TimelineType[]
  tags: TimelineTag[]
  characters: Character[]
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [wires, setWires] = useState<Wire[]>([])
  const fieldRef = useRef<HTMLDivElement>(null)

  const tagsById = useMemo(
    () => Object.fromEntries(tags.map((t) => [t.id, t])) as Record<string, TimelineTag>,
    [tags],
  )
  const nodeLinks = useMemo(() => collectNodeLinks(timelines), [timelines])

  const toggle = useCallback((fullId: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(fullId)) next.delete(fullId)
      else next.add(fullId)
      return next
    })
  }, [])

  const jumpTo = useCallback(
    (link: TimelineLink) => {
      if (link.kind === 'node') {
        setOpenIds((prev) => new Set([...prev, ...ancestorsOf(timelines, link.to)]))
        window.setTimeout(() => {
          flash(document.querySelector(`[data-node-id="${CSS.escape(link.to)}"]`))
        }, 80)
        return
      }
      const anchorId = `${link.kind === 'arc' ? 'arc' : 'char'}-${link.to}`
      window.location.hash = anchorId
      window.setTimeout(() => flash(document.getElementById(anchorId)), 80)
    },
    [timelines],
  )

  // Measure linked nodes and draw connector wires across the field.
  useLayoutEffect(() => {
    const field = fieldRef.current
    if (!field) return

    const measure = () => {
      if (window.matchMedia(NARROW).matches || field.offsetWidth === 0) {
        setWires([])
        return
      }
      const fieldRect = field.getBoundingClientRect()
      const rects = new Map<string, DOMRect>()
      field.querySelectorAll('[data-node-id]').forEach((el) => {
        rects.set(el.getAttribute('data-node-id')!, el.getBoundingClientRect())
      })

      const seen = new Set<string>()
      const next: Wire[] = []
      for (const { from, to, label } of nodeLinks) {
        const a = rects.get(from)
        const b = rects.get(to)
        if (!a || !b) continue
        const key = [from, to].sort().join('|')
        if (seen.has(key)) continue
        seen.add(key)

        const leftFirst = a.left <= b.left
        const ax = (leftFirst ? a.right : a.left) - fieldRect.left
        const bx = (leftFirst ? b.left : b.right) - fieldRect.left
        const ay = a.top + a.height / 2 - fieldRect.top
        const by = b.top + b.height / 2 - fieldRect.top
        const midx = (ax + bx) / 2
        next.push({
          id: key,
          d: `M ${ax} ${ay} C ${midx} ${ay}, ${midx} ${by}, ${bx} ${by}`,
          lx: midx,
          ly: (ay + by) / 2,
          label,
        })
      }
      setWires(next)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(field)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [nodeLinks, openIds, activeTag])

  return (
    <div className="timelines-wrap">
      <div className="tl-tagbar" role="group" aria-label="Filter events by category">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            className={`tl-tag-btn${activeTag === tag.id ? ' is-active' : ''}`}
            style={{ '--swatch': tag.swatch } as CSSProperties}
            aria-pressed={activeTag === tag.id}
            onClick={() => setActiveTag((cur) => (cur === tag.id ? null : tag.id))}
          >
            {tag.label}
          </button>
        ))}
        {activeTag && (
          <button
            type="button"
            className="tl-tag-clear"
            onClick={() => setActiveTag(null)}
          >
            clear ✕
          </button>
        )}
      </div>

      <div className="timeline-field" ref={fieldRef}>
        <svg className="timeline-wires" aria-hidden="true">
          {wires.map((wire) => (
            <g key={wire.id}>
              <path className="wire" d={wire.d} />
              <text className="wire-label" x={wire.lx} y={wire.ly} textAnchor="middle">
                <title>{wire.label}</title>
                {wire.label.length > 34 ? `${wire.label.slice(0, 33)}…` : wire.label}
              </text>
            </g>
          ))}
        </svg>

        {timelines.map((timeline) => (
          <Timeline
            key={timeline.id}
            timeline={timeline}
            characters={characters}
            openIds={openIds}
            onToggle={toggle}
            activeTag={activeTag}
            tagsById={tagsById}
            onJump={jumpTo}
          />
        ))}
      </div>
    </div>
  )
}
