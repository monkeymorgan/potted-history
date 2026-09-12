import type { History } from '../types'
import { trumpTimeline, putinTimeline } from './timelines'

export const motleyCourt: History = {
  slug: 'motley-court',
  masthead: 'Potted History',
  title: 'The Motley Court',
  subtitle: 'A cartoon reading of Putin’s war and Trump’s second go — ink, cards, and other people’s words.',
  disclaimer:
    'A personal potted history: satirical caricature, not a news product. Quotes are attributed. Unverified lines are marked. If it looks like a briefing, you are in the wrong notebook.',
  lede:
    'Open the cards. Expand the arcs. The drawings are the point — a court of caricatures, two wars of choice, and the quotes they left on the table.',
  featuredIds: ['trump', 'putin', 'vance', 'musk', 'hegseth', 'zelensky', 'netanyahu', 'chorus'],
  characters: [
    {
      id: 'trump',
      name: 'Donald Trump',
      epithet: 'The Court',
      portrait: '/portraits/trump-caricature.png',
      fallback: '/portraits/fallback-bust.svg',
      craves: 'Attention',
      hates: 'Direct conflict',
      demands: 'Loyalty',
      skills:
        'Instinct for the political move / the story. A great communicator — if the story is about him.',
      weakness: 'Un-serious. Uncaring. Nihilistic. Mean.',
      blurb:
        'Returns with a motley crew of loyalists, many ill-suited. The only real test is absolute loyalty plus MAGA cachet — demonstrated, when needed, by stone-faced lying.',
      quote: {
        text: 'I need loyalty, I expect loyalty.',
        speaker: 'Donald Trump',
        date: '27 January 2017',
        venue: 'White House dinner with FBI Director James Comey (Comey’s account)',
        sourceLabel: 'Comey Senate Intelligence Committee statement',
        sourceUrl:
          'https://www.pbs.org/newshour/politics/read-james-comeys-prepared-statement-thursdays-senate-hearing',
      },
    },
    {
      id: 'putin',
      name: 'Vladimir Putin',
      epithet: 'The Essayist',
      portrait: '/portraits/putin-caricature.png',
      fallback: '/portraits/fallback-bust.svg',
      craves: 'Legacy, and the map that goes with it',
      hates: 'A Ukraine that will not be a puppet',
      demands: 'That nobody speak truth to him',
      skills: 'Isolation, patience, and a long rewrite of other people’s history.',
      weakness: 'Yes-men. The court that agrees Kyiv is achievable.',
      blurb:
        'Invades for a mix of legacy and territory. Isolated in covid, he writes Ukraine out of itself. Feels the West is weak. The chorus nods.',
      quote: {
        text: 'I said that Russians and Ukrainians were one people — a single whole. These words were not driven by some short-term considerations or prompted by the current political context. It is what I have said on numerous occasions and what I firmly believe.',
        speaker: 'Vladimir Putin',
        date: '12 July 2021',
        venue: 'Essay: “On the Historical Unity of Russians and Ukrainians”',
        sourceLabel: 'Kremlin English text',
        sourceUrl: 'http://en.kremlin.ru/events/president/news/66181',
      },
    },
    {
      id: 'vance',
      name: 'J.D. Vance',
      epithet: 'The Convert',
      portrait: '/portraits/vance-caricature.png',
      fallback: '/portraits/fallback-bust.svg',
      craves: 'To be the serious young MAGA male',
      hates: 'Europe, and being asked to bail it out',
      demands: 'Gratitude — especially from men he can humiliate in front of Trump',
      skills:
        'Attack-dog rhetoric; a poor childhood that did not produce a left worldview; Catholic branding.',
      weakness:
        'Disliked in the Senate. Changed his name twice. Performs toughness at other people’s expense.',
      blurb:
        'Aligned with a young-male MAGA reaction against the supposed “sissification” of the American trad male. Lectures Europe at Munich. Berates Zelensky in the Oval — possibly without being told to. A leak later shows the disdain was not just stagecraft.',
      quote: {
        text: 'The threat that I worry the most about vis-à-vis Europe is not Russia, it’s not China, it’s not any other external actor. And what I worry about is the threat from within.',
        speaker: 'J.D. Vance',
        date: '14 February 2025',
        venue: 'Munich Security Conference',
        sourceLabel: 'American Presidency Project transcript',
        sourceUrl:
          'https://www.presidency.ucsb.edu/documents/remarks-the-vice-president-the-munich-security-conference-0',
      },
    },
    {
      id: 'musk',
      name: 'Elon Musk',
      epithet: 'The Off-Earth Optimist',
      portrait: '/portraits/musk-caricature.png',
      fallback: '/portraits/fallback-bust.svg',
      craves: 'A future that is not stuck on this planet',
      hates: 'Being told he is poorly informed',
      demands: 'That the timeline treat him as a genius',
      skills: 'Techno-optimism; industrial will; making Mars feel like a plot.',
      weakness:
        'Very gullible. Extremely poorly informed on issues he comments on online — and he comments on almost everything.',
      blurb:
        'The court techno-optimist: the future is off-earth. On Earth, the posting is the point, and the facts are optional.',
      quote: {
        text: 'The alternative is to become a space-faring civilization and a multi-planet species, which I hope you agree that is the right way to go.',
        speaker: 'Elon Musk',
        date: '27 September 2016',
        venue: 'IAC, Guadalajara — “Making Humans a Multiplanetary Species”',
        sourceLabel: 'Speakola transcript of the IAC talk',
        sourceUrl: 'https://speakola.com/ideas/elon-musk-big-mars-iac-2016',
      },
    },
    {
      id: 'hegseth',
      name: 'Pete Hegseth',
      epithet: 'The War Secretary',
      portrait: '/portraits/hegseth-caricature.png',
      fallback: '/portraits/fallback-bust.svg',
      craves: 'Maximum lethality, on camera',
      hates: 'Lawyers, “wokeness,” and anything called a rule of engagement',
      demands: 'That the brass look like they agree',
      skills: 'Television conviction; a slogan for every restraint he wants gone.',
      weakness:
        'When a school is hit on day one, “stupid rules of engagement” starts to sound like what it always was.',
      blurb:
        'The motley crew’s war guy. Loyalty-plus-cachet. The line that sounded like warrior talk at Quantico reads differently after the first day’s news.',
      quote: {
        text: 'We also don’t fight with stupid rules of engagement. We untie the hands of our warfighters to intimidate, demoralize, hunt and kill the enemies of our country. No more politically correct and overbearing rules of engagement, just common sense, maximum lethality and authority for warfighters.',
        speaker: 'Pete Hegseth',
        date: '30 September 2025',
        venue: 'Address to general and flag officers, Marine Corps Base Quantico',
        sourceLabel: 'U.S. Department of War transcript',
        sourceUrl:
          'https://www.war.gov/News/Transcripts/Transcript/article/4318689/secretary-of-war-pete-hegseth-addresses-general-and-flag-officers-at-quantico-v/',
      },
    },
    {
      id: 'zelensky',
      name: 'Volodymyr Zelensky',
      epithet: 'The Unwelcome Guest',
      portrait: '/portraits/zelensky-caricature.png',
      fallback: '/portraits/fallback-bust.svg',
      craves: 'Weapons, and a country that still exists',
      hates: 'Being told to perform thanks for the cameras',
      demands: 'Security, not a minerals photo-op',
      skills: 'Staying in the country. Saying thanks, then being told he didn’t.',
      weakness: 'Has to sit in other people’s rooms and take it.',
      blurb:
        'The Ukrainian leader, berated in the Oval in front of Trump — Vance as the attack dog, possibly freelance. The humiliation is the loyalty display.',
      quote: {
        text: 'From the very beginning of the war, we’ve been alone. And we are thankful. I said thanks.',
        speaker: 'Volodymyr Zelensky',
        date: '28 February 2025',
        venue: 'Oval Office meeting with Trump and Vance',
        sourceLabel: 'PBS / AP transcript of the exchange',
        sourceUrl:
          'https://www.pbs.org/newshour/politics/what-trump-and-zelenskyy-said-during-their-heated-argument-in-the-oval-office',
      },
    },
    {
      id: 'netanyahu',
      name: 'Benjamin Netanyahu',
      epithet: 'The Deadline',
      portrait: '/portraits/netanyahu-caricature.png',
      fallback: '/portraits/fallback-bust.svg',
      craves: 'An American strike on a “weak” Iran',
      hates: 'A deal that leaves enrichment in place',
      demands: 'That the imminent threat be treated as this year’s imminent threat',
      skills: 'A thirty-year drumbeat. Cartoon bombs at the UN. Timing.',
      weakness: 'The deadline is always extremely close, and has been since the 1990s.',
      blurb:
        'Convinces the court that Iran is weak enough to hit and dangerous enough that it cannot wait — an imminent threat that is not, on the record, especially believable.',
      quote: {
        text: 'If not stopped, Iran could produce a nuclear weapon in a very short time. It could be a year. It could be within a few months — less than a year. This is a clear and present danger to Israel’s very survival.',
        speaker: 'Benjamin Netanyahu',
        date: '13 June 2025',
        venue: 'Announcement of Operation Rising Lion',
        sourceLabel: 'American Rhetoric transcript',
        sourceUrl: 'https://www.americanrhetoric.com/speeches/benjaminnetanyahuiranairstrikes.htm',
      },
    },
    {
      id: 'chorus',
      name: 'The Yes-Men',
      epithet: 'The Chorus',
      portrait: '/portraits/chorus-yesmen.png',
      fallback: '/portraits/fallback-bust.svg',
      crop: 'chorus',
      craves: 'To still be in the room tomorrow',
      hates: 'Being the one who says no',
      demands: 'That the boss’s map be called realistic',
      skills: 'Nodding. Briefing the briefing he wanted.',
      weakness: 'When Kyiv is not in fact achievable, they have already agreed that it is.',
      blurb:
        'Putin’s court and Trump’s court rhyme: nobody speaks truth to the principal. The parallel is the Iran strikes as much as the road to Kyiv.',
      quote: {
        text: 'I fully share your loathing of European free-loading. It’s PATHETIC.',
        speaker: 'Pete Hegseth (Signal, to Vance)',
        date: '15 March 2025',
        venue: 'Leaked “Houthi PC small group” Signal chat, published by The Atlantic',
        sourceLabel: 'The Atlantic / contemporaneous reporting',
        sourceUrl:
          'https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/',
      },
    },
  ],
  arcs: [
    {
      id: 'putin-ukraine',
      title: 'Putin / Ukraine',
      kicker: 'Arc I',
      tldr:
        'Putin invades Ukraine for a mix of legacy and territory. The puppet in Kyiv was rejected. Isolated in covid, he writes an essay rewriting Ukraine’s history. He feels the West is weak and Kyiv is achievable; the yes-men agree (the same shape as Trump’s Iran strikes later). No one speaks truth to him. Prep: massed troops and blood supplies. The U.S. warns it is not a bluff. Some American voices still repeat Kremlin lines as if they were fact.',
      beats: [
        {
          id: 'puppet',
          title: 'The puppet did not hold',
          body: 'Yanukovych is gone. The idea of Ukraine as a managed neighbour dies in 2014 and stays dead. What remains, for Putin, is legacy plus territory — a map that needs a story.',
          characters: ['putin'],
        },
        {
          id: 'essay',
          title: 'Covid isolation, then the essay',
          body: 'Locked away, he writes Ukraine out of itself. Sovereignty, in this telling, is only real if it is shared with Moscow. The essay is not a sideshow. It is the brief.',
          characters: ['putin'],
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
          id: 'yes-men',
          title: 'Kyiv is achievable',
          body: 'He reads the West as weak. The court does not correct him. Same geometry later, around a “weak” Iran: the principal wants a short war; the chorus supplies the short war.',
          characters: ['putin', 'chorus'],
        },
        {
          id: 'prep',
          title: 'Troops, and blood',
          body: 'On the border: on the order of 150,000 troops, and the grim logistics that go with a real war — including reports of blood supplies staged for casualties. This is not a snap exercise.',
          characters: ['putin'],
          hedge:
            'Exact headcount moved with the reporting in early 2022; “about 150,000” was the public U.S./NATO ballpark. Blood-supply staging was widely reported from Western intel briefings — not a Kremlin admission.',
        },
        {
          id: 'not-a-bluff',
          title: 'Washington says it is not a bluff',
          body: 'The U.S. goes public: Putin has decided; Kyiv is in the plan. The warning is meant to strip away the last useful ambiguity.',
          characters: ['putin'],
          quote: {
            text: 'I don’t believe it’s a bluff.',
            speaker: 'Lloyd Austin, U.S. Secretary of Defense',
            date: '20 February 2022',
            venue: 'ABC This Week interview with Martha Raddatz, Poland',
            sourceLabel: 'ABC News',
            sourceUrl:
              'https://abcnews.com/Politics/bluff-defense-secretary-austin-russian-invasion-ukraine/story?id=82985659',
          },
        },
        {
          id: 'smo',
          title: 'A “special military operation”',
          body: 'Dawn, 24 February 2022. The essay becomes artillery. The language is bureaucratic on purpose.',
          characters: ['putin'],
          quote: {
            text: 'I made a decision to carry out a special military operation. The purpose of this operation is to protect people who, for eight years now, have been facing humiliation and genocide perpetrated by the Kiev regime. To this end, we will seek to demilitarise and denazify Ukraine.',
            speaker: 'Vladimir Putin',
            date: '24 February 2022',
            venue: 'Televised address from the Kremlin',
            sourceLabel: 'Kremlin English text',
            sourceUrl: 'http://en.kremlin.ru/events/president/news/67843',
          },
        },
        {
          id: 'kremlin-lines',
          title: 'Kremlin lines, said as fact',
          body: 'Years later, some American voices still narrate Putin’s incentives as if they were a weather report. The invasion is treated as what anyone would do.',
          characters: ['trump', 'putin'],
          quote: {
            text: 'I actually think he’s doing what anybody else would do. I think he wants to get it stopped and settled, and I think he’s hitting them harder than he’s been hitting them.',
            speaker: 'Donald Trump',
            date: '10 March 2025',
            venue: 'Oval Office remarks (tariffs / manufacturing / Ukraine)',
            sourceLabel: 'Rev transcript of the remarks',
            sourceUrl: 'https://webflow.rev.com/transcripts/trump-discusses-tariffs-and-manufacturing',
          },
        },
      ],
    },
    {
      id: 'trump-2',
      title: 'Trump 2.0',
      kicker: 'Arc II',
      tldr:
        'Trump returns with a motley crew of loyalists, many of them ill-suited. The requirement is absolute loyalty plus MAGA cachet. Loyalty is demonstrated by stone-faced lying. Then: tariffs on Canada and Mexico; tariffs on foreign cars; a swing at Irish pharma (hedged); the tariffs go to the high court; military adventurism; Venezuela’s leadership; Iran, prompted by Israel; a hand in Argentina; nuclear talks that do not hold; a “weak” Iran and an unbelievable countdown; a school hit on day one (the news comes later); Hegseth’s ROE line turning callous; fury at the UK over bases and Chagos.',
      beats: [
        {
          id: 'loyalty',
          title: 'The only test',
          body: 'The court is a motley crew. Competence is optional. Absolute loyalty is not. MAGA cachet is the other ticket in. The demonstration, when it counts, is lying with a straight face.',
          characters: ['trump', 'vance', 'hegseth', 'musk'],
          quote: {
            text: 'I need loyalty, I expect loyalty.',
            speaker: 'Donald Trump',
            date: '27 January 2017',
            venue: 'White House dinner with James Comey (Comey’s account)',
            sourceLabel: 'Comey Senate statement',
            sourceUrl:
              'https://www.pbs.org/newshour/politics/read-james-comeys-prepared-statement-thursdays-senate-hearing',
          },
        },
        {
          id: 'humiliation',
          title: 'Thank you, once',
          body: 'Vance berates Zelensky in front of Trump — possibly without being told to. The humiliation is the show. Trump, at the end, rates the television.',
          characters: ['vance', 'trump', 'zelensky'],
          quote: {
            text: 'Have you said thank you once? … Offer some words of appreciation for the United States of America and the president who’s trying to save your country.',
            speaker: 'J.D. Vance',
            date: '28 February 2025',
            venue: 'Oval Office, meeting with Zelensky',
            sourceLabel: 'The Guardian transcript of the clash',
            sourceUrl:
              'https://www.theguardian.com/us-news/2025/feb/28/trump-zelenskyy-meeting-transcript',
          },
        },
        {
          id: 'great-tv',
          title: 'Great television',
          body: 'The meeting is about minerals, a war, and millions of lives. The closing note is the medium.',
          characters: ['trump', 'zelensky'],
          quote: {
            text: 'This is going to be great television, I will say that.',
            speaker: 'Donald Trump',
            date: '28 February 2025',
            venue: 'Oval Office, end of the Zelensky meeting',
            sourceLabel: 'The Hill / NYT contemporaneous reports',
            sourceUrl:
              'https://thehill.com/homenews/administration/5169464-trump-zelensky-great-television/',
          },
        },
        {
          id: 'munich',
          title: 'A lecture at Munich',
          body: 'Vance tells Europe its real threat is not Russia. The room came for Ukraine. He came with a culture war and a warning not to fear the voters he likes.',
          characters: ['vance'],
          quote: {
            text: 'If you’re running in fear of your own voters, there is nothing America can do for you. Nor, for that matter, is there anything that you can do for the American people who elected me and elected President Trump.',
            speaker: 'J.D. Vance',
            date: '14 February 2025',
            venue: 'Munich Security Conference',
            sourceLabel: 'American Presidency Project',
            sourceUrl:
              'https://www.presidency.ucsb.edu/documents/remarks-the-vice-president-the-munich-security-conference-0',
          },
        },
        {
          id: 'leak',
          title: 'The leak, later',
          body: 'A Signal chat about Yemen, accidentally including a journalist, shows the disdain without the podium. Vance does not want to bail Europe out. Hegseth’s reply is the chorus.',
          characters: ['vance', 'hegseth', 'chorus'],
          quote: {
            text: 'If you think we should do it let’s go. I just hate bailing Europe out again.',
            speaker: 'J.D. Vance',
            date: '15 March 2025',
            venue: 'Signal group chat, as published by The Atlantic',
            sourceLabel: 'The Atlantic',
            sourceUrl:
              'https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/',
          },
        },
        {
          id: 'canada-mexico',
          title: 'Canada, Mexico, then the line',
          body: 'Tariffs as personality. Neighbours first, then everyone.',
          characters: ['trump'],
          quote: {
            text: 'Look, our country’s been ripped off by everybody. And that stops now. … Canada, Mexico, and then you just go right down the line.',
            speaker: 'Donald Trump',
            date: '10 March 2025',
            venue: 'Oval Office remarks on tariffs and manufacturing',
            sourceLabel: 'Rev transcript',
            sourceUrl: 'https://webflow.rev.com/transcripts/trump-discusses-tariffs-and-manufacturing',
          },
        },
        {
          id: 'cars',
          title: 'Foreign cars, 25 percent',
          body: 'A proclamation, a percentage, a dare to move the plant.',
          characters: ['trump'],
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
          id: 'pharma',
          title: 'Irish pharma (hedged)',
          body: 'He names Ireland in the same breath as bringing drug-making “back.” A specific, executed Ireland-only pharma tariff is not treated here as a done deal — only the remark is solid.',
          characters: ['trump'],
          hedge:
            'Trump floated pharma tariffs and named Ireland as a place “a lot of it” is made. Treat any Ireland-specific duty as uncertain unless you later pin a proclamation.',
          quote: {
            text: 'We’re going to be doing tariffs on pharmaceuticals in order to bring our pharmaceutical industry back. We don’t make anything here for — in terms of drugs … Largely, made in China. A lot of it made in Ireland. Ireland was very smart. We love Ireland. But we’re going to have that.',
            speaker: 'Donald Trump',
            date: '26 March 2025',
            venue: 'White House, same auto-tariff remarks',
            sourceLabel: 'American Presidency Project',
            sourceUrl:
              'https://www.presidency.ucsb.edu/documents/remarks-signing-the-proclamation-adjusting-imports-automobiles-and-automobile-parts-into',
          },
        },
        {
          id: 'scotus',
          title: 'The high court',
          body: 'The tariff machine is challenged. In Learning Resources, Inc. v. Trump (20 February 2026) the Supreme Court holds that IEEPA does not authorize the president to impose tariffs. The administration then hunts other statutes.',
          characters: ['trump'],
          hedge:
            'Paraphrase of the holding, not a quoted opinion. Follow-on tariff theories (other statutes, other rates) moved after the decision.',
        },
        {
          id: 'venezuela',
          title: 'Hits Venezuela’s leaders',
          body: 'Adventurism with a press release. A large-scale strike; Maduro seized and flown out. Trump announces it as a success and talks about “running” the place.',
          characters: ['trump', 'vance'],
          quote: {
            text: 'The United States of America has successfully carried out a large scale strike against Venezuela and its leader, President Nicolas Maduro, who has been, along with his wife, captured and flown out of the country.',
            speaker: 'Donald Trump',
            date: '3 January 2026',
            venue: 'Truth Social, as quoted in contemporaneous legal analysis',
            sourceLabel: 'Just Security (quoting the Truth Social post)',
            sourceUrl: 'https://www.justsecurity.org/127981/international-law-venezuela-maduro/',
          },
        },
        {
          id: 'argentina',
          title: 'A hand in Argentina',
          body: 'The court does not stop at Caracas. Reporting describes election meddling in Argentina (and Honduras) as part of the same hemispheric shove — tariffs, sanctions, force, and favourite presidents.',
          characters: ['trump'],
          hedge:
            'AP (Jan 2026) wrote that Trump “meddled in elections in Honduras and Argentina.” The mechanism is not quoted here from a primary Trump remark — treat the how as reported, not as a speech line.',
        },
        {
          id: 'iran-convince',
          title: 'Talks, then a “weak” Iran',
          body: 'There are nuclear talks. Then Israel’s countdown. Netanyahu has been a few years away from the bomb since 1992; in 1996 he told Congress the deadline was “getting extremely close.” In 2025 the line is months. The court is convinced to hit a weak Iran on an imminent threat that is not, on the long record, believable.',
          characters: ['netanyahu', 'trump'],
          quote: {
            text: 'If Iran were to acquire nuclear weapons, this could presage catastrophic consequences, not only for my country, and not only for the Middle East, but for all mankind. … The deadline for attaining this goal is getting extremely close.',
            speaker: 'Benjamin Netanyahu',
            date: '10 July 1996',
            venue: 'Address to a joint session of the U.S. Congress',
            sourceLabel: 'C-SPAN / contemporaneous accounts of the 1996 speech',
            sourceUrl: 'https://www.ibtimes.co.uk/netanyahu-iran-nuclear-warnings-1782179',
          },
        },
        {
          id: 'school',
          title: 'Day one, a school (news later)',
          body: 'Opening hours of the 2026 Iran war: a strike on Shajareh Tayyebeh elementary school in Minab. Iranian officials give a death toll in the hundreds, many of them children. Trump first points at Iran. Weeks later, reporting on a U.S. military investigation says American forces were likely responsible — outdated intel, a nearby IRGC site, a Tomahawk. Hegseth will not let the reporting “force our hand.”',
          characters: ['hegseth', 'trump', 'netanyahu'],
          hedge:
            'Preliminary investigation, not a released final Pentagon finding as of the reporting cited. Trump: “I just don’t know enough about it.” Treat intent as unproven; treat the later news as the beat.',
        },
        {
          id: 'roe-callous',
          title: 'Stupid rules, after the school',
          body: 'The Quantico line was already in the air. Repeated at a March 2026 briefing — no stupid ROE, no politically correct wars — it now sits next to a girls’ school. Callous is the polite word.',
          characters: ['hegseth'],
          quote: {
            text: 'No stupid rules of engagement, no nation-building quagmire, no democracy building exercise, no politically correct wars. We fight to win, and we don’t waste time or lives.',
            speaker: 'Pete Hegseth',
            date: '2 March 2026',
            venue: 'Pentagon press briefing with Gen. Dan Caine',
            sourceLabel: 'U.S. Department of War transcript',
            sourceUrl:
              'https://www.war.gov/News/Transcripts/Transcript/Article/4418959/secretary-of-war-pete-hegseth-and-chairman-of-the-joint-chiefs-of-staff-gen-dan/',
          },
        },
        {
          id: 'uk-bases',
          title: 'Pissed at the UK',
          body: 'He wants Diego Garcia and RAF Fairford without a wince. Britain will not grant a blank cheque for day-one offensive runs; lawyers talk international law. Trump calls the Chagos handover “a big mistake” and “an act of GREAT STUPIDITY,” and warns he may need the bases “to eradicate a potential attack.”',
          characters: ['trump'],
          hedge:
            'The user’s “for defence” caveat is the shape of the UK position (legal limits on offensive use). Exact Whitehall wording of a “for defence” formula was not independently pinned here.',
          quote: {
            text: 'Should Iran decide not to make a Deal … it may be necessary for the United States to use Diego Garcia, and the Airfield located in Fairford, in order to eradicate a potential attack by a highly unstable and dangerous Regime.',
            speaker: 'Donald Trump',
            date: 'February 2026',
            venue: 'Truth Social, as quoted by CBS News',
            sourceLabel: 'CBS News',
            sourceUrl:
              'https://www.cbsnews.com/news/us-uk-iran-diego-garcia-chagos-islands-tehran-protests-trump-threat/',
          },
        },
        {
          id: 'musk-posting',
          title: 'Genius, poorly informed',
          body: 'The off-earth prophet still posts about Earth as if proximity were knowledge. Called a genius; often simply wrong, loudly.',
          characters: ['musk'],
          quote: {
            text: 'Civil war is inevitable.',
            speaker: 'Elon Musk',
            date: '4 August 2024',
            venue: 'Post on X, during UK riots',
            sourceLabel: 'CNN Business (quoting the post)',
            sourceUrl: 'https://www.cnn.com/2024/08/06/tech/elon-musk-civil-war-uk-riots',
          },
        },
      ],
    },
  ],
  timelines: [trumpTimeline, putinTimeline],
}
