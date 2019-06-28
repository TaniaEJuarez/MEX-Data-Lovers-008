//Crear variables para modal//
const modal = document.getElementById('modal-box');
const flex = document.getElementById('modal-flex');
const openModal = document.getElementById('modal-help');
const closeModal = document.getElementById('close-modal');

//evento para abrir modal//
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});
//evento para cerrar modal//
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
});

//evento para cerrar al tocar los costados//

window.addEventListener('click', (e) => {
    if (e.target == flex) {
        modal.style.display = 'none';
    }
});

//creando variables de botones//
const buttonMeetChampions = document.getElementById('button-meet-champions');
const buttonGBStart = document.getElementById('button-gb-start');
//Variables para mostrar secciones//
const showSectionGameBasics = document.getElementById('game-basics');
const showSectionChampions = document.getElementById('champions');
const hideSectionWelcome = document.getElementById('welcome');

//Crear funciones que manipulen las secciones//
buttonMeetChampions.addEventListener('click', (e) => {
    hideSectionWelcome.classList.add('hide');
    showSectionChampions.classList.remove('hide');
});

buttonGBStart.addEventListener

//const buttonMeetChampions = document.getElementById();//