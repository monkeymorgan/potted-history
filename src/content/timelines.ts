import type { Timeline } from '../types'

/**
 * Hierarchical timelines. Top-level `nodes` are the most salient beats; `children`
 * are the zoom-in detail. Same honesty rules as the arcs: quotes are attributed,
 * uncertain lines carry a `hedge`. Cross-links (`links`) wire timelines to each
 * other and to the long-form arcs.
 */

export const trumpTimeline: Timeline = {
  id: 'trump',
  title: 'Donald Trump',
  kicker: 'Timeline I',
  subjectId: 'trump',
  tldr:
    'Four movements: the brand years before power; a chaotic first term; four years out of office, mostly in court; and a second term run on revenge, loyalty tests, and taking as much money off the table as the family can carry. Zoom in for the tariff history, the geopolitics, and the trick of burying each disaster under the next one.',
  nodes: [
    {
      id: 'before',
      date: 'pre-2017',
      title: 'Before power',
      summary:
        'Inherited a real-estate business, became a tabloid fixture, then a reality-TV boss on The Apprentice. Spent the Obama years pushing the "birther" lie. In 2015–16 he turned the brand into a campaign and won.',
      tags: [],
    },
    {
      id: 'term-1',
      date: '2017–2021',
      title: 'Term I',
      summary:
        'A first term with a revolving door of staff, one signature tax cut, two impeachments, a pandemic, and a mob at the Capitol on the way out. Zoom in for the beats.',
      tags: ['loyalty'],
      children: [
        {
          id: 't1-taxcuts',
          date: 'Dec 2017',
          title: 'The tax cut',
          summary:
            'The one big legislative win: a corporate rate cut and individual cuts skewed to the top, sold as a middle-class present.',
          tags: ['grift'],
        },
        {
          id: 't1-impeach-1',
          date: '2019–20',
          title: 'First impeachment',
          summary:
            'Impeached by the House over pressuring Ukraine to announce an investigation into the Bidens while military aid was held. Acquitted by the Senate.',
          tags: ['loyalty'],
        },
        {
          id: 't1-covid',
          date: '2020',
          title: 'COVID',
          summary:
            'The pandemic response: downplay, then improvise, then campaign against the science. The economy that was supposed to carry re-election cratered instead.',
          tags: [],
        },
        {
          id: 't1-jan6',
          date: '6 Jan 2021',
          title: 'January 6, then impeachment II',
          summary:
            'After losing, he told a rally the election was stolen; the crowd stormed the Capitol. Impeached a second time for incitement, acquitted again.',
          tags: ['revenge'],
        },
      ],
    },
    {
      id: 'wilderness',
      date: '2021–2025',
      title: 'Out of power — embattled, in court',
      summary:
        'Four years mostly defined by litigation: a civil-fraud judgment, two juries for defamation and sexual abuse, four separate criminal indictments, and a felony conviction — none of which stopped him winning in November 2024. The grievance became the platform.',
      tags: ['courts', 'revenge'],
      children: [
        {
          id: 'w-carroll',
          date: '2023–24',
          title: 'The E. Jean Carroll verdicts',
          summary:
            'One jury found him liable for sexual abuse and defamation; a second put the defamation damages in the tens of millions. He kept talking, which kept adding to the bill.',
          tags: ['courts'],
        },
        {
          id: 'w-fraud',
          date: 'Feb 2024',
          title: 'New York civil-fraud judgment',
          summary:
            'A judge found the Trump Organization had inflated asset values for years and ordered a nine-figure disgorgement plus limits on doing business in the state.',
          tags: ['courts', 'grift'],
          hedge:
            'The penalty figure and the business-ban terms were still moving through appeal during 2024–25.',
        },
        {
          id: 'w-indictments',
          date: '2023',
          title: 'Four indictments',
          summary:
            'Federal classified-documents case (Mar-a-Lago), federal January 6 case, Georgia RICO case over pressure on state officials, and the New York hush-money case.',
          tags: ['courts'],
        },
        {
          id: 'w-conviction',
          date: 'May 2024',
          title: 'Convicted in New York',
          summary:
            'A Manhattan jury found him guilty on 34 felony counts of falsifying business records over the hush-money payment. The first former president convicted of a crime.',
          tags: ['courts'],
        },
        {
          id: 'w-win',
          date: 'Nov 2024',
          title: 'Wins anyway',
          summary:
            'Ran the prosecutions as persecution, swept the swing states, and came back with the popular vote. The federal cases were wound down once he was president-elect.',
          tags: ['revenge'],
        },
      ],
    },
    {
      id: 'term-2',
      date: '2025–',
      title: 'Term II — revenge, loyalty, and the till',
      summary:
        'Back in office with three visible drives: settle scores with anyone who crossed him, staff only with people who will lie for him on camera, and pull as much money toward himself and his family as the office allows. The policy is downstream of those three. Zoom in.',
      tags: ['revenge', 'loyalty', 'grift'],
      links: [
        {
          to: 'putin:mirror',
          kind: 'node',
          label: 'revenge presidency ↔ legacy war — same court, no one says no',
        },
      ],
      children: [
        {
          id: 't2-trade-war',
          date: '2025–26',
          title: 'The trade war',
          summary:
            'Tariffs as mood and as leverage: neighbours first, then cars, then a blanket "reciprocal" round, then an open-ended fight with China. The courts eventually said the main legal theory did not hold.',
          tags: ['trade-war'],
          links: [
            {
              to: 'trump-2',
              kind: 'arc',
              label: 'the long version — Arc II, tariff by tariff',
            },
          ],
          children: [
            {
              id: 't2-tw-neighbours',
              date: 'Feb–Mar 2025',
              title: 'Canada and Mexico',
              summary:
                'The opening move: across-the-board tariffs on the two closest trading partners, paused and un-paused by post.',
              tags: ['trade-war'],
              quote: {
                text: 'Look, our country’s been ripped off by everybody. And that stops now. … Canada, Mexico, and then you just go right down the line.',
                speaker: 'Donald Trump',
                date: '10 March 2025',
                venue: 'Oval Office remarks on tariffs and manufacturing',
                sourceLabel: 'Rev transcript',
                sourceUrl:
                  'https://webflow.rev.com/transcripts/trump-discusses-tariffs-and-manufacturing',
              },
            },
            {
              id: 't2-tw-cars',
              date: '26 Mar 2025',
              title: 'Foreign cars, 25 percent',
              summary:
                'A proclamation putting a flat 25% on cars not built in the United States, framed as a dare to move the factory.',
              tags: ['trade-war'],
              quote: {
                text: 'What we’re going to be doing is a 25-percent tariff on all cars that are not made in the United States. If they’re made in the United States, there’s absolutely no tariff.',
                speaker: 'Donald Trump',
                date: '26 March 2025',
                venue: 'White House, signing the auto-tariff proclamation',
                sourceLabel: 'American Presidency Project',
                sourceUrl:
                  'https://www.presidency.ucsb.edu/documents/remarks-signing-the-proclamation-adjusting-imports-automobiles-and-automobile-parts-into',
              },
            },
            {
              id: 't2-tw-reciprocal',
              date: 'Apr 2025',
              title: '“Reciprocal” tariffs',
              summary:
                'A blanket round hitting most trading partners at once, with rates set by a formula few economists recognised. Markets fell; some of it was walked back within days.',
              tags: ['trade-war', 'distraction'],
              hedge:
                'Rates and the list of exempted countries changed repeatedly through April 2025; treat any single number as a snapshot.',
            },
            {
              id: 't2-tw-china',
              date: '2025',
              title: 'China, open-ended',
              summary:
                'Tit-for-tat escalation with Beijing into triple-digit rates on some goods, then selective carve-outs for the industries that complained loudest.',
              tags: ['trade-war'],
            },
            {
              id: 't2-tw-pharma',
              date: 'Mar 2025',
              title: 'Pharma, and a swipe at Ireland',
              summary:
                'Floated tariffs on pharmaceuticals to bring drug-making "back", naming Ireland as a place a lot of it happens.',
              tags: ['trade-war'],
              hedge:
                'Only the remark is solid. A specific, executed Ireland-only pharma duty is treated here as uncertain.',
              quote: {
                text: 'A lot of it made in Ireland. Ireland was very smart. We love Ireland. But we’re going to have that.',
                speaker: 'Donald Trump',
                date: '26 March 2025',
                venue: 'White House, auto-tariff remarks',
                sourceLabel: 'American Presidency Project',
                sourceUrl:
                  'https://www.presidency.ucsb.edu/documents/remarks-signing-the-proclamation-adjusting-imports-automobiles-and-automobile-parts-into',
              },
            },
            {
              id: 't2-tw-scotus',
              date: '20 Feb 2026',
              title: 'The Supreme Court says no',
              summary:
                'In Learning Resources, Inc. v. Trump the Court held that IEEPA does not give the president the power to impose tariffs. The administration went looking for other statutes.',
              tags: ['trade-war', 'courts'],
              hedge:
                'Paraphrase of the holding, not a quoted opinion. Follow-on tariff theories moved after the decision.',
              links: [
                {
                  to: 'trump-2',
                  kind: 'arc',
                  label: 'Arc II beat: “The high court”',
                },
              ],
            },
          ],
        },
        {
          id: 't2-distraction',
          date: '2025–26',
          title: 'The distraction pattern',
          summary:
            'The recurring move: when one story turns bad, start a bigger one. A market slide, a subpoena, an unflattering file — each is answered with a new front somewhere else. Zoom in for the pairs.',
          tags: ['distraction'],
          links: [
            {
              to: 'putin:yesmen',
              kind: 'node',
              label: 'a court that never says no — same shape in Moscow',
            },
          ],
          children: [
            {
              id: 't2-d-greenland',
              date: '2025',
              title: 'Markets down → buy Greenland',
              summary:
                'With the tariff selloff in the headlines, the talk turned to acquiring Greenland — "one way or the other" — and not ruling out force against a NATO ally.',
              tags: ['distraction', 'geopolitics'],
              hedge:
                'Dictated as "Iceland"; read here as Greenland, the 2025 acquisition-pressure story. Denmark and Greenland both said no.',
            },
            {
              id: 't2-d-epstein',
              date: '2025',
              title: 'Epstein files → tariff barrage + renamings',
              summary:
                'As pressure built to release the Epstein files, the feed filled instead with new tariff threats and a run of renamings. The subject changed; it did not resolve.',
              tags: ['distraction'],
              hedge:
                'The causal link is the pattern this timeline argues, not a stated motive. Judge it on the timing.',
            },
            {
              id: 't2-d-ice',
              date: '2025–26',
              title: 'Bad news → ICE surge, troops to cities',
              summary:
                'Slow news week, or a bad one: a visible immigration-enforcement push — raids, masked agents, National Guard or federal troops sent into American cities over the objection of their mayors.',
              tags: ['distraction', 'immigration'],
              hedge:
                'Scale and which cities shifted through the period; the deployments were contested in court.',
            },
            {
              id: 't2-d-iran',
              date: '2026',
              title: 'Bad news → the Iran war',
              summary:
                'The largest version of the move: prompted by Israel, the United States joined a war on Iran. Day one included a strike on a school; the news of likely U.S. responsibility came weeks later.',
              tags: ['distraction', 'war'],
              links: [
                {
                  to: 'trump-2',
                  kind: 'arc',
                  label: 'Arc II beats: the school, the ROE line',
                },
              ],
            },
          ],
        },
        {
          id: 't2-geopolitics',
          date: '2025–26',
          title: 'Geopolitics',
          summary:
            'A hemispheric and trans-Atlantic shove: territory talk, renamings, a humiliated ally in the Oval, a leader seized abroad, and a fight with London over air bases.',
          tags: ['geopolitics'],
          children: [
            {
              id: 't2-g-greenland-panama',
              date: '2025',
              title: 'Greenland and the Panama Canal',
              summary:
                'Two acquisition targets pressed in public — Greenland from Denmark, the Panama Canal "back" from Panama — with force pointedly not ruled out.',
              tags: ['geopolitics'],
            },
            {
              id: 't2-g-renames',
              date: '2025',
              title: 'Gulf of America, Mount McKinley',
              summary:
                'The Gulf of Mexico renamed the "Gulf of America" on federal maps; Denali switched back to Mount McKinley. Cheap, fast, and endlessly coverable.',
              tags: ['geopolitics', 'distraction'],
            },
            {
              id: 't2-g-zelensky',
              date: '28 Feb 2025',
              title: 'The Zelensky blow-up',
              summary:
                'Ukraine’s president was berated in the Oval in front of the cameras — Vance as the attack dog — and told to perform gratitude. Trump’s closing note was about the television.',
              tags: ['geopolitics'],
              links: [
                { to: 'trump-2', kind: 'arc', label: 'Arc II beats: “Thank you, once” / “Great television”' },
                { to: 'putin:invasion', kind: 'node', label: 'the war being negotiated over his head' },
              ],
            },
            {
              id: 't2-g-venezuela',
              date: '3 Jan 2026',
              title: 'Venezuela — Maduro seized',
              summary:
                'A large-scale strike; Maduro captured and flown out of the country. Announced as a success, with musing about "running" the place.',
              tags: ['geopolitics', 'war'],
              links: [{ to: 'trump-2', kind: 'arc', label: 'Arc II beat: “Hits Venezuela’s leaders”' }],
            },
            {
              id: 't2-g-uk-bases',
              date: 'Feb 2026',
              title: 'The UK, Diego Garcia, Chagos',
              summary:
                'He wanted Diego Garcia and RAF Fairford for day-one offensive runs without a wince; Britain’s lawyers cited international law. He called the Chagos handover "an act of GREAT STUPIDITY".',
              tags: ['geopolitics'],
              links: [{ to: 'trump-2', kind: 'arc', label: 'Arc II beat: “Pissed at the UK”' }],
            },
          ],
        },
        {
          id: 't2-selfdealing',
          date: '2025–26',
          title: 'Self-dealing',
          summary:
            'The "fleece America for as much as we can get" thread: a personal memecoin, family crypto ventures, foreign gifts and patronage aimed at properties with the name on them, and pardons that tracked donations.',
          tags: ['grift'],
          children: [
            {
              id: 't2-s-memecoin',
              date: 'Jan 2025',
              title: 'The $TRUMP coin',
              summary:
                'A memecoin launched days before the inauguration, with a large share held by affiliated entities. Buyers were later offered a dinner with the president.',
              tags: ['grift'],
            },
            {
              id: 't2-s-crypto',
              date: '2025',
              title: 'Family crypto',
              summary:
                'World Liberty Financial and related ventures took outside investment, including from foreign funds, while the administration set crypto policy.',
              tags: ['grift'],
              hedge:
                'Ownership stakes and the size of foreign investment were reported through 2025 and disputed at the edges.',
            },
            {
              id: 't2-s-gifts',
              date: '2025',
              title: 'The jet, the hotels',
              summary:
                'A luxury aircraft offered by a foreign government for government use and then a presidential library; foreign delegations steered to Trump-branded properties.',
              tags: ['grift'],
              hedge: 'The jet arrangement’s final legal form was still being worked out in reporting.',
            },
            {
              id: 't2-s-pardons',
              date: '2025–26',
              title: 'Pardons as favours',
              summary:
                'Clemency that correlated with donations, loyalty, or a personal appeal on television more than with any consistent principle.',
              tags: ['grift', 'loyalty'],
            },
          ],
        },
      ],
    },
  ],
}

