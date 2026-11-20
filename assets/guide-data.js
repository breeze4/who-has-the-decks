/*
 * Guide data for "Who has the decks?"
 *
 * who:      'fred' | 'thomas' | 'both' | 'unknown'
 * evidence: 'seen'     - observed in frames of the film; `why` gives the frame time(s)
 *           'stated'   - Fred again.. says it in his own timestamped notes
 *           'inferred' - not said or seen outright; reasoning is given in `why`
 *           'none'     - no source says, and the frames do not show it
 * kind:     'mix'  - a new track / blend starts here (gets a block on the timeline)
 *           'note' - something to notice inside the current block
 *
 * Rules used for 'seen' (frame review, Nov 2026):
 * - 'seen' needs the booth on screen at the change, with that person's hand on a deck or mixer
 *   control, or cueing in headphones right before it, and nothing that contradicts it.
 * - 'both' + 'seen' means both are on the controls at the change; the frames do not show
 *   which of them started the incoming track.
 * - If the change itself falls in a wide or dark shot, but only one person works the controls
 *   on each side of it, the entry is 'inferred' and `why` gives the frames either side.
 *
 * Sources are listed in index.html. Times are from Fred's notes unless `approx` is set.
 */
window.GUIDE = {
  videoId: 'gfF8jzBVWvM',
  duration: 6983, // 1:56:23, length of this video; replaced by the player's own value once loaded
  moments: [
    {
      t: 0, kind: 'mix', who: 'thomas', evidence: 'seen',
      title: 'Orchestra, then a house sermon',
      tracks: [
        ['Thomas Bangalter', 'Mythologies: X. L’Accouchement'],
        ['Fingers Inc.', 'My House (Acapella) — “Jack had a groove”']
      ],
      tech: ['Acapella over a beatless bed', 'Prepared idea'],
      body: 'The set opens with no drums at all: a piece from Thomas’s orchestral ballet score with the “My House” spoken vocal laid over it. Thomas works the booth alone in headphones. Fred stands back, watches, claps and dances.',
      why: 'Seen: Thomas’s hands on the equipment with headphones on at 0:34, 1:01, 1:08 and 1:25; Fred off the controls at 0:49–0:58. Fred’s notes also say this was an idea Thomas played him in the studio.',
      quote: 'THIS was one he played me in the studio, so I knew where it was going, and let me tell you this first 3 minutes right here, ive never felt calmer in my life.'
    },
    {
      t: 196, kind: 'mix', who: 'thomas', evidence: 'seen',
      title: 'The drop everyone was waiting for',
      tracks: [
        ['Daft Punk', 'One More Time'],
        ['Fred again..', 'Marea (We’ve Lost Dancing)'],
        ['Marvin Gaye', 'Ain’t No Mountain High Enough']
      ],
      tech: ['Three-way layer'],
      body: 'One song from each of them plus a Motown vocal, listed by Fred as a single three-way combination. Fred’s opening note ends “knowing that what was about to happen was….”, and his note here finishes the sentence. Thomas brings it in. Fred leaves the decks with a hand-held microphone and goes to the front of the stage.',
      why: 'Seen: Thomas alone at the controls with headphones on at 3:01, 3:23 and 3:35. Fred holds a microphone from about 3:23 and is at the front of the stage at 3:44–3:54. Whether this is one prepared file or a live layer is not visible: no screen or fader can be read.',
      quote: '... this ^'
    },
    {
      t: 457, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Straight to the UK',
      tracks: [['Tessela', 'Hackney Parrot (Sammy Virji’s Hackney Pigeon Dub)']],
      tech: ['Genre switch'],
      body: 'From French house to a UK garage rework of a UK breakbeat staple. Fred chose the direction (“the only place to go after that song I thought”). In the booth, both are on the controls through the change, and the headphones pass from Fred to Thomas.',
      why: 'Seen: Fred cues in headphones at 6:40–6:50; Thomas has them on from 7:08 to 7:50; both have hands on the equipment at 7:23 and 7:48. The frames do not show who brings the new record in.',
      quote: 'Shoutout the uk, the only place to go after that song I thought, shoutout ed from overmono aka tessela.'
    },
    {
      t: 690, kind: 'mix', who: 'both', evidence: 'seen',
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
      body: 'The densest block of the night: two of Thomas’s hardest 90s records, a rave classic, two Fred/Skrillex tracks and an acapella, all listed by Fred as one chain. At the start both of them have a hand on the same unit in the middle of the table.',
      why: 'Seen: both hands on the middle unit at 11:30, with Thomas in headphones; both on the equipment at 10:39, 11:01 and 11:39.'
    },
    {
      t: 858, kind: 'note', who: 'thomas', evidence: 'stated',
      title: 'Thomas plays the Renegade Master vocal',
      tech: ['Acapella'],
      body: 'Fred singles out an “iconic vocal” at this point and says it was played by Thomas. The vocal is the Renegade Master acapella: heard in the audio at 14:18 and checked by ear against the original Wildchild record. The frames fit: Thomas puts his headphones on and works the middle units while Fred is on the unit at his own end.',
      why: 'Stated by Fred: “this one, but played by Thomas”. Heard: the Renegade Master vocal at 14:18. Seen at 14:19–14:26; the frames cannot show which unit plays the vocal.',
      quote: 'It was mad hearing these iconicccc vocals, like the my house vocal from the beginning, or this one, but played by Thomas, it gibes them a sorta even deeper resonance.'
    },
    {
      t: 914, kind: 'note', who: 'thomas', evidence: 'seen',
      title: 'Thomas’s extra box',
      tech: ['Synced drum machine'],
      body: 'At Thomas’s end of the table, beyond his decks, is a long unit with a row of knobs. Its front edge reads “novation”. Thomas plays it with both hands while Fred dances. Fred says Thomas played a synced drum machine all night (39:00); this is the box Thomas is seen working that is not a deck or the mixer, but no model name is legible, so the frames do not prove which instrument it is.',
      why: 'Seen: “novation” legible at 15:14, Thomas’s hands on the unit at 15:14, 32:16–32:18 and 38:04–38:13.'
    },
    {
      t: 980, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Bleep techno',
      tracks: [['LFO', 'LFO (Leeds Warehouse Mix)']],
      tech: [],
      body: 'A 1990 Warp record. By the timestamps it gets about eighty seconds before the next Daft Punk edit.',
      why: 'The film shows only crowd, wide and dark shots from 16:00 to 16:31, so the change is not on screen. Thomas has headphones on from 16:43.'
    },
    {
      t: 1060, kind: 'mix', who: 'thomas', evidence: 'seen',
      title: 'Crescendolls, re-edited',
      tracks: [['Daft Punk', 'Crescendolls (MPH edit)']],
      tech: ['Edit'],
      body: 'A modern UK edit of a Discovery track. Fred points out who is standing behind the booth: Busy P (Pedro Winter, Daft Punk’s former manager) and Thomas’s son. Several people are visible behind the booth here; the film does not say who they are.',
      why: 'Seen: Thomas holds a headphone cup to his ear at 17:36 and has both cups on, looking down at the controls, at 17:40. Fred’s hand is near the middle of the table at 17:40, but he is not cueing.',
      quote: 'Shoutout busy p and Thomas’s son looming in the background. ed banger forever.'
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
      why: 'Stated by Fred: “this was the one that I decided to play”. In the frames Fred cues in headphones at 19:11, but the booth cannot be read at the change (19:52–20:11).',
      quote: 'We made about 20 versions of technologic mashed up wit different things, but this was the one that I decided to play. Shoutout cu.rve.'
    },
    {
      t: 1354, kind: 'mix', who: 'both', evidence: 'stated',
      title: 'Technologic, version two',
      tracks: [['Daft Punk', 'Technologic'], ['Dylan Brady', 'Needle Guy']],
      tech: ['Pre-made mash-up'],
      body: 'They do not stop at one. A second Technologic version comes in, this time over a hyperpop instrumental.',
      why: 'Fred says “we played two”. He does not say which of them loaded it, and the booth is off screen at the change (22:31–22:47).',
      quote: 'Ok we played two…'
    },
    {
      t: 1445, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Technologic, version three',
      tracks: [['Daft Punk', 'Technologic'], ['Adam F', 'Circles']],
      tech: ['Pre-made mash-up', 'Tempo jump'],
      body: 'Third version, now over a drum & bass classic. Circles is a much faster record than Technologic, so the vocal must have been refitted to it; given Fred’s note at 20:00 that was presumably done in the studio, not live.',
      why: 'Seen: at 24:01–24:03 Fred’s hand is on the knobs of the middle unit and Thomas reaches into the same unit beside him. Fred also says “we played three”.',
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
      why: 'At 25:00–25:06 Fred claps and drinks, hands off the controls. Thomas leans over the knob unit, but his hand is out of frame. An automatic track detector places My Girls at about 25:48 and Night Vision at about 27:24.'
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
      why: 'The film shows only wide shots from 30:40 to 31:48. From 31:50 both work the mixer together, so the frames do not show each of them holding one channel.'
    },
    {
      t: 1910, kind: 'note', who: 'both', evidence: 'seen',
      title: '87 × 2 = 174',
      tech: ['Half-time / double-time'],
      body: 'Fred’s note is the explanation of the trick. By Fred’s number, Doin’ It Right is running at about 87 BPM. Drum & bass runs at roughly 174. One is exactly double the other, so the two line up beat for beat with no pitch change: every beat of the slow song lands on every second beat of the fast one. At this moment both have their hands on the mixer.',
      why: 'Seen: Fred’s hands on the mixer at 31:52; Thomas in headphones at 31:50 and on the mixer at 31:58. The arithmetic is Fred’s; the explanation of why it matters is reasoning, not his.',
      quote: 'Whats 87 times 2?'
    },
    {
      t: 2164, kind: 'note', who: 'thomas', evidence: 'seen',
      title: 'Fred looks out, Thomas has the decks',
      tech: [],
      body: 'Fred remembers looking out at a group of friends here. The film agrees: Fred faces the crowd, raises a cup and waves, while Thomas keeps his hands on the equipment.',
      why: 'Seen: Fred off the controls at 35:55–36:05; Thomas’s hands on the Pioneer DJ unit at his end in the same stretch.',
      quote: 'I remember! my eye caught this group of friends who were jus all facing each other shouting every word it was beautiful to see.'
    },
    {
      t: 2340, kind: 'note', who: 'thomas', evidence: 'stated',
      title: 'Thomas has a drum machine',
      tech: ['Synced drum machine'],
      body: 'The single most useful fact for telling them apart. A drum machine was clock-synced to the decks, and Thomas played it by hand for the whole set. Any percussion or synth sound that is not in the records is him. Just before this note the film shows him working the knob unit at his end of the table (see 15:14) while Fred holds the microphone.',
      why: 'Stated by Fred. Seen: Thomas’s left hand on the knob unit at 38:04–38:13; Fred with a microphone at 38:00–38:31.',
      quote: 'The drum machine was synced to the decks so for the whole set Thomas was making these mad sounds in the moment on it.'
    },
    {
      t: 2400, kind: 'mix', who: 'thomas', evidence: 'seen',
      title: 'Clubbed to Death, then the Revolution',
      tracks: [
        ['Rob Dougan', 'Clubbed to Death (Kurayamino Variation)'],
        ['Gil Scott-Heron', 'The Revolution Will Not Be Televised']
      ],
      tech: ['Pre-made edit', 'Spoken word over strings', 'Bass cut'],
      body: 'The Matrix-era strings piece under Gil Scott-Heron’s spoken word. In the audio, the bass of the outgoing track is cut at 39:10, the track fades almost to silence by 40:00, and the new one comes in with full bass at about 40:05.',
      why: 'Seen: Thomas does the work through the lead-up and after the change. He is on the mixer at 39:45 and on the mixer in headphones at 40:15. Fred smokes and drinks through the lead-up; his only touches are one control at his own end (39:45) and a reach to his own deck with a cigarette in hand (40:15). The change itself, at about 40:05, falls in wide and dark shots (39:50–40:13), so the moment the file starts is not on screen.'
    },
    {
      t: 2475, kind: 'note', who: 'thomas', evidence: 'inferred',
      title: 'A file called “revolution yeah”',
      tech: ['Pre-made edit'],
      body: 'The file name gives the next move away: the “yeah” is Usher. That also means the Revolution-into-Yeah! switch is baked into one prepared file, not performed as a live transition.',
      why: 'Fred did not know what the “yeah” meant, so he had not heard this one. He said earlier that some ideas were made “without each other hearing so it was still a surprise”. Thomas is the one working the controls when the file comes in (40:00 entry). No frame shows Fred looking at a deck screen, and no screen is legible.',
      quote: 'I remember I looked down at the decks and saw the track was called ‘revolution yeah’. I thought I wonder what the ‘yeah’ means….'
    },
    {
      t: 2505, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Yeah!',
      tracks: [['Usher ft. Lil Jon & Ludacris', 'Yeah!']],
      tech: ['Surprise drop'],
      body: 'The payoff of the file name. A 2004 R&B hit dropped out of a political spoken-word piece. Both of them are on the controls when it lands, and both laugh.',
      why: 'Seen: both have a hand on the controls at 41:40–41:48, neither cueing; both laugh at 41:50–41:59. Thomas runs the controls when the file comes in (40:00 entry).'
    },
    {
      t: 2629, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Jungle',
      tracks: [['Pascal', 'Serious Sounds (VIP)']],
      tech: [],
      body: 'A 90s jungle record straight after Yeah!, about ninety seconds of it by the timestamps.',
      why: 'Seen: Thomas puts his headphones on at 43:48–43:55 while working the unit in front of him; Fred works the controls at the same time.'
    },
    {
      t: 2725, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Touch',
      tracks: [['Daft Punk ft. Paul Williams', 'Touch']],
      tech: [],
      body: 'The slowest, strangest song on Random Access Memories, played in the middle of a club set.',
      why: 'The change is a wide shot (45:21–45:37). Thomas cues at 45:14–45:20, but Fred also has a hand on the controls.',
      quote: 'Big hennnn, this is OUR daft punk record I think.'
    },
    {
      t: 2784, kind: 'note', who: 'thomas', evidence: 'seen',
      title: 'Fred on the microphone',
      tech: ['Live vocal'],
      body: 'Fred holds a hand-held microphone to his mouth and touches no control, while Thomas runs the booth alone. Fred has the microphone many times in the film (also around 3:23, 38:00, 50:00, 54:30, 59:11, 1:31:05 and 1:44:17). When he leaves the controls with it, the film usually shows Thomas running the booth.',
      why: 'Seen: Fred with the microphone at his mouth at 46:24–47:02 (clearest at 46:55); Thomas puts his headphones on at 46:49 and cues alone until 47:03.'
    },
    {
      t: 2830, kind: 'mix', who: 'thomas', evidence: 'inferred',
      title: 'Giorgio by Moroder',
      tracks: [['Daft Punk ft. Giorgio Moroder', 'Giorgio by Moroder']],
      tech: [],
      body: 'About a minute and a half of Giorgio, by the timestamps, before the mash-up that follows.',
      why: 'Thomas is the only one on the controls before the change: he cues alone in headphones at 46:49–47:03 while Fred is on the microphone. The change itself is a wide shot (47:04–47:16), so it is not seen.'
    },
    {
      t: 2925, kind: 'mix', who: 'both', evidence: 'seen',
      title: '“Digital loving arms”',
      tracks: [
        ['Fred again..', 'Billie (Loving Arms)'],
        ['Daft Punk', 'Digital Love']
      ],
      tech: ['Pre-made mash-up'],
      body: 'The mash-up they teased on the afternoon of the show in a studio video: Fred’s Billie against Digital Love. It was built together in the studio that week, and both are on the controls when it plays.',
      why: 'Seen: both work the controls; Thomas wears his headphones from 48:02 to 49:11. Mixmag reports the studio clip and Fred’s caption that they had “been in the studio all week”.',
      quote: 'One of the things that brought me indescribable joy this night, was seeing Thomas’s son singing along to every song of his dads. he was like 1 when they last played.'
    },
    {
      t: 3198, kind: 'note', who: 'thomas', evidence: 'seen',
      title: 'The face Fred remembers',
      tech: [],
      body: 'The face on screen when Fred writes this is Thomas’s, in close-up, smiling and clapping.',
      why: 'Seen at 53:17–53:18: cap, glasses and the chest logo are visible. Fred does not say whose face he means; this is the face the film shows.',
      quote: 'Look at that face man, this is the face I remember most clearly.'
    },
    {
      t: 3254, kind: 'mix', who: 'thomas', evidence: 'seen',
      title: 'Raspberry Beret',
      tracks: [['Prince & The Revolution', 'Raspberry Beret']],
      tech: [],
      body: 'A 1985 pop single in the middle of a club set. Thomas runs it alone while Fred dances with the microphone.',
      why: 'Seen: Thomas’s hands on the deck and mixer from 54:07 to 54:43 (left hand on a deck, right on the mixer at 54:20); Fred off the controls.'
    },
    {
      t: 3440, kind: 'mix', who: 'fred', evidence: 'seen',
      title: 'Teachers, over Joy Orbison',
      tracks: [
        ['Daft Punk', 'Teachers'],
        ['Joy Orbison', 'flight fm'],
        ['Debo', 'South Side']
      ],
      tech: ['Three-way layer'],
      body: 'Daft Punk’s 1997 roll-call of their influences, against a current UK club track. Fred notes the crowd reacting to nothing more than the hi-hat intro.',
      why: 'Seen: Fred’s hands on the deck and the knob unit at 57:07–57:24. Thomas stands next to him; his hands are in the dark.',
      quote: 'Shoutout joy Orbison man, for a crowd to look like this just at like the hi hat intro of a song?!'
    },
    {
      t: 3506, kind: 'note', who: 'fred', evidence: 'stated',
      title: 'Fred lists his own teachers',
      tech: ['Custom version'],
      body: 'On the original record Daft Punk name the producers who taught them. Fred says he did the same here. In the film he stays at the decks, and at 59:11 he speaks or sings into the microphone while Thomas cues.',
      why: 'Stated by Fred: “it only made sense for me to do the same”. Seen: Fred with the microphone at 59:11–59:18. The frames cannot show whether that vocal is the list of teachers.',
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
      why: 'The picture is near black at 1:00:42–1:00:58, then strobe light hides the hands. After that the person at the decks is seen only from behind.'
    },
    {
      t: 3990, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Aerodynamic meets grime',
      tracks: [
        ['Daft Punk', 'Aerodynamic'],
        ['Fred again.. & PlaqueBoyMax ft. Skepta, LYNY & D Double E', 'Victory Lap Five']
      ],
      tech: ['Layer', 'Tempo jump'],
      body: 'The Aerodynamic guitar figure against a grime track.',
      why: 'The change is in wide and crowd shots (1:06:30–1:06:41). Both cue in headphones at 1:05:31, and both have hands on the controls at 1:06:43–1:06:47.'
    },
    {
      t: 4147, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Starboy and leavemealone, the same song in two universes',
      tracks: [
        ['The Weeknd ft. Daft Punk', 'Starboy'],
        ['Fred again.. & Baby Keem', 'leavemealone']
      ],
      tech: ['Mash-up by similarity'],
      body: 'Two records whose grooves sit close enough to be swapped for each other. The idea reached the booth through Fred, but both of them do the work: Thomas does the cueing beforehand, and Fred is on the controls as it lands.',
      why: 'Seen: Thomas cues in headphones with a hand on his jog wheel at 1:08:42–1:08:55, while Fred works knobs with his headphones round his neck; Fred has both hands on the controls at 1:09:07. The seconds just before (1:08:56–1:09:06) are a wide shot.'
    },
    {
      t: 4219, kind: 'note', who: 'fred', evidence: 'stated',
      title: 'An idea from an hour before doors',
      tech: [],
      body: 'This blend was not part of the week of studio preparation. It came from a text message that afternoon.',
      why: 'Stated by Fred. At this moment both are on the controls (1:10:18).',
      quote: 'My brother texted me like an hour before the show being like ‘is it just me or are starboy and leavemealone like the same but in different universes’.'
    },
    {
      t: 4280, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'leavemealone, jungle version',
      tracks: [['Fred again.. & Baby Keem', 'leavemealone (Nia Archives remix, “Freddit”)']],
      tech: ['Edit', 'Tempo jump'],
      body: 'The same song again in Nia Archives’ jungle remix, in a version Fred labels as his own edit. Fred cues it and works the knobs at his end; Thomas keeps a hand on his own deck.',
      why: 'Seen: Fred cues in headphones at 1:11:08–1:11:11 and works the knobs at 1:11:17–1:11:20; Thomas’s hand is on his jog wheel through the same stretch.'
    },
    {
      t: 4578, kind: 'mix', approx: true, who: 'unknown', evidence: 'none',
      title: 'Back to the orchestra',
      tracks: [['Thomas Bangalter', 'Mythologies: V. Les Amazones']],
      tech: ['Orchestral'],
      body: 'A second piece from Thomas’s ballet score, mirroring the opening. It comes directly before the longest single track of the night. In the audio, the drums thin out and the high frequencies stop at about 1:16:18. Soon after, both men take their headphones off and relax.',
      why: 'Fred’s notes give no time for this track. The time is the audio change at 1:16:18; a filter sweep would look the same in the audio, so treat it as approximate. Both are busy at the controls until 1:16:35; the change is in a wide shot; from 1:16:44 to 1:17:08 both have their headphones round their necks.'
    },
    {
      t: 4700, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Music Sounds Better With You',
      tracks: [['Stardust', 'Music Sounds Better With You']],
      tech: ['Built up part by part'],
      body: 'Thomas co-wrote and co-produced this record in 1998. It runs for about ten minutes here, far longer than anything else in the set. Both work the build: Thomas in headphones at his end, reaching to the middle and across; Fred on the units in front of him.',
      why: 'Seen at 1:17:48, 1:18:20, 1:18:30, 1:21:00 and 1:21:16. Most of this stretch is backlit silhouette. Fred also describes the plan as shared (“we wanted”).'
    },
    {
      t: 4760, kind: 'note', who: 'both', evidence: 'stated',
      title: 'The machine finds its soul',
      tech: ['Built up part by part'],
      body: 'Fred explains the idea: bring the track in one component at a time, mechanical parts first, and let it become the full record gradually. Whether some early parts come from Thomas’s drum machine is not visible: at the frame rate reviewed, slow knob moves cannot be told apart from other hand work.',
      why: 'The plan is stated by Fred. Which sounds come from which unit is not known.',
      quote: 'We wanted to build up each of the parts in the machine, and then gradually the machine finds its soul.'
    },
    {
      t: 5300, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Da Funk, the long way round',
      tracks: [
        ['Daft Punk', 'Da Funk (Armand Van Helden “Ten Minutes of Funk” mix)'],
        ['Tony Romera', '2009'],
        ['Fred again.. ft. BIA', 'ICEY']
      ],
      tech: ['Three-way layer'],
      body: 'A 1997 remix of Da Funk, a recent French house track, and a Fred single, listed as one chain.',
      why: 'Seen: Thomas cues with a hand on the ear cup at 1:27:46 and reaches to the controls at 1:28:19–1:28:22; Fred’s hand is on a knob at 1:28:18.'
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
      why: 'Both cue in headphones at 1:32:03–1:32:09, but the booth is too dark to read at the change (1:32:40–1:32:47).'
    },
    {
      t: 5640, kind: 'note', who: 'thomas', evidence: 'seen',
      title: 'Thomas plays “I can’t do without you” under his son’s voice',
      tech: ['Layer'],
      body: 'Fred says the Caribou vocal is Thomas’s move, laid against his son singing, and wonders whether Thomas was playing or saying it. The film answers that: Thomas is at the decks with his hand on a platter, not on a microphone. Fred is the one holding a microphone.',
      why: 'Stated by Fred: “blended with Thomas playing (saying?) i cant do without u”. Seen: Thomas’s hand on a deck platter at 1:33:22 and 1:33:39, on the controls at 1:34:24–1:34:46; Fred with a microphone at 1:33:39.',
      quote: 'This was maybe the most beautiful thing ive ever seen happen. Thats Thomas’s son singing in a song he made when he was 12, blended with Thomas playing (saying?) i cant do without u.'
    },
    {
      t: 5650, kind: 'note', who: 'unknown', evidence: 'stated',
      title: 'Fred’s favourite shot',
      tech: [],
      body: 'The film cuts between a young person near the booth (curly hair, glasses, white T-shirt) pressing a fist to their mouth, then smiling with a hand on their chest, and Thomas grinning at the decks.',
      why: 'Fred’s note. The shot is seen at 1:34:08–1:34:14. The film does not say who the young person is.',
      quote: 'My favourite shot in the whole thing this.'
    },
    {
      t: 5760, kind: 'mix', who: 'both', evidence: 'seen',
      title: 'Signatune into Around the World',
      tracks: [
        ['DJ Mehdi', 'Signatune (Thomas Bangalter edit)'],
        ['Daft Punk', 'Around the World']
      ],
      tech: ['Edit', 'Layer'],
      body: 'Thomas’s 2007 edit of his late friend DJ Mehdi’s track, into the best-known Daft Punk bassline. Signatune was also in their first set together, in Paris in October 2025.',
      why: 'Seen: Thomas in headphones throughout; Fred on the middle controls at 1:35:46 and 1:36:04–1:36:08. The exact change (1:35:51–1:36:02) is a wide shot.'
    },
    {
      t: 5980, kind: 'mix', who: 'unknown', evidence: 'none',
      title: 'Delilah',
      tracks: [['Fred again..', 'Delilah (pull me out of this)']],
      tech: [],
      body: 'A Fred single, running about six minutes by the timestamps.',
      why: 'The change is a wide shot. At 1:39:09 Thomas cues while Fred’s hands are on the controls; at 1:40:01–1:40:05 both work the controls.'
    },
    {
      t: 6256, kind: 'note', who: 'fred', evidence: 'seen',
      title: 'Shoutout Ally Pally',
      tech: ['Live vocal'],
      body: 'Fred steps off the controls to the microphone, and Thomas claps. A moment later Fred is up on the booth top with the microphone while Thomas stays at the decks.',
      why: 'Seen: Fred’s hands on the controls at 1:44:16, then on the microphone at 1:44:17–1:44:23; Thomas clapping at 1:44:16, 1:44:22 and 1:44:37–1:44:43; Fred on the booth top at 1:44:46–1:45:02.',
      quote: 'Shoutout ally pally Every. Single. Time.'
    },
    {
      t: 6366, kind: 'mix', who: 'fred', evidence: 'inferred',
      title: 'One More Time, one more time',
      tracks: [
        ['Daft Punk', 'One More Time'],
        ['Fred again.. & SOAK', 'just stand there'],
        ['', '“Femi” (as written in Fred’s notes)']
      ],
      tech: ['Three-way layer', 'Reprise'],
      body: 'The set ends where it started, with One More Time, this time against a slow Fred track.',
      why: 'Fred is the only one seen on the controls either side of the change (1:45:28, 1:45:55, 1:46:16), with Thomas beside him, hands down. The moment itself is too dark to read.'
    },
    {
      t: 6760, kind: 'note', who: 'thomas', evidence: 'seen',
      title: 'Dad on the table',
      tech: [],
      body: 'Thomas’s son joked that his dad might end up on the table. He does: both climb onto the booth top and hug, Thomas stands up there alone for a while, then both are up again before they go back to the decks.',
      why: 'Seen: both onto the booth top at 1:52:33–1:52:40; Thomas alone up there at 1:52:56–1:53:05; both up at 1:53:13–1:54:05; back at the decks by 1:54:11.',
      quote: 'Thomas’s son was like I wonder if we’ll get dad on the table tonight.'
    },
    {
      t: 6918, kind: 'note', who: 'fred', evidence: 'stated',
      title: 'End of USB002',
      tech: [],
      body: 'The last night of a ten-week tour. Fred speaks on the microphone, they embrace at the decks, and the film fades out on a wide shot.',
      why: 'Fred’s closing note. Seen: Fred on the microphone at 1:55:26–1:55:40, the embrace at 1:55:46–1:55:48. No frame shows who stops the music.',
      quote: 'To everyone whos been a part of USB002, everyone who came thru around the world, everyone who made it what it was, thank you forever.'
    }
  ]
};
