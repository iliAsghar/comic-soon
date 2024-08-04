"use strict";

const navBar = document.querySelector('.nav__list');
const navHamburgerMenu = document.querySelector('.header__hamburger');

function toggleNavbar() {
  navBar.classList.toggle('nav__list--active');
  navHamburgerMenu.classList.toggle('header__hamburger--active');
}

navHamburgerMenu.addEventListener('click', toggleNavbar);