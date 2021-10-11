/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('.nav__menu'),
    navClose = document.querySelector('.nav__button'),
    navToggle = document.querySelector('.nav__toggle')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        console.log('add show toggle')
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        console.log('add close toggle')
        navMenu.classList.remove('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.querySelector('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((item) => item.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
