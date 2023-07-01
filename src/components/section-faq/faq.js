"use strict";

let accordionItems = document.querySelectorAll('.accordion-item');

for (let elem of accordionItems) {
    elem.addEventListener('click', showTab); 

    function showTab() {
        this.classList.toggle('accordion-item--show');
    }
}