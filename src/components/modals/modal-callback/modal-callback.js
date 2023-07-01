let buttons = document.querySelectorAll('.deliver-body__button, .products-block__button, .welcome-col__button, .algorithm-wrapper__button, .footer-right__button, .barrel-body__button, .contact__img'),
    modal = document.querySelector('.modal');

for (let elem of buttons) {
    elem.addEventListener('click', () => {
        modal.classList.add('active');
    })
}