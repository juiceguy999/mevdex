const btn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('menu')
const nav = document.getElementById('nav')
const navContainer = document.querySelector('.header__container')
const login = document.querySelector('.header__right')
const logo = document.querySelector('.header__logo-text')

function navToggle(){
    btn.classList.toggle('open')
    mobileMenu.classList.toggle('hidden')
    nav.classList.toggle('header__inner--active')
    navContainer.classList.toggle('header__container--active')
    login.classList.toggle('header__right--active')
    logo.classList.toggle('header__logo-text--hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)