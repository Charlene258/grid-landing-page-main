const menuBtn = document.querySelector('.menu-btn');
const menuIcon = menuBtn.querySelector('img');
const navDrawer = document.querySelector("#primary-navigation");

menuBtn.addEventListener('click', () => {
    const isOpen = navDrawer.classList.toggle('is-open');

    menuBtn.setAttribute('aria-expanded', isOpen);

    menuIcon.src = isOpen ? './assets/images/icon-close.svg' : './assets/images/icon-menu.svg';
})