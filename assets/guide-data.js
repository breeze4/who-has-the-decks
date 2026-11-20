/*
 * Guide data for "Who has the decks?"
 *
 * who:      'fred' | 'thomas' | 'both' | 'unknown'
 * evidence: 'stated'   - Fred again.. says it in his own timestamped notes
 *           'inferred' - not said outright; reasoning is given in `why`
 *           'none'     - no source says, and the picture has not been reviewed
 * kind:     'mix'  - a new track / blend starts here (gets a block on the timeline)
 *           'note' - something to notice inside the current block
 *
 * Sources are listed in index.html. Times are from Fred's notes unless `approx` is set.
 */
window.GUIDE = {
  videoId: 'gfF8jzBVWvM',
  duration: 6983, // 1:56:23, length of the audio rip of this video; replaced by the player's own value once loaded
  moments: [
    {
      t: 0, kind: 'mix', who: 'thomas', evidence: 'stated',
      title: 'Orchestra, then a house sermon',
      tracks: [
        ['Thomas Bangalter', 'Mythologies: X. L’Accouchement'],
        ['Fingers Inc.', 'My House (Acapella) — “Jack had a groove”']
      ],
      tech: ['Acapella over a beatless bed', 'Prepared idea'],
      body: 'The set opens with no drums at all: a piece from Thomas’s orchestral ballet score with the “My House” spoken vocal laid over it. Nothing needs beatmatching yet, so the hands-on work here is levels and timing the vocal.',
      why: 'Fred says this was an idea Thomas played him in the studio, and later (14:18) refers to “the my house vocal from the beginning … played by Thomas”.',
      quote: 'THIS was one he played me in the studio, so I knew where it was going, and let me tell you this first 3 minutes right here, ive never felt calmer in my life.',
      watch: 'Whose hands are on the mixer while the other stands back. If Fred’s account holds, the person in the cap is working and the person in the tour tee is waiting.'
    },
    {
      t: 196, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'The drop everyone was waiting for',
      tracks: [
        ['Daft Punk', 'One More Time'],
        ['Fred again..', 'Marea (We’ve Lost Dancing)'],
        ['Marvin Gaye', 'Ain’t No Mountain High Enough']
      ],
      tech: ['Three-way layer'],
      body: 'One song from each of them plus a Motown vocal, listed by Fred as a single three-way combination. Fred’s opening note implies he knew this was where the intro was heading, which points to a planned sequence rather than an improvised one.',
      why: 'No source says who started which element. It may be one prepared file or a live layer across decks; that can only be settled by watching the decks.',
      watch: 'How many decks get touched between 3:00 and 3:30. One press of play means a prepared file; two people reaching for different decks means a live layer.'
    },
    {
      t: 457, kind: 'mix', who: 'fred', evidence: 'inferred',
      title: 'Straight to the UK',
      tracks: [['Tessela', 'Hackney Parrot (Sammy Virji’s Hackney Pigeon Dub)']],
      tech: ['Genre switch'],
      body: 'From French house to a UK garage rework of a UK breakbeat staple. On paper, the first change of rhythm in the set.',
      why: 'Fred describes the choice in the first person (“the only place to go after that song I thought”), which reads as his selection. He does not literally say he played it.',
      quote: 'Shoutout the uk, the only place to go after that song I thought, shoutout ed from overmono aka tessela.',
      watch: 'Who has one headphone cup on in the minute before 7:37. That person is cueing this track.'
    },
    {
      t: 690, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Six records in under five minutes',
      tracks: [
        ['Daft Punk', 'Rollin’ & Scratchin’'],
        ['Thomas Bangalter', 'Spinal Scratch'],
        ['808 State', 'Cubik'],
        ['Fred again.. & Skrillex', 'Baby again..'],
        ['Skrillex, Fred again.. & Flowdan', 'Rumble'],
        ['Wildchild', 'Renegade Master (Acapella)']
      ],
      tech: ['Quick cuts / layers', 'Acapella'],
      body: 'The densest block of the night: two of Thomas’s hardest 90s records, a rave classic, two Fred/Skrillex tracks and an acapella, all listed by Fred as one chain. At this pace it is either both of them trading decks quickly or a prepared sequence.',
      why: 'The tracks alternate between the two catalogues, but owning a record is not proof of playing it. Only the vocal at 14:18 is attributed (next entry).',
      watch: 'This is the best stretch in the film for seeing a hand-off: look for one person finishing an EQ move as the other is already cueing in headphones.'
    },
    {
      t: 858, kind: 'note', who: 'thomas', evidence: 'stated',
      title: 'The vocal is Thomas’s',
      tech: ['Acapella'],
      body: 'Fred singles out an “iconic vocal” at this point and says it was played by Thomas. By tracklist order the vocal here should be the Renegade Master acapella; that mapping is my reading, the attribution to Thomas is Fred’s.',
      why: 'Stated by Fred: “this one, but played by Thomas”.',
      quote: 'It was mad hearing these iconicccc vocals, like the my house vocal from the beginning, or this one, but played by Thomas, it gibes them a sorta even deeper resonance.'
    },
    {
      t: 980, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Bleep techno',
      tracks: [['LFO', 'LFO (Leeds Warehouse Mix)']],
      tech: [],
      body: 'A 1990 Warp record. By the timestamps it gets about eighty seconds before the next Daft Punk edit.',
      why: 'No source says who played it.',
      watch: 'Short plays like this usually mean the other DJ already has the next track cued. See who is in headphones.'
    },
    {
      t: 1060, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Crescendolls, re-edited',
      tracks: [['Daft Punk', 'Crescendolls (MPH edit)']],
      tech: ['Edit'],
      body: 'A modern UK edit of a Discovery track. Fred points out who is standing behind the booth: Busy P (Pedro Winter, Daft Punk’s former manager) and Thomas’s son.',
      why: 'No source says who played it.',
      quote: 'Shoutout busy p and Thomas’s son looming in the background. ed banger forever.',
      watch: 'Background figures behind the two DJs during this track.'
    },
    {
      t: 1200, kind: 'mix', who: 'fred', evidence: 'stated',
      title: 'Technologic, version one',
      tracks: [
        ['Daft Punk', 'Technologic'],
        ['cu.rve.', 'Stop & Watch'],
        ['Zero', 'Pulse Z']
      ],
      tech: ['Pre-made mash-up', 'Vocal over new instrumental'],
      body: 'This is the clearest evidence of how the set was built. The Technologic combinations were made in the studio beforehand, around twenty of them, and sit on the USB as finished files. So the live decision is which version to play and when, not blending the vocal by hand.',
      why: 'Stated by Fred: “this was the one that I decided to play”.',
      quote: 'We made about 20 versions of technologic mashed up wit different things, but this was the one that I decided to play. Shoutout cu.rve.',
      watch: 'One deck doing the work. If it is a single prepared file you should not see anyone riding a second channel fader for the vocal.'
    },
    {
      t: 1354, kind: 'mix', who: 'both', evidence: 'stated',
      title: 'Technologic, version two',
      tracks: [['Daft Punk', 'Technologic'], ['Dylan Brady', 'Needle Guy']],
      tech: ['Pre-made mash-up'],
      body: 'They do not stop at one. A second Technologic version comes in, this time over a hyperpop instrumental.',
      why: 'Fred says “we played two”. He does not say which of them loaded the second.',
      quote: 'Ok we played two…',
      watch: 'Who reaches for a deck right before 22:34. If it is not the same person as at 20:00, they are trading versions.'
    },
    {
      t: 1445, kind: 'mix', who: 'both', evidence: 'stated',
      title: 'Technologic, version three',
      tracks: [['Daft Punk', 'Technologic'], ['Adam F', 'Circles']],
      tech: ['Pre-made mash-up', 'Tempo jump'],
      body: 'Third version, now over a drum & bass classic. Circles is a much faster record than Technologic, so the vocal must have been refitted to it; given Fred’s note at 20:00 that was presumably done in the studio, not live.',
      why: 'Fred says “we played three”, again without naming who.',
      quote: 'Okay we played three.'
    },
    {
      t: 1500, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Contact into My Girls into Night Vision',
      tracks: [
        ['Daft Punk', 'Contact'],
        ['Animal Collective', 'My Girls'],
        ['Daft Punk', 'Night Vision (The Twelves cover)']
      ],
      tech: ['Three-way layer'],
      body: 'The closing track of Random Access Memories against an indie record and a cover of a Discovery interlude. On paper this is a step down in intensity after the drum & bass of Circles.',
      why: 'No source says who played which part. An automatic track detector places My Girls at about 25:48 and Night Vision at about 27:24.',
      watch: 'A long section with three sources is where EQ work is most visible: look for someone holding the low-EQ knob on one channel while raising another.'
    },
    {
      t: 1870, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Doin’ It Right into drum & bass',
      tracks: [
        ['Daft Punk ft. Panda Bear', 'Doin’ It Right (Thomas Bangalter edit)'],
        ['Fred again.. & Anderson .Paak ft. CHIKA', 'places to be (Clipz Roller Mix)']
      ],
      tech: ['Half-time / double-time', 'Edit'],
      body: 'Thomas’s own edit of a slow Daft Punk song, joined to a drum & bass remix of a Fred track.',
      why: 'The edit is Thomas’s work and the remix is of Fred’s track, but no source says who was on which deck.',
      watch: 'Whether the two tracks are on separate decks. If they are, this is the cleanest place to see each of them holding one side of a blend.'
    },
    {
      t: 1910, kind: 'note', who: 'unknown', evidence: 'inferred',
      title: '87 × 2 = 174',
      tech: ['Half-time / double-time'],
      body: 'Fred’s note is the explanation of the trick. By Fred’s number, Doin’ It Right is running at about 87 BPM. Drum & bass runs at roughly 174. One is exactly double the other, so the two line up beat for beat with no pitch change: every beat of the slow song lands on every second beat of the fast one.',
      why: 'The arithmetic is Fred’s; the explanation of why it matters is mine.',
      quote: 'Whats 87 times 2?'
    },
    {
      t: 2164, kind: 'note', who: 'fred', evidence: 'stated',
      title: 'Fred is watching the crowd',
      tech: [],
      body: 'Fred remembers looking out at a specific group of friends here. Worth noting for attribution: if he is looking up and out, he is probably not the one with his head in the decks at this moment.',
      why: 'Fred describes what he was looking at.',
      quote: 'I remember! my eye caught this group of friends who were jus all facing each other shouting every word it was beautiful to see.'
    },
    {
      t: 2340, kind: 'note', who: 'thomas', evidence: 'stated',
      title: 'Thomas has a drum machine',
      tech: ['Synced drum machine'],
      body: 'The single most useful fact for telling them apart. A drum machine was clock-synced to the decks, and Thomas played it by hand for the whole set. Any percussion or synth sound that is not in the records is him, and any time he is bent over a box that is not a deck or the mixer, this is what he is doing.',
      why: 'Stated by Fred.',
      quote: 'The drum machine was synced to the decks so for the whole set Thomas was making these mad sounds in the moment on it.',
      watch: 'A separate unit beside the decks, and Thomas’s hands on pads or knobs there rather than on a jog wheel.'
    },
    {
      t: 2400, kind: 'mix', who: 'thomas', evidence: 'inferred',
      title: 'Clubbed to Death, then the Revolution',
      tracks: [
        ['Rob Dougan', 'Clubbed to Death (Kurayamino Variation)'],
        ['Gil Scott-Heron', 'The Revolution Will Not Be Televised']
      ],
      tech: ['Pre-made edit', 'Spoken word over strings'],
      body: 'The Matrix-era strings piece under Gil Scott-Heron’s spoken word.',
      why: 'Fred says he looked at the deck and was surprised by the file name (next entry). You are not surprised by a file you loaded yourself, so this deck was most likely Thomas’s.',
      watch: 'Fred glancing down at a deck screen around 41:15.'
    },
    {
      t: 2475, kind: 'note', who: 'thomas', evidence: 'inferred',
      title: 'A file called “revolution yeah”',
      tech: ['Pre-made edit'],
      body: 'The file name gives the next move away: the “yeah” is Usher. That also means the Revolution-into-Yeah! switch is baked into one prepared file, not performed as a live transition.',
      why: 'Fred did not know what the “yeah” meant, so he had not heard this one. He said earlier that some ideas were made “without each other hearing so it was still a surprise”.',
      quote: 'I remember I looked down at the decks and saw the track was called ‘revolution yeah’. I thought I wonder what the ‘yeah’ means….'
    },
    {
      t: 2505, kind: 'mix', who: 'thomas', evidence: 'inferred',
      title: 'Yeah!',
      tracks: [['Usher ft. Lil Jon & Ludacris', 'Yeah!']],
      tech: ['Surprise drop'],
      body: 'The payoff of the file name. A 2004 R&B hit dropped out of a political spoken-word piece.',
      why: 'Follows from the “revolution yeah” file being a surprise to Fred.',
      watch: 'Fred’s reaction. If he is laughing with his hands off the equipment, that fits the idea that he did not know it was coming.'
    },
    {
      t: 2629, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Jungle',
      tracks: [['Pascal', 'Serious Sounds (VIP)']],
      tech: [],
      body: 'A 90s jungle record straight after Yeah!, about ninety seconds of it by the timestamps.',
      why: 'No source says who played it.'
    },
    {
      t: 2725, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Touch',
      tracks: [['Daft Punk ft. Paul Williams', 'Touch']],
      tech: [],
      body: 'The slowest, strangest song on Random Access Memories, played in the middle of a club set.',
      why: 'No source says who played it. Fred’s note is personal rather than technical.',
      quote: 'Big hennnn, this is OUR daft punk record I think.'
    },
    {
      t: 2830, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Giorgio by Moroder',
      tracks: [['Daft Punk ft. Giorgio Moroder', 'Giorgio by Moroder']],
      tech: [],
      body: 'About a minute and a half of Giorgio, by the timestamps, before the mash-up that follows.',
      why: 'No source says who played it.'
    },
    {
      t: 2925, kind: 'mix', who: 'both', evidence: 'stated',
      title: '“Digital loving arms”',
      tracks: [
        ['Fred again..', 'Billie (Loving Arms)'],
        ['Daft Punk', 'Digital Love']
      ],
      tech: ['Pre-made mash-up'],
      body: 'The mash-up they teased on the afternoon of the show in a studio video: Fred’s Billie against Digital Love. It was built together in the studio that week, so it is a shared piece regardless of whose hand pressed play.',
      why: 'Mixmag reports the studio clip and Fred’s caption that they had “been in the studio all week” preparing the show.',
      quote: 'One of the things that brought me indescribable joy this night, was seeing Thomas’s son singing along to every song of his dads. he was like 1 when they last played.',
      watch: 'Thomas’s son singing along behind the booth (Fred places this around 50:20).'
    },
    {
      t: 3198, kind: 'note', who: 'unknown', evidence: 'stated',
      title: 'The face Fred remembers',
      tech: [],
      body: 'A camera shot Fred flags as the one he remembers most clearly from the night.',
      why: 'Fred’s note. He does not say whose face.',
      quote: 'Look at that face man, this is the face I remember most clearly.'
    },
    {
      t: 3254, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Raspberry Beret',
      tracks: [['Prince & The Revolution', 'Raspberry Beret']],
      tech: [],
      body: 'A 1985 pop single in the middle of a club set.',
      why: 'No source says who played it.'
    },
    {
      t: 3440, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Teachers, over Joy Orbison',
      tracks: [
        ['Daft Punk', 'Teachers'],
        ['Joy Orbison', 'flight fm'],
        ['Debo', 'South Side']
      ],
      tech: ['Three-way layer'],
      body: 'Daft Punk’s 1997 roll-call of their influences, against a current UK club track. Fred notes the crowd reacting to nothing more than the hi-hat intro.',
      why: 'No source says who started the block. The next entry is Fred’s contribution to it.',
      quote: 'Shoutout joy Orbison man, for a crowd to look like this just at like the hi hat intro of a song?!'
    },
    {
      t: 3506, kind: 'note', who: 'fred', evidence: 'stated',
      title: 'Fred lists his own teachers',
      tech: ['Custom version'],
      body: 'On the original record Daft Punk name the producers who taught them. Fred says he did the same here. From the note alone I cannot tell whether that is a prepared vocal or something else; listen for names that are not on the 1997 record.',
      why: 'Stated by Fred: “it only made sense for me to do the same”.',
      quote: 'Daft punk listed all their teachers, so it only made sense for me to do the same.'
    },
    {
      t: 3660, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Lights on, harder better faster',
      tracks: [
        ['Fred again.. & Swedish House Mafia ft. Future', 'Turn On The Lights again..'],
        ['Daft Punk', 'Harder, Better, Faster, Stronger']
      ],
      tech: ['Layer'],
      body: 'One anthem from each catalogue, combined.',
      why: 'No source says who was on which deck.',
      watch: 'Two tracks, two owners: a natural place for each of them to be holding one channel.'
    },
    {
      t: 3990, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Aerodynamic meets grime',
      tracks: [
        ['Daft Punk', 'Aerodynamic'],
        ['Fred again.. & PlaqueBoyMax ft. Skepta, LYNY & D Double E', 'Victory Lap Five']
      ],
      tech: ['Layer', 'Tempo jump'],
      body: 'The Aerodynamic guitar figure against a 140 BPM grime track.',
      why: 'No source says who was on which deck.'
    },
    {
      t: 4147, kind: 'mix', who: 'fred', evidence: 'inferred',
      title: 'Starboy and leavemealone, the same song in two universes',
      tracks: [
        ['The Weeknd ft. Daft Punk', 'Starboy'],
        ['Fred again.. & Baby Keem', 'leavemealone']
      ],
      tech: ['Mash-up by similarity'],
      body: 'Two records whose grooves sit close enough to be swapped for each other.',
      why: 'The idea reached the booth through Fred: his brother texted it to him an hour before the show (next entry). That makes it most likely Fred’s blend, though he does not say he performed it.'
    },
    {
      t: 4219, kind: 'note', who: 'fred', evidence: 'stated',
      title: 'An idea from an hour before doors',
      tech: [],
      body: 'This blend was not part of the week of studio preparation. It came from a text message that afternoon.',
      why: 'Stated by Fred.',
      quote: 'My brother texted me like an hour before the show being like ‘is it just me or are starboy and leavemealone like the same but in different universes’.'
    },
    {
      t: 4280, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'leavemealone, jungle version',
      tracks: [['Fred again.. & Baby Keem', 'leavemealone (Nia Archives remix, “Freddit”)']],
      tech: ['Edit', 'Tempo jump'],
      body: 'The same song again in Nia Archives’ jungle remix, in a version Fred labels as his own edit.',
      why: 'The edit is Fred’s. No source says who played it.'
    },
    {
      t: 4608, kind: 'mix', approx: true, who: 'unknown', evidence: 'none',
      title: 'Back to the orchestra',
      tracks: [['Thomas Bangalter', 'Mythologies: V. Les Amazones']],
      tech: ['Orchestral'],
      body: 'A second piece from Thomas’s ballet score, mirroring the opening. It comes directly before the longest single track of the night.',
      why: 'It is Thomas’s composition, but no source says who played it. Fred’s notes give no time for it; this timestamp comes from an automatic track detector and may be off by a minute or more.'
    },
    {
      t: 4700, kind: 'mix', who: 'both', evidence: 'stated',
      title: 'Music Sounds Better With You',
      tracks: [['Stardust', 'Music Sounds Better With You']],
      tech: ['Built up part by part'],
      body: 'Thomas co-wrote and co-produced this record in 1998. It runs for about ten minutes here, far longer than anything else in the set.',
      why: 'Fred describes the plan for this section as shared (“we wanted”).',
      watch: 'Long builds are where filter and EQ moves are slow enough to see. Watch for a hand resting on one knob for bars at a time.'
    },
    {
      t: 4760, kind: 'note', who: 'both', evidence: 'stated',
      title: 'The machine finds its soul',
      tech: ['Built up part by part', 'Synced drum machine'],
      body: 'Fred explains the idea: bring the track in one component at a time, mechanical parts first, and let it become the full record gradually. Given that Thomas had a synced drum machine, some of those early parts may be coming from it rather than from a deck. That last point is my guess, not Fred’s statement.',
      why: 'The plan is stated by Fred. Which sounds come from the drum machine is not.',
      quote: 'We wanted to build up each of the parts in the machine, and then gradually the machine finds its soul.'
    },
    {
      t: 5300, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Da Funk, the long way round',
      tracks: [
        ['Daft Punk', 'Da Funk (Armand Van Helden “Ten Minutes of Funk” mix)'],
        ['Tony Romera', '2009'],
        ['Fred again.. ft. BIA', 'ICEY']
      ],
      tech: ['Three-way layer'],
      body: 'A 1997 remix of Da Funk, a recent French house track, and a Fred single, listed as one chain.',
      why: 'No source says who was on which deck.'
    },
    {
      t: 5565, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'A song Thomas’s son made at twelve',
      tracks: [
        ['Roxb', 'never the end'],
        ['Caribou', 'Can’t Do Without You']
      ],
      tech: ['Layer'],
      body: 'The first track here was made by Thomas’s son when he was twelve, and he sings on it. It is blended with Caribou.',
      why: 'No source says who started the son’s track. The Caribou half is attributed to Thomas in the next entry.'
    },
    {
      t: 5640, kind: 'note', who: 'thomas', evidence: 'stated',
      title: 'Thomas plays “I can’t do without you” under his son’s voice',
      tech: ['Layer'],
      body: 'Fred says the Caribou vocal is Thomas’s move, laid against his son singing. Fred also flags the shot ten seconds later as his favourite in the film.',
      why: 'Stated by Fred: “blended with Thomas playing (saying?) i cant do without u”.',
      quote: 'This was maybe the most beautiful thing ive ever seen happen. Thats Thomas’s son singing in a song he made when he was 12, blended with Thomas playing (saying?) i cant do without u.',
      watch: 'The shot at about 1:34:10.'
    },
    {
      t: 5760, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Signatune into Around the World',
      tracks: [
        ['DJ Mehdi', 'Signatune (Thomas Bangalter edit)'],
        ['Daft Punk', 'Around the World']
      ],
      tech: ['Edit', 'Layer'],
      body: 'Thomas’s 2007 edit of his late friend DJ Mehdi’s track, into the best-known Daft Punk bassline. Signatune was also in their first set together, in Paris in October 2025.',
      why: 'Both records are from Thomas’s side, but no source says who played them.'
    },
    {
      t: 5980, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Delilah',
      tracks: [['Fred again..', 'Delilah (pull me out of this)']],
      tech: [],
      body: 'A Fred single, running about six minutes by the timestamps.',
      why: 'It is Fred’s track, but no source says who played it.',
      quote: 'Shoutout ally pally Every. Single. Time.'
    },
    {
      t: 6366, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'One More Time, one more time',
      tracks: [
        ['Daft Punk', 'One More Time'],
        ['Fred again.. & SOAK', 'just stand there'],
        ['', '“Femi” (as written in Fred’s notes)']
      ],
      tech: ['Three-way layer', 'Reprise'],
      body: 'The set ends where it started, with One More Time, this time against a slow Fred track.',
      why: 'No source says who was on which deck.'
    },
    {
      t: 6760, kind: 'note', who: 'thomas', evidence: 'stated',
      title: 'Dad on the table',
      tech: [],
      body: 'Fred passes on a joke from Thomas’s son. Watch whether it comes true.',
      why: 'Fred quotes Thomas’s son; he does not describe the moment directly.',
      quote: 'Thomas’s son was like I wonder if we’ll get dad on the table tonight.'
    },
    {
      t: 6918, kind: 'note', who: 'fred', evidence: 'stated',
      title: 'End of USB002',
      tech: [],
      body: 'The last night of a ten-week tour.',
      why: 'Fred’s closing note.',
      quote: 'To everyone whos been a part of USB002, everyone who came thru around the world, everyone who made it what it was, thank you forever.'
    }
  ]
};
