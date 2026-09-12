import { currentHistory, TIMELINE_TAGS } from './content'
import { CharacterCard } from './components/CharacterCard'
import { StoryArc } from './components/StoryArc'
import { Timelines } from './components/Timelines'

export default function App() {
  const story = currentHistory
  const featured = story.featuredIds.flatMap((id) => {
    const character = story.characters.find((c) => c.id === id)
    return character ? [character] : []
  })

  return (
    <div className="broadsheet">
      <div className="ink-spatter ink-spatter-a" aria-hidden />
      <div className="ink-spatter ink-spatter-b" aria-hidden />

      <header className="masthead">
        <p className="mast-rule">a personal illustrated notebook · not for sale</p>
        <h1>{story.masthead}</h1>
        <p className="issue">{story.title}</p>
        <p className="deck">{story.subtitle}</p>
      </header>

      <p className="lede">{story.lede}</p>
      <p className="disclaimer">{story.disclaimer}</p>

      <section className="court" aria-label="Character cards">
        <h2 className="section-woodcut">The court</h2>
        <p className="section-hint">Tap a card. Craves / Hates / Demands first; skills, weakness, and a quote when it opens.</p>
        <div className="card-table">
          {featured.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              featured={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="timelines" aria-label="Hierarchical timelines">
        <h2 className="section-woodcut">The timelines</h2>
        <p className="section-hint">
          Collapsed: the salient beats. "Zoom in" to open the tariff history, the
          geopolitics, and the trick of burying each disaster under the next. Tap a
          category to filter every timeline at once; follow a ↗ to a connected event
          or arc.
        </p>
        <Timelines
          timelines={story.timelines}
          tags={TIMELINE_TAGS}
          characters={story.characters}
        />
      </section>

      <section className="arcs" aria-label="Story arcs">
        <h2 className="section-woodcut">The arcs</h2>
        <p className="section-hint">Collapsed: the TLDR. Expanded: comic beats with the quotes attached.</p>
        {story.arcs.map((arc) => (
          <StoryArc key={arc.id} arc={arc} characters={story.characters} />
        ))}
      </section>

      <footer className="colophon">
        <p>
          To write another potted history later: duplicate{' '}
          <code>src/content/motley-court.ts</code>, keep the same shape, and point{' '}
          <code>src/content/index.ts</code> at the new file. The homepage is the story.
        </p>
      </footer>
    </div>
  )
}
