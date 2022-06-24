const sliders = document.querySelectorAll('.slide')
const mobile = document.getElementById('mobile')
const desktop = document.getElementById('desktop')
const demos= document.querySelectorAll('.image')
const previews = document.querySelectorAll('.preview')
const infos = document.querySelectorAll('.info')
const hamburger = document.getElementById('open')
const close = document.getElementById('close')
const mobileNav = document.getElementById('mobile-nav')
const links = document.querySelectorAll('a')
const submit = document.getElementById('submission')
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -250px 0px'
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {

            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
           
        }
    })
}, appearOptions)

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})
// mobile.addEventListener('click', () => {
//         console.log('hi')
//         previews.forEach(preview => {
//             preview.style.display = 'none';
//         })
//         infos.forEach(info => {
//             info.style.display = 'none';
//         })
//         demos.forEach(demo => {
//             demo.style.display = 'flex';
//         })
    
// })
hamburger.addEventListener('click', () => {
    close.style.display = 'flex'
    mobileNav.style.display = 'flex'
    hamburger.style.display = 'none'
    mobileNav.classList.add('responsive')
    console.log('hi')
})
close.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    close.style.display = 'none'
    hamburger.style.display = 'flex'
})

links.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.style.display = 'none'
        close.style.display = 'none'
        hamburger.style.display = 'flex'
    })
})
submit.addEventListener('click', () => {
    // submit.setAttribute('disabled', '')
    submit.style.display = 'none'
})


submit.addEventListener('click', () => {
    // submit.setAttribute('disabled', '')
    submit.style.display = 'none'
})