export const putinTimeline: Timeline = {
  id: 'putin',
  title: 'Vladimir Putin',
  kicker: 'Timeline II',
  subjectId: 'putin',
  tldr:
    'A short companion timeline, drawn from Arc I. The through-line that rhymes with Trump’s second term: a leader isolated from correction, a court that agrees the map is realistic, and a war of choice launched on that agreement.',
  nodes: [
    {
      id: 'essay',
      date: '12 Jul 2021',
      title: 'The essay',
      summary:
        'Isolated in covid, Putin published "On the Historical Unity of Russians and Ukrainians", writing Ukraine out of itself. Not a sideshow — the brief for what came next.',
      tags: ['geopolitics'],
      quote: {
        text: 'I am confident that true sovereignty of Ukraine is possible only in partnership with Russia. … For we are one people.',
        speaker: 'Vladimir Putin',
        date: '12 July 2021',
        venue: '“On the Historical Unity of Russians and Ukrainians”',
        sourceLabel: 'Kremlin English text',
        sourceUrl: 'http://en.kremlin.ru/events/president/news/66181',
      },
    },
    {
      id: 'yesmen',
      date: '2021–22',
      title: 'Kyiv is achievable — the yes-men',
      summary:
        'He read the West as weak and a quick result as possible. The court did not correct him. The same geometry shows up later around a "weak" Iran: the principal wants a short war, the chorus supplies one.',
      tags: ['geopolitics'],
      links: [
        {
          to: 'trump:t2-distraction',
          kind: 'node',
          label: 'a court that never says no — same shape in Washington',
        },
      ],
    },
    {
      id: 'invasion',
      date: '24 Feb 2022',
      title: 'The invasion',
      summary:
        'The essay became artillery. A "special military operation", announced in deliberately bureaucratic language, aimed at a capital the yes-men had said was within reach.',
      tags: ['war', 'geopolitics'],
      links: [{ to: 'putin-ukraine', kind: 'arc', label: 'the long version — Arc I' }],
      quote: {
        text: 'I made a decision to carry out a special military operation. … we will seek to demilitarise and denazify Ukraine.',
        speaker: 'Vladimir Putin',
        date: '24 February 2022',
        venue: 'Televised address from the Kremlin',
        sourceLabel: 'Kremlin English text',
        sourceUrl: 'http://en.kremlin.ru/events/president/news/67843',
      },
    },
    {
      id: 'mirror',
      date: '2022– / 2025–',
      title: 'The mirror',
      summary:
        'Held next to Trump’s second term: a leader who demands that no one speak truth to him, a war or a trade war justified by a story the court has agreed to call realistic, and the cost paid by other people.',
      tags: ['revenge', 'geopolitics'],
      links: [
        {
          to: 'trump:term-2',
          kind: 'node',
          label: 'revenge presidency ↔ legacy war',
        },
      ],
    },
  ],
}
