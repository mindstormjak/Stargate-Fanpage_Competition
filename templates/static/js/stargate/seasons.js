const panels = document.querySelectorAll('.panel');
const active = document.querySelectorAll('.panel.active')

function calculateFlex(panel) {
    
    if ((2- (window.innerHeight / 977)) > 1) {
        let new_flex = (2- (window.innerHeight / 977)) * 14
        panel.style.flex = `${new_flex}%`
    }else if(2- (window.innerHeight / 977) === 1) {
        panel.style.flex = `10%`
    } else if (2- (window.innerHeight / 977) < 1) {
        panel.style.flex = `${(2- (window.innerHeight / 977)) * 18}%`
    }
}

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
        calculateFlex(panel)
})}

function panelOnClick (i, panel) {
    removeActiveClass();
    returnSeason(i);
    panel.classList.add('active');
    panel.style.flex = `40%`
    checkFooter();
} 

panels.forEach((panel, i) => {
    panel.addEventListener('click', () => {
        // let new_flex = (2- (window.innerHeight / 977)) * 40
        panelOnClick(i+1, panel)
    })
})

window.addEventListener('resize',() => {
    panels.forEach((panel) => {
        if ((panel.classList.contains('active')) != true) {
            calculateFlex(panel)
        }
    })
});