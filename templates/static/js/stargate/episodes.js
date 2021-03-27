// Episode Template:
//{
//    title: "",
//    description: "",
//    date: ""
//}

const colors = {
    1: '#07367A',
    2: '#5619CE',
    3: '#F523FF',
    4: '#EF561D',
    5: '#FAC537',
    6: '#FDF143',
    7: '#9DFAAA',
    8: '#19CB8D',
    9: '#2D8B4F',
    10: '#0D6394'
}

const seasons = {
    1 : {
        1: {
            title: "1: Children of the Gods: Part 1",
            description: "Colonel Jack O'Neill is brought out of retirement to lead a new expedition back to Abydos, only to find an old friend, a new enemy and a far wider use of the Stargate.",
            date: "27 Jul. 1997"
        },
        2: {
            title: "2: Children of the Gods: Part 2",
            description: "Colonel Jack O'Neill is brought out of retirement to lead a new expedition back to Abydos, only to find an old friend, a new enemy and a far wider use of the Stargate.",
            date: "27 Jul. 1997"
        },
        3: {
            title: "3: The Enemy Within",
            description: "Doctors discover a Goa'uld larvae has attached itself to Kawalsky's brain and the soldier must undergo a risky operation.",
            date: "1 Aug. 1997"
        },
        4: {
            title: "4: Emancipation",
            description: "While exploring a world populated by Mongol descendants, Capt. Carter is abducted as a wife of a local warlord.",
            date: "8 Aug. 1997"
        },
        5:{
            title: "5: The Broca Divide",
            description: "The Stargate base is put in deadly peril when it is contaminated with a dangerous infection which causes its victims to become mindlessly animalistic brutes.",
            date: "15 Aug. 1997"
        },
        6:{
            title: "6: The First Commandment",
            description: "The SG-1 team is sent after the SG-9 team that has failed to return. They find that SG-9's captain, having been treated like a god by planetary inhabitants, is drunk with power and is tyrannizing them. Can they overcome him?",
            date: "22 Aug. 1997"
        },
        7:{
            title: "7: Cold Lazarus",
            description: "O'Neill is knocked out and replaced by an alien double while on a mission.",
            date: "29 Aug. 1997"
        },
        8:{
            title: "8: The Nox",
            description: "With the Stargate program in danger of being terminated, the team is under pressure to find technology. Visiting a planet where they believe there is a creature that possesses the secret of invisibility, they encounter Apophis and his guards. Both sides receiving mortal wounds, they are aided by the planet's inhabitants, the Nox, a gentle people with a very large secret.",
            date: "12 Sep. 1997"
        },
        9:{
            title: "9: Brief Candle",
            description: "On the planet Argos, Kynthia seduces Colonel O'Neill, which gives him an Argosian lifespan of only a 100 days. As he begins to age rapidly, will the SG-1 team succeed in finding a cure?",
            date: "19 Sep. 1997"
        },
        10:{
            title: "10: Thor's Hammer",
            description: "O'Neill and Teal'c are trapped in an underground labyrinth and must fight for their lives against Unas, the original Goa'uld host.",
            date: "26 Sep. 1997"
        },
        11:{
            title: "11: The Torment of Tantalus",
            description: "Daniel Jackson discovers that the Stargate was activated in 1945 and a young professor went through, never to return. Together with his still living fiancée, the SG1 team discover the now aged professor, naked and trapped in a decaying fortress, containing the secrets of an Ancient alliance. Will they be able to rescue him and escape to earth in time?",
            date: "3 Oct. 1997"
        },
        12:{
            title: "12: Bloodlines",
            description: "It is time for Teal'c's son Rya'c to have his primtal. Can Teal'c stop his son from being implanted with a goa'uld and becoming a slave to Apophis?",
            date: "10 Oct. 1997"
        },
        13:{
            title: "13: Fire and Water",
            description: "Daniel Jackson is presumed dead after an alien abducts him and sends the rest of the SG-1 team home.",
            date: "17 Oct. 1997"
        },
        14:{
            title: "14: Hathor",
            description: "Gou'ald who has taken on the persona of the Egyptian sex goddess, Hathor, casts her deadly spell over all the men on the Stargate base.",
            date: "24 Oct. 1997"
        },
        15:{
            title: "15: Singularity",
            description: "The SG-1 team rescues a little girl, the sole survivor of a disease that wiped out a planet, only to find she’s a human time bomb, designed by the Goa’uld to destroy the Stargate.",
            date: "31 Oct. 1997"
        },
        16:{
            title: "16: Cor-ai",
            description: "Teal'c is put on trial by the son of a man he killed when he served the evil Goa'uld Apophis.",
            date: "23 Jan. 1998"
        },
        17:{
            title: "17: Enigma",
            description: "The SG-I team rescues a group of highly advanced aliens from a collapsing world, but must risk court martial to prevent the aliens’ technology from falling into the wrong hands.",
            date: "30 Jan. 1998"
        },
        18:{
            title: "18: Solitudes",
            description: "Following a Stargate technical defect, O'Neill and Carter are stranded next to a Stargate in a cave on an icy wasteland. O'Neill is severely wounded and both are freezing. Will the SGC find and rescue them in time?",
            date: "6 Feb. 1998"
        },
        19:{
            title: "19: Tin Man",
            description: "After arriving on P3X-989, the team are rendered unconscious. When they wake, they return to Earth, but soon find out that they are androids. The team must return to the planet to find out what happened to their real bodies.",
            date: "13 Feb. 1998"
        },
        20:{
            title: "20: There But for the Grace of God",
            description: "Daniel Jackson is pulled into an alternate reality where he sees earth being invaded by the Goa’uld.",
            date: "20 Feb. 1998"
        },
        21:{
            title: "21: Politics",
            description: "The Stargate team must justify the project's continuation when a doubtful senator, Head of the Congressional Military Appropriations Committee, comes to review the project's performance.",
            date: "27 Feb. 1998"
        },
        22:{
            title: "22: Within the Serpent's Grasp",
            description: "SG-1 secretly travels to a Goauuld attack ship and learn that the Earth is about to be attacked in an all-out assault.",
            date: "6 Mar. 1998"
        }
    },
    2: {
        1: {
            title: "1: The Serpent's Lair",
            description: "As a fleet of Goa'uld warships heads toward Earth, threatening to destroy it, the Stargate facility prepares for the worst, sending the best and brightest of American society through the Stargate to a safe Alpha site.",
            date: "26 Jun. 1998"
        },
        2: {
            title: "2: In the Line of Duty",
            description: "Samantha Carter becomes the host of a Goa'uld when she was trying to save the life of the previous host.",
            date: "3 Jul. 1998"
        },
        3: {
            title: "3: Prisoners",
            description: "Having helped a murderer, the SG-1 team is banished to a penal world where an unusual ruler holds the key to their return home.",
            date: "10 Jul. 1998"
        },
        4: {
            title: "4: The Gamekeeper",
            description: "Col. Jack O'Neill and the SG-1 team travel to P7J-989, where they discover a beautiful garden and a dome full of strange metallic chambers. Inside each podlike chamber is an unconscious person.",
            date: "17 Jul. 1998"
        },
        5: {
            title: "5: Need",
            description: "Daniel Jackson falls in love with an alien princess who seduces him with the powers of the Goa'uld sarcophagus.",
            date: "24 Jul. 1998"
        },
        6: {
            title: "6: Thor's Chariot",
            description: "The SG-1 team must help stop a Goa-uld invasion on a planet where they previously destroyed its main line in defense.",
            date: "31 Jul. 1998"
        },
        7: {
            title: "7: Message in a Bottle",
            description: "SG-1 discovers an ancient artifact and brings it back to the SGC. Ariving at the SGC, it becomes active, pins O'Neill to the gate room wall, and unleashes a virus into him.",
            date: "7 Aug. 1998"
        },
        8: {
            title: "8: Family",
            description: "Teal'c's son Rya'c is kidnapped by Apophis and SG1 tries to rescue him. When Rya'c is recovered he denounces his father and helps to capture the team. They escape, but will they be able to return to Earth and cure Rya'c?",
            date: "14 Aug. 1998"
        },
        9: {
            title: "9: Secrets",
            description: "Daniel Jackson finds out that his wife is pregnant with Apohis's child just as O'Neill learns that a reporter is poised to reveal the top- secret Stargate SG-1 project.",
            date: "21 Aug. 1998"
        },
        10: {
            title: "10: Bane",
            description: "While exploring a new planet, Teal'c is stung by a giant insect whose venom causes a terrifying transformation.",
            date: "25 Sep. 1998"
        },
        11: {
            title: "11: The Tok'ra: Part 1",
            description: "Capt. Samantha Carter has a vivid dream, in which she sees through the eyes of Jolinar, the Tok'ra -- rebel Goa'uld -- who briefly inhabited her body before dying.",
            date: "2 Oct. 1998"
        },
        12: {
            title: "12: The Tok'ra: Part 2",
            description: "The Tok'ra have turned down Col. Jack O'Neill and SG-1's request for an alliance against the Goa'uld because, as Garshaw explains, the earthlings don't offer enough rewards to justify the security breach.",
            date: "11 Oct. 1998"
        },
        13: {
            title: "13: Spirits",
            description: "Plans by Stargate Command and the N.I.D. to mine a planet populated by Coast Salish Indians are interrupted by the mysterious spirits who protect the people and the planet.",
            date: "23 Oct. 1998"
        },
        14: {
            title: "14: Touchstone",
            description: "While attempting to return a stolen weather device to the planet Madrona, O'Neill and the SG-1 team uncover a government agenda that has sinister implications.",
            date: "30 Oct. 1998"
        },
        15: {
            title: "15: The Fifth Race",
            description: "SG-1 travels to a planet whose people are allies of the Asgard.",
            date: "22 Jan. 1999"
        },
        16: {
            title: "16: A Matter of Time",
            description: "Stargate Command opens a wormhole to a planet with a black hole in orbit.",
            date: "29 Jan. 1999"
        },
        17: {
            title: "17: Holiday",
            description: "Daniel falls victim to an intervention that swaps his body with that of a dying man.",
            date: "5 Feb. 1999"
        },
        18: {
            title: "18: Serpent's Song",
            description: "When SG-1's mortal enemy Apophis seeks sanctuary in the SGC his presence unleashes an ancient spirit whose wrath threatens to destroy everyone.",
            date: "12 Feb. 1999"
        },
        19: {
            title: "19: One False Step",
            description: "While testing new technology, a UAV malfunctions and crashes on a planet. SG-1 goes to determine the cause of the malfunction, but discovers that their presence may be causing serious injury to the planet's primitive inhabitants.",
            date: "19 Feb. 1999"
        },
        20: {
            title: "20: Show and Tell",
            description: "In a war of attrition against the Goa'ulds, a race of invisible aliens plots to kill all of mankind.",
            date: "26 Feb. 1999"
        },
        21: {
            title: "21: 1969",
            description: "A solar flare sends SG-1 back in time thirty years to 1969. Captured by military police at Cheyenne Mountain, they escape with the help of a young Hammond and then must find the Stargate so they can return to the present.",
            date: "5 Mar. 1999"
        },
        22: {
            title: "22: Out of Mind",
            description: "O'Neill awakens in a futuristic world where an unfamiliar Stargate team tell him he has been frozen for eight decades and the members of SG-1 are long dead.",
            date: "12 Mar. 1999"
        }
    },
    3: {
        1: {
            title: "1: Into the Fire",
            description: "O'Neill, Carter and Jackson are trapped on Hathor's planet. Teal'c and Hammond go to Chulak to forge a rescue plan and recover the team.",
            date: "25 Jun. 1999"
        },
        2: {
            title: "2: Seth",
            description: "Capt. Samantha Carter's father, Jacob, enlists the SG-1 team in his hunt for the ancient Goa'uld system lord Seth, whom he believes is hiding on Earth.",
            date: "2 Jul. 1999"
        },
        3: {
            title: "3: Fair Game",
            description: "The Asgard and three Goa'uld System Lords meet at Stargate Command to negotiate a treaty modification, but subterfuge and treachery threaten not only the success of the negotiations, but Earth itself.",
            date: "9 Jul. 1999"
        },
        4: {
            title: "4: Legacy",
            description: "When the SG-1 team discover a sealed chamber of dead Goa'ulds, Daniel Jackson is exposed to the parasites that killed them and threaten to drive him insane.",
            date: "16 Jul. 1999"
        },
        5: {
            title: "5: Learning Curve",
            description: "While employing the help of a planet's highly intelligent children for a project, the team discovers their horrific imposed fate when they reach a certain age.",
            date: "22 Jul. 1999"
        },
        6: {
            title: "6: Point of View",
            description: "Alternate reality versions of Kawalski and Carter are caught at Area 51 after coming through the quantum mirror.",
            date: "30 Jul. 1999"
        },
        7: {
            title: "7: Deadman Switch",
            description: "SG-1 travels to planet PJ6-877 for a routine recon. Almost immediately after arriving, they are snared in an invisible forcefield by alien bounty hunter Aris Boch.",
            date: "6 Aug. 1999"
        },
        8: {
            title: "8: Demons",
            description: "SG-1 encounters a medieval civilization and are mistaken for demons.",
            date: "13 Aug. 1999"
        },
        9: {
            title: "9: Rules of Engagement",
            description: "Upon exiting the stargate, SG-1 finds itself in the midst of battle. A group of SG soldiers battles a Jaffa army.",
            date: "19 Aug. 1999"
        },
        10: {
            title: "10: Forever in a Day",
            description: "During a rescue of captured Abydonians, including his father-in-law, Kasuf, Dr. Daniel Jackson sees his long-lost wife Sha're watching the activity from a nearby tent.",
            date: "8 Oct. 1999"
        },
        11: {
            title: "11: Past and Present",
            description: "The team discovers an early industrial world with suffering from collective amnesia and has no elderly people.",
            date: "15 Oct. 1999"
        },
        12: {
            title: "12: Jolinar's Memories",
            description: "The Tok'ra Martouf arrives at the SGC with troubling news: Maj. Samantha Carter's father, Jacob, and his Tok'ra symbiote, Selmak, have been captured by the evil Goa'uld system lord Sokar.",
            date: "22 Oct. 1999"
        },
        13: {
            title: "13: The Devil You Know",
            description: "SG-1 must escape from a prison built to simulate the fires of Hell.",
            date: "29 Oct. 1999"
        },
        14: {
            title: "14: Foothold",
            description: "An alien incursion takes control of the base.",
            date: "5 Nov. 1999"
        },
        15: {
            title: "15: Pretense",
            description: "The SG-1 team is requested by the Tollan to participate in a trial concerning Skaara and whether he has control of his body or the Goa'uld parasite, Klorel.",
            date: "21 Jan. 2000"
        },
        16: {
            title: "16: Urgo",
            description: "The minds of SG-1 are invaded by a curious being.",
            date: "28 Jan. 2000"
        },
        17: {
            title: "17: A Hundred Days",
            description: "After a cataclysmic meteorite bombardment, Col. Jack O'Neill finds himself stranded on a primitive planet with its Stargate apparently permanently inaccessible.",
            date: "4 Feb. 2000"
        },
        18: {
            title: "18: Shades of Grey",
            description: "Col. O'Neill is dismissed from the SGC for stealing alien technology, and is subsequently approached to participate in an even more covert Stargate operation.",
            date: "11 Feb. 2000"
        },
        19: {
            title: "19: New Ground",
            description: "SG-1's arrival on a planet makes them pawns in an ideological war.",
            date: "18 Feb. 2000"
        },
        20: {
            title: "20: Maternal Instinct",
            description: "Bra'tac, accompanied by his battered Jaffa apprentice, arrives at Stargate Command pleading for medical assistance.",
            date: "25 Feb. 2000"
        },
        21: {
            title: "21: Crystal Skull",
            description: "When Daniel seemingly vanishes during an exploration, SG-1 must seek out the assistance of his eccentric grandfather.",
            date: "3 Mar. 2000"
        },
        22: {
            title: "22: Nemesis",
            description: "Ready to go on vacation, O'Neill is beamed away by the Asgard. Thor tells him that Earth is faced with an enemy even worse than the Goa'uld.",
            date: "10 Mar. 2000"
        }
    },
    4: {
        1: {
            title: "1: Small Victories",
            description: "SG-1 has to deal with a Replicator infestation on a Russian sub on Earth while Major Carter advises the Asgards about combating the menace in their galaxy.",
            date: "30 Jun. 2000"
        },
        2: {
            title: "2: The Other Side",
            description: "The SGC is contacted by an advanced and embattled alien human civilization seeking military assistance, but their exact reasons for it become increasingly suspect.",
            date: "7 Jul. 2000"
        },
        3: {
            title: "3: Upgrades",
            description: "Anise, a new Tok'ra representative to Earth, approaches Stargate Command for help in testing some mysterious armband devices discovered amid the ruins of a distant planet.",
            date: "14 Jul. 2000"
        },
        4: {
            title: "4: Crossroads",
            description: "An old love of Teal'c approaches the SGC and the Tok'ra claiming that her Goa'uld symbiote has been convinced to defect with their help.",
            date: "21 Jul. 2000"
        },
        5: {
            title: "5: Divide and Conquer",
            description: "When an SG-team member tries to assassinate the Tok'ra leader, it is believed that some of the SGC have been converted into za'tarc - programmed assassins. The Tok'ra Freya comes to the SGC with Martouf to try and test all SG-team members. But the za'tarc detector suggests that O'Neill and Carter are actually za'tarcs. Is this correct and is there another za'tarc at the SGC?",
            date: "28 Jul. 2000"
        },
        6: {
            title: "6: Window of Opportunity",
            description: "Col. O'Neill and Teal'c realize they and their friends are trapped in a time loop.",
            date: "4 Aug. 2000"
        },
        7: {
            title: "7: Watergate",
            description: "The SGC learn that the Russians have a Stargate of their own and they need the Americans' help with their problems with it that are affecting them both.",
            date: "11 Aug. 2000"
        },
        8: {
            title: "8: The First Ones",
            description: "While on an archaeological dig at the original Goa'uld home world, Daniel is captured by a young Unas. He tries to communicate with it and slowly builds a rapport. Meanwhile, SG-1 comes to the planet to find Daniel and they soon realise that some of the SG-team members there may have been taken over by Goa'uld. Will they be able to discover which ones in time to rescue Daniel?",
            date: "18 Aug. 2000"
        },
        9: {
            title: "9: Scorched Earth",
            description: "On the Enkarans' new home, SG-1 discovers a giant spaceship is threatening the colonists as it terraforms the planet.",
            date: "25 Aug. 2000"
        },
        10: {
            title: "10: Beneath the Surface",
            description: "The SG-1 team awake to find they have lost their memories. They believe they are workers in an underground power station. They are told that they are helping to preserve life during an ice age. In truth, they are slave labor to a huge domed city above. When Teal'c starts to recover his memory and is given another amnesia treatment, he forgets his Kelno'reem and starts to die. Will the others recover their memories in time to save him?",
            date: "1 Sep. 2000"
        },
        11: {
            title: "11: Point of No Return",
            description: "The SGC is contacted by a strange man called Martin, a conspiricist who believes he is an alien. The question is, how does Martin know about the Stargate and how come he has a gate address and is he being drugged by others?",
            date: "8 Sep. 2000"
        },
        12: {
            title: "12: Tangent",
            description: "While testing a new spacefighter made from Goa'uld parts, Col. O'Neill and Teal'c are trapped when a hidden automatic recall function takes over and sends it into space.",
            date: "15 Sep. 2000"
        },
        13: {
            title: "13: The Curse",
            description: "When one of Daniel's professors dies in a lab explosion which might be related to the Goa'ulds, he comes back to Chicago to investigate what really happened.",
            date: "22 Sep. 2000"
        },
        14: {
            title: "14: The Serpent's Venom",
            description: "SG-1 accompanies Jacob on a dangerous mission to sabotage an alliance between Apophis and Heru-ur.",
            date: "29 Sep. 2000"
        },
        15: {
            title: "15: Chain Reaction",
            description: "General Hammond retires from SGC after threats to his family from the N.I.D. and O'Neill forces Maybourne to assist him to find out more about the secret organization.",
            date: "5 Jan. 2001"
        },
        16: {
            title: "16: 2010",
            description: "After the mysterious death of Daniel's archaeology professor, Daniel discovers that a relic that his professor was studying may have contained a Goa'uld symbiote.",
            date: "12 Jan. 2001"
        },
        17: {
            title: "17: Absolute Power",
            description: "Daniel becomes obsessed with power after they encounter Shifu, the Harsesis child.",
            date: "19 Jan. 2001"
        },
        18: {
            title: "18: The Light",
            description: "One member of an SG unit has committed suicide, and three others, including Dr. Daniel Jackson, are near death. Their condition is a mystery, but the answer could well lie in a strange offworld temple.",
            date: "26 Jan. 2001"
        },
        19: {
            title: "19: Prodigy",
            description: "Carter decides to inspire a brilliant but difficult Air Force cadet by introducing her to the SGC program.",
            date: "2 Feb. 2001"
        },
        20: {
            title: "20: Entity",
            description: "When the SGC probes a new planet, an alien energy entity there responds by invading the SGC's computer systems, and then Major Carter herself.",
            date: "9 Feb. 2001"
        },
        21: {
            title: "21: Double Jeopardy",
            description: "On Juna, SG-1 gets a hostile welcome from the local warriors' leader Darian, who seems incredulous they even dared to return. They loyally deliver Sam and Teal'c to Cronus and told them to bury the Stargate. Cronus orders Darian to decapitate Daniel by staff weapon- to find his head is robotic. Cronus's obvious astonishment makes Darian doubt his divinity. At the SGC, Harlan urge them to go on a mission. The master robot-creator tells SG-1 that the robot versions of them he created need to recharge after 48 hours. In order to prevent the Goa'uld gaining access to their duplicates' memories, SG-1 reluctantly go to Juna. Darian now joins them, but feels most of his people won't dare challenge Cronus. The two Teal'cs concentrate on revenging the original's father by attacking Cronus recklessly, while the Sams and Jacks deal with the military problems and overthrowing the Goa'uld rule.",
            date: "16 Feb. 2001"
        },
        22: {
            title: "22: Exodus",
            description: "SG-1 delivers their newly confiscated Goa'uld mothership to help the Tok'ra evacuate their planet and deal with their disinformed Goa'uld spy in their midst.",
            date: "23 Feb. 2001"
        }
    },
    5: {
        1: {
            title: "1: Enemies",
            description: "Stranded in another galaxy while fleeing their attack on Apophis' fleet proves only the beginning of SG-1's problems as multiple enemies appear.",
            date: "29 Jun. 2001"
        },
        2: {
            title: "2: Threshold",
            description: "To help Teal'c mind clear again, SG-1 asks Bra'tac to help. Bra'tac removes Teal'c's Gou'ald and Teal'c is forced to remember certain memories of his past. The real Teal'c in the end. SG-1 is glad to have him back.",
            date: "6 Jul. 2001"
        },
        3: {
            title: "3: Ascension",
            description: "After being rendered unconscious during an expedition, Carter's subsequently ordered furlough is interrupted by a mysterious being with a message and growing affection for her.",
            date: "13 Jul. 2001"
        },
        4: {
            title: "4: The Fifth Man",
            description: "When SG-1 flees from an expedition with Col. O'Neill and some mysterious team member named, Tyler, whom no one else knows about, stranded, the fitness of the team is questioned.",
            date: "20 Jul. 2001"
        },
        5: {
            title: "5: Red Sky",
            description: "When SG-1 inadvertently dooms a planet upon arrival, the team must overcome Asgardian diplomacy and indigenous religious prejudice to put things right.",
            date: "27 Jul. 2001"
        },
        6: {
            title: "6: Rite of Passage",
            description: "Cassandra is overcome by a Goa'uld virus that she has been carrying with her from her homeworld for the past four years.",
            date: "3 Aug. 2001"
        },
        7: {
            title: "7: Beast of Burden",
            description: "When Daniel's Unas friend, Chaka, is captured by another world's slavers, SG-1 goes to that world to rescue him.",
            date: "10 Aug. 2001"
        },
        8: {
            title: "8: The Tomb",
            description: "SG-1 teams up with a Russian task force to investigate the disappearance of a Russian SG team on P2X-338. They discover that the Russian SG team released a creature that killed Marduk, a Goa'uld, in his sarcophagus. SG-1 must trust their Russian partners in order to escape the ziggurat alive.",
            date: "17 Aug. 2001"
        },
        9: {
            title: "9: Between Two Fires",
            description: "With the death of Omac, the subsequent sudden Tollan reconsideration of their tech embargo leads to SG-1 suspecting a government conspiracy.",
            date: "24 Aug. 2001"
        },
        10: {
            title: "10: 2001",
            description: "SG-1 makes contact with the Aschen, unaware of that their homeworld is one they were warned previously from the future to be considered off-limits.",
            date: "31 Aug. 2001"
        },
        11: {
            title: "11: Desperate Measures",
            description: "A Russian transport vehicle is ambushed and its valuable cargo, a captured Jaffa, is taken by force. At nearly the same time, Major Carter is ambushed while getting into her car and abducted by mysterious men dressed in black.",
            date: "7 Sep. 2001"
        },
        12: {
            title: "12: Wormhole X-Treme!",
            description: "A strange ship is headed towards Earth, and the SGC suspects that Martin Lloyd and his companions may have something to do with it. O'Neill is sent to speak to Martin and is assigned as a military consultant on Martin's new show, 'Wormhole X-treme!', which uncannily resembles SG-1 despite Martin once again losing his memory. His former shipmates stall Carter and Daniel by throwing them off the trail and into the hands of the NID.",
            date: "8 Sep. 2001"
        },
        13: {
            title: "13: Proving Ground",
            description: "While SG-1 is conducting training exercises for new recruits, Jack gets a call about a 'foothold' situation. Wounded by compromised officers, O'Neill must lead the recruits in retaking the SGC.",
            date: "8 Mar. 2002"
        },
        14: {
            title: "14: 48 Hours",
            description: "When Teal'c is trapped in the Stargate buffer, the team must juggle the technical challenges along with personal, interdepartmental and diplomatic rivalries to rescue him in time.",
            date: "15 Mar. 2002"
        },
        15: {
            title: "15: Summit",
            description: "In a Tok'ra plan to wipe out the Goa'uld, Daniel goes undercover as Yu's servant to release a poison at a meeting of the system lords. Meanwhile a Goa'uld attack on the Tok'ra base leaves the rest of SG-1 with their hands full.",
            date: "22 Mar. 2002"
        },
        16: {
            title: "16: Last Stand",
            description: "Part II of SUMMIT. Daniel discovers that there is a more powerful Goa'uld not attending the conference named Anubis, who is going to destroy Earth to prove himself to the other System Lords.",
            date: "29 Mar. 2002"
        },
        17: {
            title: "17: Fail Safe",
            description: "A large asteroid is discovered on a collision course with Earth.",
            date: "5 Apr. 2002"
        },
        18: {
            title: "18: The Warrior",
            description: "A new leader has risen among the Free Jaffa, K'tano, former First Prime of Imhotep. SG-1, accompanied by Bra'tac, seeks an alliance between the Tau'ri and the large force he has amassed.",
            date: "12 Apr. 2002"
        },
        19: {
            title: "19: Menace",
            description: "A beautiful young android may hold the key to the salvation of the Asgard.",
            date: "26 Apr. 2002"
        },
        20: {
            title: "20: The Sentinel",
            description: "To fix a mistake caused by the fake SG team, the real SG-1 must enlist the help of two convicts. The threat of an approaching Goa'uld mothership stresses the repair of the Sentinel.",
            date: "3 May. 2002"
        },
        21: {
            title: "21: Meridian",
            description: "As Jackson suffers from a fatal dose of radiation, he struggles with the value of his life while his friends deal with the emotional and diplomatic repercussions.",
            date: "10 May. 2002"
        },
        22: {
            title: "22: Revelations",
            description: "While still dealing with the loss of Daniel Jackson the SGC is contacted by the Asgard who require assistance dealing with Anubis, who seems to have new shield technology that can repel Asgard weapons.",
            date: "17 May. 2002"
        }
    },
    6: {
        1: {
            title: "1: Redemption: Part 1",
            description: "Master Bra'tac arrives with bad news: Teal'c's wife is deathly ill, and Teal'c leaves to be with her. Shortly thereafter, the gate is opened but nothing comes through. Then Carter discovers a very low power signal that is slowly building an overload powerful enough to destroy the Earth.",
            date: "7 Jun. 2002"
        },
        2: {
            title: "2: Redemption: Part 2",
            description: "Anubis' weapon continues to threaten Earth. Various plans are tried until Jonas Quinn suggests something simple that just might work. Meanwhile, Master Bra'tac has discovered the planet from which Anubis is launching the attack. He, Teal'c and Rya'c journey there to put a stop to it.",
            date: "14 Jun. 2002"
        },
        3: {
            title: "3: Descent",
            description: "When SGC detects an Goa'uld ship in orbit, SG-1 is dispatched with Jacob Carter to investigate. They find the ship to be abandoned with no discernible life signs and Sam determines it to be the same used to kidnap Thor. Once on board the Goa'uld vessel, they find that the crew had initiated a self destruct sequence. O'Neill would very much like to salvage the ship despite Jacob's warnings that it could be a Trojan horse. An examination of the computer core reveals that Thor may have been able to introduce a virus but Jacob was right: it's an ambush and the ship soon plunges in the ocean. SGC and the Navy mount a rescue operation.",
            date: "21 Jun. 2002"
        },
        4: {
            title: "4: Frozen",
            description: "SG-1 discovers an ancient woman frozen in the ice in Antarctica.",
            date: "28 Jun. 2002"
        },
        5: {
            title: "5: Nightwalkers",
            description: "An entire town becomes infected with immature symbiotes that only have power over their hosts at night.",
            date: "12 Jul. 2002"
        },
        6: {
            title: "6: Abyss",
            description: "O'Neill (Richard Dean Anderson) flees a Jaffa attack on an unknown planet but is captured alongside a slave before reaching the Stargate.",
            date: "19 Jul. 2002"
        },
        7: {
            title: "7: Shadow Play",
            description: "Jonas returns to his home planet on the brink of a World War. His mentor, Dr. Keiran, suffering from effects of Naquadria exposure, has hallucinations about an underground peace movement.",
            date: "26 Jul. 2002"
        },
        8: {
            title: "8: The Other Guys",
            description: "An awkward scientist that admires SG-1's exploits gets mixed up in their secret mission, but ends up saving them from Khonsu.",
            date: "2 Aug. 2002"
        },
        9: {
            title: "9: Allegiance",
            description: "Tensions between the Tok'ra and Jaffa are strained when they are forced together at the Alpha site and become more complicated by a traitor among them.",
            date: "9 Aug. 2002"
        },
        10: {
            title: "10: Cure",
            description: "The Pangar offer SG-1 a miracle serum that supposedly will cure all human diseases, but the resistance is only temporary and origin of the serum is the first queen of the Tok'ra.",
            date: "16 Aug. 2002"
        },
        11: {
            title: "11: Prometheus",
            description: "When TV reporter Julia Donovan gets wind of a top secret project called Prometheus, the president orders General Hammond to kill the story.",
            date: "23 Aug. 2002"
        },
        12: {
            title: "12: Unnatural Selection",
            description: "After rescuing SG-1 from hyperspace, the Asgard leader Thor asks SG-1 help fight the replicators that have overrun his homeworld.",
            date: "10 Jan. 2003"
        },
        13: {
            title: "13: Sight Unseen",
            description: "SG-1 returns from an archeological site on another planet carrying an ancient artifact that glows and emits strange energy waves.",
            date: "17 Jan. 2003"
        },
        14: {
            title: "14: Smoke and Mirrors",
            description: "Senator Kinsey is shot in the chest at a public event, killing him just before his party's presidential nomination. Jack is arrested for the murder, and General Hammond assigns the rest of SG-1 to uncover the truth.",
            date: "24 Jan. 2003"
        },
        15: {
            title: "15: Paradise Lost",
            description: "O'Neil and Maybourne are accidentally transported to a deserted moon and must be rescued before they kill each other.",
            date: "31 Jan. 2003"
        },
        16: {
            title: "16: Metamorphosis",
            description: "SG-1 encounters a group of mutants in an off world laboratory.",
            date: "7 Feb. 2003"
        },
        17: {
            title: "17: Disclosure",
            description: "The US and Russia reveal Stargate Command and its operations to representatives of the other permanent members of the United Nations Security Council.",
            date: "14 Feb. 2003"
        },
        18: {
            title: "18: Forsaken",
            description: "SG-1 encounters the crew of a stranded ship struggling to stay alive on a remote planet.",
            date: "21 Feb. 2003"
        },
        19: {
            title: "19: The Changeling",
            description: "Teal'c is having strange nightmares featuring Apophis in which he is human and a firefighter with the rest of his team alongside him.",
            date: "28 Feb. 2003"
        },
        20: {
            title: "20: Memento",
            description: "On a shakedown cruise of the Prometheus, the ship's hyperdrive regulator becomes irreparably damaged. A nearby planet was listed on the cartouche of addresses found on Abydos and thus may have a stargate. After a short jump towards the planet, the naquadria reactor overloads and must be jettisoned. After the reactor explodes above the planet causing damage, the fate of SG-1 and the crew of the Prometheus is in the hands of a once Goa'uld-controlled world that they're off to a rough start with.",
            date: "7 Mar. 2003"
        },
        21: {
            title: "21: Prophecy",
            description: "SG-1 is on planet P4S-237, talking to the people there who have been oppressed by the Goa'uld system lord Ba'al, whose emissary, system lord Mot, regularly visits the planet to collect a tribute in the form of Naquadah.",
            date: "14 Mar. 2003"
        },
        22: {
            title: "22: Full Circle",
            description: "Riding in the elevator in the SGC, O'Neill is visited by Daniel Jackson who needs his help. Daniel tells him that Anubis is headed for Abydos to search for something called the Eye of Ra, a relic that would make Anubis all-powerful. It's essential that SG-1 go to Abydos and secure the Eye but no has seen it - including Daniel - nor has anyone ever been able to find it. On the planet they see their old friend Skaara and with Daniel's help locate the Eye. They also find a tablet that speaks of a lost city of the ancients. When Anubis and his troops land in force there is little anyone can do to stop them. In the end it's left to Daniel to decide if he will try to stop Anubis - thereby breaking a cardinal rule of the Ancients.",
            date: "21 Mar. 2003"
        }
    },
    7: {
        1: {
            title: "1: Fallen",
            description: "As SG-1 begins its search for the Lost City, they discover that Dr. Daniel Jackson has been returned by the Ancients without any memory of who he was.",
            date: "13 Jun. 2003"
        },
        2: {
            title: "2: Homecoming",
            description: "Anubis's superweapon has been put out of commission, but Anubis escapes into hyperspace. Jonas has been captured by Anubis and Daniel is still aboard Anubis's ship, evading capture. Anubis mind probes on Jonas and begins to attack Kelowna.",
            date: "13 Jun. 2003"
        },
        3: {
            title: "3: Fragile Balance",
            description: "A teenage boy shows up at the SGC claiming to be Jack O'Neill. He recalls a dream in which an Asgard was studying him. They determine that they must find this Asgard to fix what has been done to Jack.",
            date: "20 Jun. 2003"
        },
        4: {
            title: "4: Orpheus",
            description: "In a firefight with Jaffa, Teal'c takes a staff blast to the gut. Without his symbiote, he cannot regenerate as he once did. Daniel feels that he cannot remember something important, so he goes searching through the logs for any sign of his lost knowledge. Teal'c expresses his feelings that the Tritonin has made him weak.",
            date: "27 Jun. 2003"
        },
        5: {
            title: "5: Revisions",
            description: "SG-1 investigate a seemingly idyllic and subtly advanced human colony sheltered inside an energy dome on an otherwise inhospitable planet.",
            date: "11 Jul. 2003"
        },
        6: {
            title: "6: Lifeboat",
            description: "While exploring an crashed alien ship full of passengers in cryostasis, an alien force has downloaded a number of their consciousnesses into Daniel.",
            date: "18 Jul. 2003"
        },
        7: {
            title: "7: Enemy Mine",
            description: "When a SG geological exploration mission runs into deadly conflict with an indigenous Unas clan, Daniel gets Chaka to help seek an accord with it.",
            date: "25 Jul. 2003"
        },
        8: {
            title: "8: Space Race",
            description: "In exchange for new tech for the SGC, Warrick Finn asks for their help to win a dangerous spaceship competition.",
            date: "1 Aug. 2003"
        },
        9: {
            title: "9: Avenger 2.0",
            description: "To save his job, Dr. Felger tests a new virus on the Stargate Network to help control it and it ends up disabling it instead.",
            date: "8 Aug. 2003"
        },
        10: {
            title: "10: Birthright",
            description: "SG-1 comes upon an organized group of women warriors who are reliant on symbiotes in order to live.",
            date: "15 Aug. 2003"
        },
        11: {
            title: "11: Evolution: Part 1",
            description: "After discovering a very advanced bio-engineered warrior of super strength created by Anubis, SG-1 goes in search of a device left on Earth by the Ancients that may be the key to stopping Anubis' new army.",
            date: "22 Aug. 2003"
        },
        12: {
            title: "12: Evolution: Part 2",
            description: "The Tau'ri and Tok'ra have used their captured super-soldier to determine his planet of origin. Though with Daniel, Dr. Lee, and the Ancient device they found in the hands of Honduran kidnappers, SGC must find a way to retrieve them if they are to have any chance of defeating the newly encountered super- soldiers.",
            date: "9 Jan. 2004"
        },
        13: {
            title: "13: Grace",
            description: "Carter is stranded on the Prometheus alone, apparently abandoned by the crew. She is visited by SG-1 in her subconscious as she tries to find a way home.",
            date: "16 Jan. 2004"
        },
        14: {
            title: "14: Fallout",
            description: "Jonas Quinn returns to the SGC with news that Naquadria mines of Kelowna are not native to his world and are threatening to cause an explosion in the planet's core that will leave his home world uninhabitable and millions dead.",
            date: "23 Jan. 2004"
        },
        15: {
            title: "15: Chimera",
            description: "Daniel is having strange dreams involving Sarah Gardner, an old flame and research partner, who's body was taken as a host by Osiris.",
            date: "30 Jan. 2004"
        },
        16: {
            title: "16: Death Knell",
            description: "At the new Alpha site, Major Carter and Selmak (her dad) are working on a new weapon for Anubis superdrones when a fleet of Goa?uld ships attacks. Carter escapes with the prototype weapon but finds herself being pursued by a superdrone.",
            date: "6 Feb. 2004"
        },
        17: {
            title: "17: Heroes: Part 1",
            description: "When the Air Force sends a camera team into Stargate Command to document its historical importance, the camera crew meets with resistance from the men and women who work there.",
            date: "13 Feb. 2004"
        },
        18: {
            title: "18: Heroes: Part 2",
            description: "SGC encounters an unforeseen predicament, with half of SG-13 off-world engaging enemy Jaffa, SG teams 1, 5, and 7 go in as backup. O'Neill takes a staff blast to the chest. Many deaths from the encounter hit SGC hard.",
            date: "20 Feb. 2004"
        },
        19: {
            title: "19: Resurrection",
            description: "Agent Barrett of the NID calls SG-1 to Los Angeles for a consult on a mass murdering of a rogue sleeper cell by a young woman. There they find many Goa'uld artifacts relating to Sekhmet, a subordinate of Ra. But how this operation is related to the Goa'uld eludes SG-1.",
            date: "27 Feb. 2004"
        },
        20: {
            title: "20: Inauguration",
            description: "The newly-elected President of the United States learns about the Stargate program and discovers that his Vice-President may have a hidden agenda where Stargate Command is concerned.",
            date: "5 Mar. 2004"
        },
        21: {
            title: "21: Lost City: Part 1",
            description: "Vice President Kinsey briefs Dr. Weir on the Stargate program before her meeting with the president. SG teams 1, 3, and 5 go off-world to attempt the extraction of a newly found Ancient repository device. Upon arriving at the location of the device, SG-1 comes under fire from Goa'uld ships. With no other way to disallow Anubis from claiming the knowledge for himself, Jack submits himself to the dangerous device.",
            date: "12 Mar. 2004"
        },
        22: {
            title: "22: Lost City: Part 2",
            description: "With Jack having the knowledge of the Ancient repository once again in his mind, he and Daniel attempt to unearth the location of the lost city of the Ancients. Bra'tac, bringing with him the news of an impending attack on the Tau'ri by Anubis, takes Teal'c to help him acquire ships and warriors for the defense of Earth. Dr. Weir attempts to cope with the overwhelming nature of her new job, while also dealing with the unrelenting ego of Vice President Kinsey.",
            date: "19 Mar. 2004"
        }
    },
    8: {
        1: {
            title: "1: New Order: Part 1",
            description: "While Sam and Teal'c go to the planet of the former human-form Replicators to contact the Asgard to cure Jack, Daniel and Dr. Weir must deal with Goa'uld System Lords who wish the Ancients weapon they used to destroy Anubis.",
            date: "9 Jul. 2004"
        },
        2: {
            title: "2: New Order: Part 2",
            description: "After learning from Dr. Daniel Jackson that the Goa'uld are en route to attack Earth, to confirm the existence of the devastating Ancient weapon.",
            date: "9 Jul. 2004"
        },
        3: {
            title: "3: Lockdown",
            description: "Aboard the International Space Station in Earth's orbit, Cosmonaut Anatole Konstantinov barely avoids being struck by part of Anubis' destroyed mothership as it passes under the station.",
            date: "23 Jul. 2004"
        },
        4: {
            title: "4: Zero Hour",
            description: "As the new head of the SGC, General O'Neill is beginning to feel the weight of his load, and he starts to have second thoughts about the whole idea, questioning his own competency.",
            date: "30 Jul. 2004"
        },
        5: {
            title: "5: Icon",
            description: "The discovery of the Stargate creates a war between two nations on the planet Tegalus with Daniel in the middle of it.",
            date: "6 Aug. 2004"
        },
        6: {
            title: "6: Avatar",
            description: "Goa'uld supersoldier drones have breached the gate room and have killed Brig. Gen. Jack O'Neill. In a bold move, Teal'c retrieves a modified P-90 sidearm and takes out the drone.",
            date: "13 Aug. 2004"
        },
        7: {
            title: "7: Affinity",
            description: "Having obtained permission to live off the base, Teal'c rents an apartment telling neighbors that he has recently arrived from Mozambique. He's under orders to keep a low profile but can't seem to help himself when it comes to helping his neighbors. He helps one of who is about to be assaulted by three thugs but it's his next door neighbor who seems to need assistance. Krista is having problems with her boyfriend Doug. Teal'c soon realizes that he is beating her and warns him that should he hurt her, Teal'c will kill him. It all becomes very difficult when Doug is found dead in Krista's apartment. Daniel Jackson soon after receives an offer - translate a Goa'uld text and he will get ironclad evidence that Teal'c is innocent. Meanwhile, Carter is shocked when her boyfriend Pete Shanahan tells he asked for a transfer to the local police department - and asks her to marry him.",
            date: "20 Aug. 2004"
        },
        8: {
            title: "8: Covenant",
            description: "Owner and CEO of Colson Industries declares in a press conference that there is alien life and that he has proof. SGC fails in its attempts to keep him quiet on the battle over the Antarctic. However, they are greatly surprised when the proof he shows the media are not his satellite images, but a living Asgard.",
            date: "27 Aug. 2004"
        },
        9: {
            title: "9: Sacrifices",
            description: "Teal'c is unhappy with his son's plans to marry. Ishta arrives bringing news that Hak'tyl may be compromised. Complications arise when O'Neill allows Hak'tyl to inhabit SGC until a new homeworld is found for them.",
            date: "10 Sep. 2004"
        },
        10: {
            title: "10: Endgame",
            description: "When the Stargate gets beamed out of SGC in the middle of the night, Teal'c is stranded off-world. Dr. Jackson and Colonel Carter attempt to recover the gate.",
            date: "17 Sep. 2004"
        },
        11: {
            title: "11: Gemini",
            description: "The replicator Carter and the real Carter work together with the disruptor signal. The replicator has a different plan.",
            date: "21 Jan. 2005"
        },
        12: {
            title: "12: Prometheus Unbound",
            description: "Daniel tries to persuade the survivor (Claudia Black) of a Gou'ald bloodbath to release the Prometheus, which she hijacked as part of a mission to find a home for her people.",
            date: "21 Dec. 2004"
        },
        13: {
            title: "13: It's Good to Be King",
            description: "SG-1 is sent to warn Harry Maybourne that the goa'uld System Lord Ares is coming to the planet where he was banished, and in the process they find what may be an Ancient time machine.",
            date: "4 Feb. 2005"
        },
        14: {
            title: "14: Full Alert",
            description: "Cold War tensions resurface when the Russians suspect aliens have infiltrated the U.S. government. Their evidence: a compromising video of Kinsey (Ronny Cox).",
            date: "11 Feb. 2005"
        },
        15: {
            title: "15: Citizen Joe",
            description: "A man breaks into Jack's house and hold him at gunpoint claiming that Jack ruined his life. Seven years ago he came upon an Ancient artifact at a garage sale that allows him to see all of SG-1's missions.",
            date: "18 Feb. 2005"
        },
        16: {
            title: "16: Reckoning: Part 1",
            description: "Lord Ba'al has brought the other Goa'uld system lords to the brink of surrender. Now he faces a threat even he cannot hope to survive: the Replicators. The machine species has been overpowering his ships throughout the galaxy.",
            date: "25 Feb. 2005"
        },
        17: {
            title: "17: Reckoning: Part 2",
            description: "Sam and Jacob are on the planet Dakara trying to configure the Ancient's device to destroy the replicators once and for all, helped partly by Baal and Daniel who succeeds in freezing the replicators by manipulating Carter's duplicate.",
            date: "4 Mar. 2005"
        },
        18: {
            title: "18: Threads",
            description: "Daniel finds himself in a strange time and place - a diner where Oma is working as a waitress. She gives him a clear choice - he can choose to die or to ascend but if it's the latter, he will not be able to help his friends fight Anubis, who has yet to be disposed of. He strikes up a conversation with another patron, Jim, who has his own take on the situation. Sam meanwhile decides the time has come for her fiancé to meet her father Jacob. Jacob is not well however, something he has kept from Sam for several weeks. After Pete surprises her - he thinks he's found the perfect house for them - Sam realizes she has to come to grips with her feelings for someone else. Teal'c and Master Bra'tac have information that Anubis may be gathering what remains of his forces for an attack on Dakara.",
            date: "11 Mar. 2005"
        },
        19: {
            title: "19: Moebius: Part 1",
            description: "The SG-1 team journeys in time for a daring mission to obtain a piece of Ancient technology from the Pharaoh Ra - the Goa'uld from the 1994 film that inspired the series.",
            date: "18 Mar. 2005"
        },
        20: {
            title: "20: Moebius: Part 2",
            description: "In an alternate timeline, civilian scientists Samantha Carter and Daniel Jackson have followed the videotaped instructions of their alternate selves in Egypt, and have helped Gen. Hammond and his team unearth the stargate at Antarctica.",
            date: "25 Mar. 2005"
        }
    },
    9: {
        1: {
            title: "1: Avalon: Part 1",
            description: "SG-1's newest member, Lt Colonel Cameron Mitchell, arrives on his first day to find that Samantha Carter, Daniel Jackson and Teal'c have all taken on new assignments.",
            date: "15 Jul. 2005"
        },
        2: {
            title: "2: Avalon: Part 2",
            description: "Upon finding Merlin's testing grounds, Dr. Jackson, Teal'c, Col. Mitchell, and Vala uncover the hidden treasure including a book that tells the story of the Ancients coming to Earth from another galaxy and a strange alien device.",
            date: "22 Jul. 2005"
        },
        3: {
            title: "3: Origin",
            description: "Daniel and Vala have used the Ancient device to inhabit the bodies of people in the Alterans' home galaxy. They have been taken by a prior of the Ori to meet the Doci, one who speaks with the Ori, their gods. Daniel surmises that the Ori are what the Alterans who became the Ancients left behind and have ascended in a similar fashion, but without the restrictions.",
            date: "29 Jul. 2005"
        },
        4: {
            title: "4: The Ties That Bind",
            description: "Finally back at Stargate command and freed from the Jaffa bracelets that linked him with Vala, Daniel eagerly resumes his research.",
            date: "5 Aug. 2005"
        },
        5: {
            title: "5: The Powers That Be",
            description: "Vala leads SG-1 to a planet which the Priors have visited with a plan to keep them from worshiping the Ori. Once there she reveals that the symbiote that once held her ruled over this planet. She feels that keeping them in allegiance to her will hinder the spread of Origin to this world.",
            date: "12 Aug. 2005"
        },
        6: {
            title: "6: Beachhead",
            description: "When the Ori create a force field around a free Jaffa planet, General Landry orders Carter to use a weapon that she designed against the Ori's forces.",
            date: "19 Aug. 2005"
        },
        7: {
            title: "7: Ex Deus Machina",
            description: "Following the death of a Jaffa on Earth and the disappearance of a prominent businessman, SG-1 starts an investigation into what remains of the Trust and into the actions of the Jaffa Nation. They discover that Baal is hiding on Earth after losing his forces to the Jaffa and that the Jaffa are secretly attempting his capture.",
            date: "26 Aug. 2005"
        },
        8: {
            title: "8: Babylon",
            description: "Off-world, SG-1 is attacked by Jaffa of the Sodan, and Mitchell is wounded in a fight with one of them. Thinking that the Jaffa was killed, the other Jaffa take Mitchell back to their village to be trained for a fight to the death.",
            date: "9 Sep. 2005"
        },
        9: {
            title: "9: Prototype",
            description: "The Ori unleash a deadly plague on Earth, prompting a powerful ally from SG-1's past to come to their aid.",
            date: "16 Sep. 2005"
        },
        10: {
            title: "10: The Fourth Horseman: Part 1",
            description: "SG-1 finds a Goa'uld-Human hybrid in stasis in an abandoned Goa'uld lab and take it back to Earth to study, where they learn it was created using Anubis' DNA.",
            date: "16 Sep. 2005"
        },
        11: {
            title: "11: The Fourth Horseman: Part 2",
            description: "The plague continues to spread. Teal'c pleads with the Jaffa High Council to reject Origin, but the Ori have transformed Gerak into a Prior. Cameron and Daniel seek the blood of the Prior that caused the plague in order to cure it.",
            date: "6 Jan. 2006"
        },
        12: {
            title: "12: Collateral Damage",
            description: "On another planet, Mitchell is placed under arrest for the murder of a scientist.",
            date: "13 Jan. 2006"
        },
        13: {
            title: "13: Ripple Effect",
            description: "The SG-1 team is surprised when a friend from the past suddenly appears.",
            date: "20 Jan. 2006"
        },
        14: {
            title: "14: Stronghold",
            description: "Teal'c disappears after voicing concerns about the absence of democracy in the new Jaffa government, which prompts Daniel and Landry to launch an investigation.",
            date: "27 Jan. 2006"
        },
        15: {
            title: "15: Ethon",
            description: "A contact in the Rand Protectorate tells SG-1 that the Ori have given Rand a superweapon to use against the Caledonian Federation in exchange for their conversion to Origin. SG-1 plans to turn the people from Origin and destroy the weapon.",
            date: "3 Feb. 2006"
        },
        16: {
            title: "16: Off the Grid",
            description: "While investigating the source of an addictive corn-like crop, SG-1 becomes involved in a firefight. They are forced to fall back to the gate, but as Daniel is dialing both the Stargate and the DHD are beamed away.",
            date: "10 Feb. 2006"
        },
        17: {
            title: "17: The Scourge",
            description: "While a group of foreign delegates are touring the Gamma Site, a dangerous swarm of alien bugs escapes containment.",
            date: "17 Feb. 2006"
        },
        18: {
            title: "18: Arthur's Mantle",
            description: "Carter and Mitchell find themselves trapped on another plane, unable to be seen by anyone.",
            date: "24 Feb. 2006"
        },
        19: {
            title: "19: Crusade",
            description: "Using an Ancient communication device, Vala contacts Daniel and informs him of what's been happening in the Ori's galaxy.",
            date: "3 Mar. 2006"
        },
        20: {
            title: "20: Camelot",
            description: "SG-1 discovers the village of Camelot on an alien world, and must face Merlin's security system when they go in search of an Ancient weapon.",
            date: "10 Mar. 2006"
        }
    },
    10: {
        1: {
            title: "1: Flesh and Blood",
            description: "As the Ori invasion continues, Vala and Daniel must deal with their leader, Vala's young daughter, who is rapidly aged by the Ori to serve their purposes.",
            date: "14 Jul. 2006"
        },
        2: {
            title: "2: Morpheus",
            description: "The team goes off-world and ends up in serious trouble. Meanwhile, Landry is faced with having to decide whether or not Vala can be trusted to remain at the SGC.",
            date: "21 Jul. 2006"
        },
        3: {
            title: "3: The Pegasus Project",
            description: "While Daniel and Vala search for Merlin's anti-Ori weapon in Atlantis' library, Mitchell, McKay and Carter try to to dial the Ori Supergate in the Milky Way.",
            date: "28 Jul. 2006"
        },
        4: {
            title: "4: Insiders",
            description: "When the team makes a pact with an old enemy to fight their common foe, the results are disastrous.",
            date: "4 Aug. 2006"
        },
        5: {
            title: "5: Uninvited",
            description: "A mysterious creature targets members of Stargate Command one by one.",
            date: "11 Aug. 2006"
        },
        6: {
            title: "6: 200",
            description: "Martin Lloyd seeks out SG-1 for assistance when his failed TV show based on the real Stargate program becomes a feature film.",
            date: "18 Aug. 2006"
        },
        7: {
            title: "7: Counterstrike",
            description: "SG-1 is caught in the middle of a war after the Jaffa use a powerful weapon to kill 10,000 Ori followers.",
            date: "25 Aug. 2006"
        },
        8: {
            title: "8: Memento Mori",
            description: "Vala is kidnapped by agents of the Trust who are trying to find an ancient treasure when an accident causes Vala to forget who she is.",
            date: "8 Sep. 2006"
        },
        9: {
            title: "9: Company of Thieves",
            description: "Cameron Mitchell must go undercover inside the Lucian Alliance to find the location of the hijacked Odyssey.",
            date: "15 Sep. 2006"
        },
        10: {
            title: "10: The Quest: Part 1",
            description: "During their quest for the Sangraal, SG-1 must join forces with their enemy and face a real-life dragon.",
            date: "22 Sep. 2006"
        },
        11: {
            title: "11: The Quest: Part 2",
            description: "Daniel finds a way to defeat the dragon but once back in the cave, the sangraal proves to be just a hologram. In attempting to touch it however, SG-1 and Ba'al are transported to another planet - Adria is left behind. At their new site, they find not only Merlin's treasure but Merlin himself - in ice-bound stasis, much as O'Neill was in Antarctica. When they revive him, Merlin begins to construct the weapon though is too weak to continue, leaving it to Daniel to finish the job. Sam and Ba'al meanwhile try to get the gate functioning to allow them to dial out. They have little time to succeed as Adria will soon arrive with her Ori army.",
            date: "10 Jan. 2007"
        },
        12: {
            title: "12: Line in the Sand",
            description: "Hoping to use Merlin's phasing device to hide a village from the Ori army something goes wrong forcing Mitchell and a critically injured Carter to hide themselves out of phase from an occupation of Ori Soldiers.",
            date: "16 Jan. 2007"
        },
        13: {
            title: "13: The Road Not Taken",
            description: "During a failed experiment, Samantha is transported into a parallel universe where she cloaks Earth to save it from an Ori Attack. Getting back to her own universe is not met with sympathy.",
            date: "23 Jan. 2007"
        },
        14: {
            title: "14: The Shroud",
            description: "Daniel resurfaces as a prior and requests for help from SG-1 on a plan that may be a trap; O'Neill and the team plan to save Daniel's life and halt the war with the Ori.",
            date: "30 Jan. 2007"
        },
        15: {
            title: "15: Bounty",
            description: "Netan (Eric Steinberg) tires of interference from the SG-1 team and dispatches bounty hunters to vanquish them, endangering alumni and guests at Mitchell's high-school reunion.",
            date: "6 Feb. 2007"
        },
        16: {
            title: "16: Bad Guys",
            description: "The team become trapped in a museum on another planet and must pose as a militant group and take hostages in order to buy time for an escape plan to work.",
            date: "13 Feb. 2007"
        },
        17: {
            title: "17: Talion",
            description: "At a summit conference, 32 Jaffa are killed when several bombs explode. Both Teal'c and Master Bra'tac are seriously injured in the blasts and after two weeks in a coma, Teal'c sets out to find the man he is convinced is behind the attack, Arkad. He defeated Arkad in a battle long ago and there has been bad blood between them ever since. Teal'c also suspects that Arkad may have had his mother killed. Intelligence reports indicate that Arkad is a follower of the Ori and that someone, perhaps Arkad himself, is planning to attack the Earth. When Arkad contacts the SGC he turns that information on its head by denying any role in that planned attack and offers to help them defend Earth. SG-1 is sent out to stop Teal'c who is killing and torturing people in his attempt to find his enemy.",
            date: "20 Feb. 2007"
        },
        18: {
            title: "18: Family Ties",
            description: "The SGC is contacted by Jacek who says he has valuable information for them: he will give them the location of Arkad's store of naquadah in return for asylum on Earth. Vala doesn't believe they should deal with the man whom she knows very well: he's her ne'er-do-well father who was absent for much of her life. His information proves to be correct and Landry approves the deal. Jacek however is soon up to his old tricks running a telephone charity scam and bilking the old ladies in his building at bingo. Everyone on the team tries to keep him on the straight and narrow, for Vala's sake if no other reason. Despite his promises Jacek continues in his ways but he soon has an opportunity to prove himself. Meanwhile, Vala's situation causes General Landry to review his own family situation.",
            date: "27 Feb. 2007"
        },
        19: {
            title: "19: Dominion",
            description: "SG-1 tries to capture Adria (Morena Baccarin) by using Vala as bait, but Ba'al intervenes and seizes her in a bid to gain control of the Ori army.",
            date: "15 Jun. 2007"
        },
        20: {
            title: "20: Unending",
            description: "General Landry accompanies SG-1 on a mission to collect the knowledge of the Asgard. When the Ori show up, however, Sam is forced to evacuate the crew. Landry and SG-1 stay aboard, but are stuck helpless in a time dilation field for decades.",
            date: "13 Mar. 2007"
        }
    }
}

