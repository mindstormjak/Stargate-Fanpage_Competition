function setTitle(newTitle) {
    // Sets the title in header
    const title = document.title
    if (newTitle !== title) {
        document.title = newTitle
    }
}

function addCSS (fileName) {
    // Adds CSS for the page
    let head = document.head;
    let link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;

    head.appendChild(link);
}

function addFavicon(fileName) {
    // Adds the correct favicon for the page
    let head = document.head;
    let link = document.createElement("link");

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = fileName;

    head.appendChild(link);
}

function prepareHead(title, favicon, css) {
    // Inserts needed things into the header, like: title, css, favicon
    setTitle(title)
    addCSS(css)
    addFavicon(favicon)
}

function scrollToTop() {
    // Scrolls to the top of the webpage
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    })
}

function scrollToElement(elementTag) {
    // Scrolls the page to the top of given element
    const element = document.querySelector(elementTag)
    let rect = element.getBoundingClientRect()
    window.scroll({
        top: rect.top+ window.scrollY - 65,
        left: 0,
        behavior: 'smooth'
    });
}

function checkVisible(elm) {
    // Looks if element is visible for the user
    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function checkPosition() {
    // Checks position for ToTopButton and Footer so they are positioned correctly
    let windowY = window.scrollY
    let btnToTop = document.querySelector('.btnToTop')
    if (windowY < 500) {
        btnToTop.style.opacity = 0
        btnToTop.disabled = true
    } else {
        btnToTop.style.opacity = 1
        btnToTop.disabled = false
    }
    let footer = document.querySelector('.stargate-footer')
    if (checkVisible(footer)) {
        document.querySelector('.btnToTop').style.bottom = '55px'
    } else{
        document.querySelector('.btnToTop').style.bottom = '20px'
    }
}

function checkCurrentPage() {
    // Finds the currently selected page to show it under the button in nav bar
    let url = document.URL.replace('//','/').split('/')
    let page = url[url.length - 1]
    if (page === 'stargate') {
        page = 'home'
    }
    let id = `nav-button-${page}`
    let buttons = document.querySelectorAll('.nav-button')
    buttons.forEach((button) => {
        if(button.id == id) {
            button.classList.add('current')
        }
    })
}

function title () {
    // Inserts the title into it's placeholder
    document.querySelector('.title-placeholder').innerHTML = `<div class="title">
    <div class="bg"><img src="../../../static/images/stargate_sg_logo.png" style="position:absolute;top:32.5px;left:40px;width:540px;height:52.5px;"></div>
    </div>`
}

function ToTopButton () {
    // Inserts the ToTopButton into the placeholder
    document.querySelector('.totop-placeholder').innerHTML = ` <button class='btnToTop' onclick="scrollToTop();" style="opacity:0"><i class="fas fa-arrow-circle-up"></i></button>`
    window.addEventListener('scroll', checkPosition);
}

function NavMenuOne() {
    // Inserts the nav bar into the placeholder, version 1
    document.querySelector('.nav-placeholder').innerHTML=`<div class="stargate-nav"><nav>
    <p><a href="../stargate"> Home</a></p>
    <p><a href="../stargate/seasons"> Seasons</a></p>
    <p><a href="../stargate/characters"> Characters</a></p>
    <p><a href="../stargate/galery"> Galery</a></p>
    <p><a href="../stargate/about"> About</a></p>
    <p><a href="../stargate/contact"> Contact</a></p>
    <p><a href="../stargate" disabled></a></p>
    </nav></div>`
}

function NavMenuTwo() {
    // Inserts the nav bar into the placeholder, version 2
    document.querySelector('.nav-placeholder').innerHTML=`<div class="stargate-nav"><nav>
    <button class="nav-button" id="nav-button-home" onclick="window.location.href='../stargate'">Home</button>
    <button class="nav-button" id="nav-button-seasons" onclick="window.location.href='../stargate/seasons'">Seasons</a></button>
    <button class="nav-button" id="nav-button-characters" onclick="window.location.href='../stargate/characters'">Characters</a></button>
    <button class="nav-button" id="nav-button-galery" onclick="window.location.href='../stargate/galery'">Galery</a></button>
    <button class="nav-button" id="nav-button-about" onclick="window.location.href='../stargate/about'">About</a></button>
    <button class="nav-button" id="nav-button-contact" onclick="window.location.href='../stargate/contact'"> Contact</a></button>
    <button disabled><a disabled></a></button>
    </nav></div>`
}

function Footer () {
    // Inserts the footer into the placeholder
    document.querySelector('.footer-placeholder').innerHTML =`<div style="width: 100vw;height: 5vh;background-color: white;"></div>
    <div class="stargate-footer">
        <div class="text-move">
            <p>©2021 Designed & programmed by&nbsp<a href="../stargate/contact">Jakub Krčmárik</a> &nbsp&nbsp| &nbsp&nbspStargate logo and pictures are property of&nbsp<a target="_blank" rel="noopener noreferrer" href="https://www.mgm.com/" >MGM</a></p>
        </div>
    </div>`
    let hasScrollbarVar = window.innerWidth > document.documentElement.clientWidth
    if ( hasScrollbarVar) {
        document.querySelector('.stargate-footer').style.position = "relative"
    } else {
        document.querySelector('.stargate-footer').style.position = "fixed"
    }
    document.querySelector('.stargate-footer').style.bottom = 0
    document.querySelector('.stargate-footer').style.left = 0
    window.addEventListener('resize', checkFooter)
}

function checkFooter() {
    let hasScrollbarVar = window.innerWidth > document.documentElement.clientWidth
    if (hasScrollbarVar) {
        document.querySelector('.stargate-footer').style.position = "relative"
    } else {
        document.querySelector('.stargate-footer').style.position = "fixed"
    }
}



function StargateAutoElement () {
    // Adds all needed things for nearly every page
    Head()
    title()
    NavMenuTwo()
    checkCurrentPage()
    ToTopButton()
    Footer()
}

function Head() {
    // Adds only the needed content for header
    prepareHead("Stargate Fanpage", "../../../static/images/favicon.gif", "../../../static/css/autoElement.css") //normal: "../../../static/images/favicon.ico"  |  test icon: "https://static.wikia.nocookie.net/stargate/images/6/64/Favicon.ico/revision/latest?cb=20210208081849"
}


// This is template for every placeholder
/* <div class="title-placeholder"></div>
<div class="nav-placeholder"></div>
<div class="totop-placeholder"></div>
<div class="footer-placeholder"></div>
<script src="../static/js/autoElement.js"></script> */