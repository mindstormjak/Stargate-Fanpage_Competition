const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const exitBtn = document.querySelector('.exit')
const downloadBtn = document.querySelector('.download')

let activeSlide = parseInt(document.getElementById("active-img").innerHTML, 10)-1

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
    console.log(activeSlide)
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()
setActiveSlide()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    let url = `../../static/images/stargate_galery_${activeSlide}.jpg`
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
    if (activeSlide < 9) {
        url = `../../static/images/stargate_galery_0${activeSlide}.jpg`
    }
    downloadBtn.href = url
}

window.addEventListener('keydown',(event) => {
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        leftBtn.classList.add('active')
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slides.length - 1
        }
        setBgToBody()
        setActiveSlide()
        
    } else if (event.code == "KeyD" || event.code == "ArrowRight") {
        rightBtn.classList.add('active')
        activeSlide++
        if (activeSlide > slides.length - 1) {
            activeSlide = 0
        }
        setBgToBody()
        setActiveSlide()
        
    }else if (event.code == "Escape") {
        exitBtn.classList.add('active')}
})

window.addEventListener('keyup', (event) => {
    try {
        leftBtn.classList.remove('active')
    } catch {}
    try {
        rightBtn.classList.remove('active')
    } catch {}
    if (event.code == "Escape") {
        exitBtn.classList.remove('active')
        window.location.href='../galery'}
})

window.addEventListener('wheel', (event) => {
    if (event["deltaY"] > 0) {
        activeSlide++
        if (activeSlide > slides.length - 1) {
            activeSlide = 0
        }
        setBgToBody()
        setActiveSlide()
    } else if (event["deltaY"] < 0) {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slides.length - 1
        }
        setBgToBody()
        setActiveSlide()
    }
})