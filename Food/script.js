const listIcon = document.querySelectorAll('.header_icon i')
console.log({ listIcon })

let posIconActive = 0
// listIcon.forEach((x, idx) => {
//     if (x == iconActive) posIconActive = idx
// })
console.log(posIconActive)
setInterval(() => {
    const iconActive = document.querySelector('.header_icon i.active')
    if (posIconActive === listIcon.length - 1) {
        posIconActive = 0
    }
    posIconActive++
    iconActive.classList.remove('active')
    listIcon[posIconActive].classList.add('active')
}, 2000)

const btnNav = document.querySelector('.navbutton')
const nav = document.querySelector('.navbar')
btnNav.addEventListener('click', () => {
    nav.classList.toggle('active')
})
