// abre e fecha o menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

// quando clicar em um item no menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// colocar sombra no header quando der scroll
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if(window.scrollY >= navHeight) {
        // maior que a altura do header
        header.classList.add('scroll')
    } else {
        // meno que a altura do header
        header.classList.remove('scroll')
    }
})

// Testimonials carousel Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true,
  });

// ScrollReveal: mostar elementos quando der scroll na pagination
const  scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
   `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, { interval: 100 }
);