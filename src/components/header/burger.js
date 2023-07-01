"use strict";

let burgergIcn = document.getElementsByClassName('btn-burger')[0],
    burgerPopUp = document.getElementsByClassName('burger')[0],
    navMenu = document.getElementsByClassName('burger-list__item');

const arrNavMenu = [...navMenu];

const body = document.body;

burgergIcn.addEventListener('click', addClassActive);

function addClassActive() {
    burgerPopUp.classList.toggle('burger--active');
    burgergIcn.classList.toggle('active-btn');
    body.classList.toggle('stop-scroll');
    body.classList.toggle('open-menu')
}

arrNavMenu.forEach((el) => el.addEventListener('click', clickCloseMenu));

function clickCloseMenu() {
    burgerPopUp.classList.remove('burger--active');
    burgergIcn.classList.remove('active-btn');
    body.classList.remove('stop-scroll');
}