const timeline = [
{
    date: "27 Jul. 1997 - 6 Mar. 1998",
    episodes: "22",
    actors: "Richard Dean Anderson, Michael Shanks, Amanda Tapping, Christopher Judge, Don S. Davis"
},{
    date: "26 Jun. 1998 - 12 Mar. 1999",
    episodes: "22",
    actors: "Richard Dean Anderson, Michael Shanks, Amanda Tapping, Christopher Judge, Don S. Davis"
},{
    date: "25 Jun. 1999 - 11 Feb. 2000",
    episodes: "22",
    actors: "Richard Dean Anderson, Michael Shanks, Amanda Tapping, Christopher Judge, Don S. Davis"
},{
    date: "30 Jun. 2000 - 23 Feb. 2001",
    episodes: "22",
    actors: "Richard Dean Anderson, Michael Shanks, Amanda Tapping, Christopher Judge, Don S. Davis"
},{
    date: "29 Jun. 2001 - 17 May. 2002",
    episodes: "22",
    actors: "Richard Dean Anderson, Michael Shanks, Amanda Tapping, Christopher Judge, Don S. Davis"
},{
    date: "7 Jun. 2002 - 19 Feb. 2003",
    episodes: "22",
    actors: "Richard Dean Anderson, Amanda Tapping, Christopher Judge, Don S. Davis, Corin Nemec"
},{
    date: "13 Jun. 2003 - 9 Mar. 2004",
    episodes: "22",
    actors: "Richard Dean Anderson, Michael Shanks, Amanda Tapping, Christopher Judge, Don S. Davis"
},{
    date: "9 Jul. 2004 - 22 Feb. 2005",
    episodes: "20",
    actors: "Richard Dean Anderson, Michael Shanks, Amanda Tapping, Christopher Judge"
},{
    date: "15 Jul. 2005 - 10 Mar. 2006",
    episodes: "20",
    actors: "Ben Browder, Michael Shanks, Amanda Tapping, Christopher Judge, Beau Bridges"
},{
    date: "14 Jul. 2006 - 13 Mar. 2007",
    episodes: "20",
    actors: "Ben Browder, Michael Shanks, Amanda Tapping, Christopher Judge, Beau Bridges, Claudia Black"
}
]


