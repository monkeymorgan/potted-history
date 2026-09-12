import type { TimelineTag } from '../types'

/**
 * Category tags for timeline events. `swatch` is a muted colour that has to read
 * as ink-on-paper — keep them dark-ish and low-chroma so the woodcut palette holds.
 */
export const TIMELINE_TAGS: TimelineTag[] = [
  { id: 'revenge', label: 'Revenge', swatch: '#7a1f18' },
  { id: 'loyalty', label: 'Loyalty test', swatch: '#5c3210' },
  { id: 'grift', label: 'Self-dealing', swatch: '#8a6a12' },
  { id: 'trade-war', label: 'Trade war', swatch: '#3f5a2e' },
  { id: 'distraction', label: 'Distraction', swatch: '#6b3f8c' },
  { id: 'geopolitics', label: 'Geopolitics', swatch: '#2f5568' },
  { id: 'immigration', label: 'ICE / immigration', swatch: '#7c4a1d' },
  { id: 'war', label: 'Militarism', swatch: '#5a1c1c' },
  { id: 'courts', label: 'Courts', swatch: '#3a2a1c' },
]

export const TAGS_BY_ID: Record<string, TimelineTag> = Object.fromEntries(
  TIMELINE_TAGS.map((t) => [t.id, t]),
)
