'use strict'

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal-window');
const btnShow = document.querySelectorAll('.show-modal-window');

const closeModalWindow = () => {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

const showModalWindow = () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnShow.length; i++){
    btnShow[i].addEventListener('click', showModalWindow);
}

btnClose.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape" && !modalWindow.classList.contains('hidden')){
        closeModalWindow();
    }
})