"use strict";

let tabs = document.getElementsByClassName('products-tabs__item'),
    contentBody = document.getElementsByClassName('products-contents__item'),
    contentImg = document.getElementsByClassName('products-img');

const arrTabs = [...tabs];

arrTabs.forEach(element => element.addEventListener('click', showTab));

function showTab(event) {
    event.preventDefault();
    
    let addActive = i => {
        arrTabs[i].classList.add('active-tab');
        contentBody[i].classList.add('active');
        contentImg[i].classList.add('active');
    }
    
    let removeActive = i => {
        arrTabs[i].classList.remove('active-tab');
        contentBody[i].classList.remove('active');
        contentImg[i].classList.remove('active');
    }

    arrTabs.forEach((element, i) => element === this ? addActive(i) : removeActive(i));
}