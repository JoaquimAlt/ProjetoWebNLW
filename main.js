function onScroll(){
    if (scrollY > 0){
    navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll') 
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function removeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal('#home, #home img, #home .caixa_grande, #services, #services header, #services .card, #about, #about header, #about .content, #about img');