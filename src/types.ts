export type Quote = {
  text: string
  speaker: string
  date: string
  venue: string
  sourceLabel: string
  sourceUrl: string
}

export type Character = {
  id: string
  name: string
  epithet: string
  portrait: string
  fallback: string
  crop?: 'chorus'
  craves: string
  hates: string
  demands: string
  skills: string
  weakness: string
  blurb: string
  quote?: Quote
}

export type Beat = {
  id: string
  title: string
  body: string
  characters: string[]
  quote?: Quote
  hedge?: string
}

export type Arc = {
  id: string
  title: string
  kicker: string
  tldr: string
  beats: Beat[]
}

export type TimelineTag = {
  id: string
  label: string
  swatch: string
}

export type TimelineLink = {
  /** "<timelineId>:<nodeId>" for kind 'node'; an arc id or character id otherwise */
  to: string
  kind: 'node' | 'arc' | 'character'
  label: string
}

export type TimelineNode = {
  id: string
  date: string
  title: string
  summary: string
  tags?: string[]
  hedge?: string
  quote?: Quote
  children?: TimelineNode[]
  links?: TimelineLink[]
}

export type Timeline = {
  id: string
  title: string
  kicker: string
  subjectId?: string
  tldr: string
  nodes: TimelineNode[]
}

export type History = {
  slug: string
  masthead: string
  title: string
  subtitle: string
  disclaimer: string
  lede: string
  characters: Character[]
  featuredIds: string[]
  arcs: Arc[]
  timelines: Timeline[]
}
