"use strict";
import { goAboutUs, goComics, goGallery, goHome, goSearch } from "../../scripts/Utils/Links.js";
import { executeWithDelay } from "../../scripts/Utils/utils.js";

const navBar = document.querySelector('.nav__list');
const navHamburgerMenu = document.querySelector('.header__hamburger');

function toggleNavbar() {
  navBar.classList.toggle('nav__list--active');
  navHamburgerMenu.classList.toggle('header__hamburger--active');
}

navHamburgerMenu.addEventListener('click', () => {
  executeWithDelay(toggleNavbar);
});

document.querySelector('.header__icon').addEventListener('click', () => {
  executeWithDelay(goHome);
});

document.querySelector('#nav-home').addEventListener('click', () => {
  executeWithDelay(goHome);
});

document.querySelector('#nav-search').addEventListener('click', () => {
  executeWithDelay(goSearch);
});

document.querySelector('#nav-comics').addEventListener('click', () => {
  executeWithDelay(goComics);
});

document.querySelector('#nav-gallery').addEventListener('click', () => {
  executeWithDelay(goGallery);
});

document.querySelector('#nav-about').addEventListener('click', () => {
  executeWithDelay(goAboutUs);
});