let modal = document.querySelector('.modal'),
    closeButton = document.getElementsByClassName('modal-callback__close')[0];

document.addEventListener('click', closeModal);

function closeModal(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}

closeButton.addEventListener('click', () => modal.classList.remove('active'));