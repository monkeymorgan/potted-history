import type { Quote } from '../types'

export function QuoteClip({ quote }: { quote: Quote }) {
  return (
    <figure className="quote-clip">
      <blockquote>
        <p>“{quote.text}”</p>
      </blockquote>
      <figcaption>
        <strong>{quote.speaker}</strong>
        <span>
          {quote.date} · {quote.venue}
        </span>
        <a href={quote.sourceUrl} target="_blank" rel="noreferrer">
          {quote.sourceLabel}
        </a>
      </figcaption>
    </figure>
  )
}
