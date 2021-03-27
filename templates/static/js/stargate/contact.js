const submitBtnText = ["Be cool and send it through the Stargate!",
"Send it through the wormhole!",
"Send it by the old fashioned email!",
"Send it by the super-fast Slovak Post ;)",
"Send it by a pigeon. Answer not guaranteed!",
`Send it by the paper plane! <i class="fas fa-paper-plane"></i> <i class="fas fa-paper-plane"></i> <i class="fas fa-paper-plane"></i>`]

const messagePlaceholder = ["Message"]

const namePlaceholder = ["Jack O'Neill", "Samantha Carter", "Daniel Jackson", "Teal'c of Chulak"]

function randomIndex(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

let CHname = randomIndex(namePlaceholder)
document.getElementById('name').placeholder = CHname
CHname = CHname.toLowerCase().replace(' ','.').replace("'",'').replace(' ','.')
let emailPlaceholder = `${CHname}@sgc.com`
document.getElementById('email').placeholder = emailPlaceholder
document.getElementById('message').placeholder = randomIndex(messagePlaceholder)
let submitText = `<i class="fas fa-paper-plane"></i>&nbsp ${randomIndex(submitBtnText)}`
document.getElementById('submit').innerHTML = submitText

const img_container = document.querySelector('.img-container')
let imgIndex = 1

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function nextImg() {
    if(imgIndex > 2){
        imgIndex = 1
    } else {imgIndex++}
    let img = document.createElement('img')
    img.src= `../static/images/contact_sgc${imgIndex}.png`
    img.style.opacity = 0
    img.style.height = '65vh'
    img.style.width = 'auto'
    document.querySelector('.img-container img').style.opacity = 0
    sleep(1100).then(() => {
        img_container.innerHTML = ''
        img_container.appendChild(img)
        document.querySelector('.img-container img').style.opacity = 1
    })
}

setInterval(nextImg, 10000)