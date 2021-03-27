const quotesEl = document.querySelector('.quotes')

const quotes = [{
    quote: "Alright, I'll be honest with ya, Bob. My name's not Kirk. It's Skywalker. Luke Skywalker.",
    author: "Jack O’Neill" 
},
{
    quote: "No, you're dark-side intergalactic encyclopedia salesmen. Unfortunately, the home office hasn't been quite upfront with you.",
    author: "Cameron Mitchell" 
},
{
    quote: "If I am remain in this body, I must shave my head.",
    author: "Teal’c" 
},
{
    quote: "Don’t let the door hit your ass on the way out.",
    author: "George Hammond" 
},
{
    quote: "It took us 15 years and three supercomputers to MacGyver a system for the gate on Earth.",
    author: "Samantha Carter" 
},
{
    quote: "Not until I’m dead… And sometimes not even then.",
    author: "Daniel Jackson" 
},
{
    quote: "What is an Oprah?",
    author: "Teal’c" 
},
{
    quote: "Maybourne, you are an idiot every day of the week. Why couldn’t you have taken one day off?",
    author: "Samantha Carter" 
},
{
    quote: "A serpent guard, a Horus guard, and a Setesh guard meet on a neutral planet. It is a tense moment. The serpent guard’s eyes glow. The Horus guard’s beak glistens. The Setesh guard’s nose drips.",
    author: "Teal’c" 
},
{
    quote: "I wish I could say I didn't owe anything to anyone. But the truth is, I wouldn't be standing here if it wasn't for the courage and support of each and every one of you. I hope I can be as good a leader as we've had in the past and as good as you deserve.",
    author: "Jack O'Neill"
},
{
    quote: "[entering Maybourne's very empty apartment] Have ya heard of IKEA?",
    author: "Jack O'Neill" 
},
{
    quote: "Well, that figures. Room full of gold and jewels, and Dr. Daniel Jackson finds the one book.",
    author: "Cameron Mitchell" 
},
{
    quote: "[after traveling to a world that looks exactly like Earth] Just when you think you're not in Kansas anymore, it turns out you are.",
    author: "Jack O'Neill" 
},
{
    quote: "If you once again try to harm me or one of my companions, my patience with you will expire.",
    author: "Teal'c" 
},
{
    quote: "Who makes a movie out of a series that only lasted three episodes?",
    author: "Daniel Jackson" 
},
{
    quote: "I see you're on that famous beer and mustard diet. How's that workin' out for ya?",
    author: "Jack O'Neill" 
},
{
    quote: "[as a puppet] Alright people, we created this multi-billion dollar facility under Cheyenne Mountain, so that we can use this thing. Anyone know how?",
    author: "George S. Hammond" 
},
{
    quote: "Never underestimate your audience. They're generally sensitive, intelligent people who respond positively to quality entertainment.",
    author: "Cameron Mitchell" 
},
{
    quote: `What's with the "worm" part?`,
    author: "Jack O'Neill" 
},
{
    quote: "Do you really think the best way to introduce the heroes of this story is to show them causing a massive catastrophe?",
    author: "Samantha Carter" 
},
{
    quote: "Captain Carter, Colonel Cromwell. He's come to rescue us. But I wouldn't count on it.",
    author: "Jack O'Neill" 
},
{
    quote: "You know there is a fine line between crazy-brave and crazy-crazy my friend, and you are walking it.",
    author: "Cameron Mitchell" 
},
{
    quote: "Though a candle burns in my house, there is nobody home.",
    author: "Jack O'Neill" 
},
{
    quote: "General O'Neill gave me the choice of any posting I wanted. I chose SG-1. That meant Colonel Carter, Teal'c and yourself, not two letters a dash and a number.",
    author: "Cameron Mitchell" 
},
{
    quote: "I remember something. There's a man. He's bald and wears a short sleeved shirt. And somehow he's very important to me. I think his name is... Homer. ",
    author: "Jack O'Neill" 
},
{
    quote: "Detonating the largest warhead ever built by man is not exactly the historical footnote I had in mind.",
    author: "Cameron Mitchell" 
},
{
    quote: "Hey, if you'd been listening, you'd know that Nintendos pass through everything.",
    author: "Jack O'Neill" 
},
{
    quote: "You could fit every pyramid on Earth inside this thing and still have room to spare.",
    author: "Daniel Jackson" 
},
{
    quote: "Carter, if I ever get the urge to help anybody again, feel free to give me a swift kick.",
    author: "Jack O'Neill" 
},
{
    quote: "On Chulak, when a great warrior retires from the field of battle, it is customary to sing a song of lament. [pause] Fortunately we are not on Chulak. ",
    author: "Teal'c" 
},
{
    quote: "Major, next time Daniel gets the urge to help someone, shoot him.",
    author: "Jack O'Neill" 
},
{
    quote: "I'm enjoying their style. Shoot first, send flowers later.",
    author: "Jack O'Neill" 
},
{
    quote: "[looking in O'Neill's refrigerator] Are you conducting some sort of scientific experiment, O'Neill?",
    author: "Teal'c" 
},
{
    quote: "[Opening a door revealing just a blank wall] Damn cost cutting.",
    author: "Jack O'Neill" 
}]


function randomIndex(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function generateQuoteEl() {
    let quote = randomIndex(quotes)
    let el = `<p class="quote-text"><i class="fas fa-quote-left"></i> ${quote["quote"]} <i class="fas fa-quote-right"></i></p>
<div class="quote-author"><h3>- ${quote["author"]}</h3></div>
`
    quotesEl.innerHTML = el
    return quotes.indexOf(quote)
}

let index = generateQuoteEl()

function nextQuoteEl() {
    let quote = quotes[index]
    if(index>quotes.length-1){
        index = 0
    } else {index++}

    let el = `<p class="quote-text"><i class="fas fa-quote-left"></i> ${quote["quote"]} <i class="fas fa-quote-right"></i></p>
    <div class="quote-author"><h3>- ${quote["author"]}</h3></div>
    `
    quotesEl.innerHTML = el
}

setInterval(nextQuoteEl, 10000)