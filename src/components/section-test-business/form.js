"use strict";

let step = document.querySelectorAll('.question-form-step'),
    buttonNext = document.querySelector('.question-form-footer__buttonNext'),
    buttonPrev = document.querySelector('.question-form-footer__buttonPrev'),
    buttonSubmit = document.querySelector('.question-form-footer__buttonSubmit'),
    currentStep = 0;

function changeStep() {
    
    let addActive = i => { 
        step[i].classList.add('active');
    }
    
    let removeActive = i =>{
        step[i].classList.remove('active');
    }

    step.forEach((el, i) => i === currentStep ? addActive(i): removeActive(i));
}

function nextStep() {

if ( currentStep < step.length - 1 ) {
    currentStep++;
    changeStep();
    showButtonPrev();
    showButtonSubmit();
    hideButtonNext();
}
}

function prevStep() {

if ( currentStep > 0 ) {
    currentStep--;
    changeStep();
    showButtonPrev();
    showButtonSubmit();
    hideButtonNext();
}
}

function showButtonPrev() {
    return currentStep >= 1 ? buttonPrev.classList.add('active') : buttonPrev.classList.remove('active');
}

function showButtonSubmit() {
    return currentStep === step.length - 1 ? buttonSubmit.classList.add('active') : buttonSubmit.classList.remove('active');
}

function hideButtonNext() {
    return currentStep === step.length - 1 ? buttonNext.style.display = 'none' : buttonNext.style.display = 'block';
}

buttonNext.addEventListener('click', nextStep);
buttonPrev.addEventListener('click', prevStep);