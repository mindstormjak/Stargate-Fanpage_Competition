const charactersDescription = {
    1: "<b>Jack O'Neill</b><br><br><i>Jonathan J. O'Neill, also known as John or, most commonly, Jack, is a Lieutenant General, in the United States Air Force, who served seven years in the Stargate Program, formerly as a Colonel and also as the leader of Stargate Command's main team, SG-1.<br><br>O'Neill was promoted to Brigadier General and became the new Commanding officer of the SGC, replacing Lt. General George S. Hammond.</i><br><br>The role of Jack O'Neill is played by <b>Richard Dean Anderson</b> an American actor and Executive Producer of Stargate SG-1.",
    2: "<b>Samantha Carter</b><br><br><i>Samantha Carter is an astrophysicist, engineer, and pilot as well as a Colonel in the United States Air Force who played a key role in establishing the Stargate Program before being assigned to Stargate Command's flagship team, SG-1 where she was the second-in-command for eight years before becoming the commanding officer.<br><br>She served at SG-1 for ten years and during that time she saved her own life and those of her colleagues during various missions as a member of SG-1.</i><br><br>The role of Samantha Carter is played by <b>Amanda Tapping</b> an English-born Canadian actress, producer and director.",
    3: "<b>Daniel Jackson</b><br><br><i>Daniel Jackson, Ph.D., is an archaeologist and linguist from Earth, and a member of Stargate Command's flagship team, SG-1.<br>Jackson played a critical role in the United States Air Force's Stargate project by determining the purpose of the gates' chevrons, which enabled the project to navigate to specific locations.<br><br>He is also a veteran member of the team, having served on SG-1 longer than any of its current members.</i><br><br><br>The role of Daniel Jackson is played by <b>Michael Shanks</b> a Canadian actor, writer and director.",
    4: "<b>Teal'c of Chulak</b><br><br><i>Teal'c of Chulak [pronounced ˈtiːəlk], sometimes referred to as 'Shol'va' (traitor) by those allied with the Goa'uld, is a Jaffa from the planet Chulak who serves as a member of Stargate Command's flagship reconnaissance team SG-1.<br><br>Prior to this, he served the Goa'uld and System Lord Apophis as his First Prime.</i><br><br><br><br>The role of Teal'c of Chulak is played by <b>Christopher Judge</b> an American actor and voice actor.<br>The Judge also played Kratos in the video game God of War.",
    5: "<b>George S. Hammond</b><br><br><i>George S. Hammond was a former Lieutenant General in the United States of America, later to be promoted, he is most notable for his command of Stargate Command. Hammond was on the verge of retiring from this command when the Goa'uld System Lord Apophis launched an attack on Earth in 1997.<br><br>In the aftermath, Hammond became the commanding officer of the newly reopened SGC, serving in the role for the first seven years of its existence.</i><br><br><br>The role of George S. Hammond is played by <b>Don S. Davis</b> an American character actor.",
    6: "<b>Cameron Mitchell</b><br><br><i>Cameron Mitchell, or Cam is a Colonel in the United States Air Force and the current leader of SG-1, since 2005, taking command from Lt. Colonel Samantha Carter. Given the callsign 'Shaft', Mitchell flew an F-302 fighter-interceptor, leading the Tau'ri forces in the Battle of Antarctica in 2004.<br><br>After making a full recovery, he requested to join SG-1, only to discover the other members had all left the unit to follow different paths. However he got the team back together.</i><br><br>The role of Cameron Mitchell is played by <b>Ben Browder</b> an American actor, writer and film director.",
    7: "<b>Vala Mal Doran</b><br><br><i>Vala Mal Doran is a thief, a con artist, and former Goa'uld host. Originally something of a hindrance at times, she later became a help and a small asset to Stargate Command while regularly interacting with members of the SGC's flagship team, SG-1.<br><br>She ultimately proved her courage when during the Battle of Kallana in 2005, she risked her life to destroy a Supergate before disappearing altogether.</i><br><br>The role of Vala Mal Doran is played by <b>Claudia Black</b> an Australian actress and voice actress who is also known for her roles in video games such as Uncharted or Gears of War.",
    8: "<b>Henry Landry</b><br><br><i>Henry 'Hank' Landry is a Major General in the United States Air Force and Commanding officer of Stargate Command since Major General Jack O'Neill, later promoted, was made head of the Office of Homeworld Security in the year 2005.<br><br>In addition to being Stargate Command's C.O, Landry is also the father of the SGC's Chief Medical Officer, Dr. Carolyn Lam. Upon that Landry is fond of quoting famous people from history.</i><br><br><br>The role of Henry Landry is played by <b>Beau Bridges</b> an American actor and director."
}

const characters = document.querySelectorAll('.character')

characters.forEach((character, index) => {
    character.addEventListener("click", () => {
        if (character.classList.contains("active")) {
            removeActive()
        } else {
            removeActive()
            character.classList.toggle('active')
        }
    })
    try {
        let card = document.createElement("div")
        card.classList.add('card')
        let text = document.createElement("p")
        text.innerHTML = charactersDescription[index+1]
        card.appendChild(text)
        character.appendChild(card)
    }catch {}
})

function removeActive() {
    document.querySelectorAll('.character').forEach((character) => {
        character.classList.remove('active')})
}

function changeGrid() {
    const whiteSpace = document.querySelectorAll('.whitespace.betweeen')
    if (window.innerWidth < 1500) {
        whiteSpace.forEach((space) => {
            space.style.display = 'none'
        })
    }else {
        whiteSpace.forEach((space) => {
            space.style.display = 'block'
        })
    }
}

window.addEventListener('resize', () => {
    changeGrid()
})

changeGrid()