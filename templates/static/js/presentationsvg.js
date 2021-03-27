const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const exitBtn = document.querySelector('.exit')

let activeSlide = parseInt(document.getElementById("active-img").innerHTML, 10)-1

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setActiveSlide()
    console.log(activeSlide)
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setActiveSlide()
})
setActiveSlide()

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

window.addEventListener('keydown',(event) => {
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        leftBtn.classList.add('active')
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slides.length - 1
        }

        setActiveSlide()
        
    } else if (event.code == "KeyD" || event.code == "ArrowRight") {
        rightBtn.classList.add('active')
        activeSlide++
        if (activeSlide > slides.length - 1) {
            activeSlide = 0
        }

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
        window.location.href='../presentation'}
})

window.addEventListener('wheel', (event) => {
    if (event["deltaY"] > 0) {
        activeSlide++
        if (activeSlide > slides.length - 1) {
            activeSlide = 0
        }

        setActiveSlide()
    } else if (event["deltaY"] < 0) {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slides.length - 1
        }

        setActiveSlide()
    }
})