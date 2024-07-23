const currentYear = new Date().getFullYear();
const hamburgerMenu = document.querySelector('.hamburger__menu');
const headerMenu = document.querySelector('.header__right');
const headerLink = document.querySelectorAll('.header__link');
const languageMenu = document.querySelector('.header__lang');

document.getElementById("current-year").innerHTML = currentYear;

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    headerMenu.classList.toggle('open');
});

languageMenu.addEventListener('click', () => {
       languageMenu.classList.toggle('open');
});

headerLink.forEach(item => {
    item.addEventListener('click', () => {
        if (hamburgerMenu.classList.contains('open')) {
            hamburgerMenu.classList.toggle('open');
            headerMenu.classList.toggle('open');
        } 
    });
});