function createEpisodeElement(episodeNum,seasonNum) {
    let output = `<div class="episode" id="episode-${episodeNum}">
    <div class="card">
        <h3 class="card-title">${seasons[seasonNum][episodeNum]["title"]}</h3>
        <p class="card-text">${seasons[seasonNum][episodeNum]["description"]}<br><br>
        <i>${seasons[seasonNum][episodeNum]["date"]}</i></p>
        <div class="line"></div>

        <button class="card-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-chevron-up"></i>
        </button>
    </div>
</div>`

    return output
}

function createTimelineTab(num, date, episodes, actors) {
    let side
    if(num % 2 == 0) {side = 'left'}
    else {side = 'right'}

    let tab = `<div class="timeline-tab ${side}">
    <div class="content">
        <div class="season-color"><h2>Season ${num}</h2></div>
        <p><i>${date}<br>${episodes} Episodes</i><br><p class="cast" style="top:4px;display: none;"><br>${actors}</p></p>
    </div>
</div>`
    return tab
}

function createTimelineElement() {
    let output = ''
    console.log(timeline)
    timeline.forEach((value, index) => {
        let date = value["date"]
        let episodes = value["episodes"]
        let actors = value["actors"]
        output += createTimelineTab(index+1, date, episodes, actors)
    }
    )
    return output
}

function returnSeason(seasonNum) {
    try {
        const episodesDiv = document.querySelector('.episodes')
        episodesDiv.innerHTML = `<h1 class="season-text">Season ${seasonNum}<br>
        <br>
        </h1>
        <div class="list-row">
            <div class="column left"></div>
            <div class="column right"><div class="timeline"></div></div>
        </div>`
        for (const [key, value] of Object.entries(seasons[seasonNum])) {
        if (value != null) {
            const leftColumn = document.querySelector('.column.left')
            leftColumn.innerHTML += createEpisodeElement(key, seasonNum)
        }
        
    }
    document.querySelectorAll('.card').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active')
        })
    })
    document.querySelectorAll('.card').forEach(card => {
        card.style.borderLeft = `10px solid ${colors[seasonNum]}`
    })
    document.querySelector('.column.right .timeline').innerHTML = createTimelineElement()

    document.querySelectorAll('.timeline-tab').forEach((tab, i) => {
        tab.style.setProperty('--season-color', colors[i+1])
        if (i+1 === seasonNum) {
            tab.style.setProperty('--dot-color', "var(--blue-gray-two)")
        }
    })
    
    } catch(err) {
        console.log(err.message)
    }
    
}