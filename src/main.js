//Crear variables para modal//
const modal = document.getElementById('modal-box');
const flex = document.getElementById('modal-flex');
const openModal = document.getElementById('modal-help');
const closeModal = document.getElementById('close-modal');

//evento para abrir modal//
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
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
const buttonNavWelcome = document.getElementById('button-nav-welcome');
const buttonNavGBasics = document.getElementById('button-nav-gbasics');
const buttonNavChampions = document.getElementById('button-nav-champions');

//Variables para mostrar secciones//
const sectionGameBasics = document.getElementById('game-basics');
const sectionChampions = document.getElementById('champions');
const sectionWelcome = document.getElementById('welcome');

//Crear funciones que manipulen las secciones//

buttonNavWelcome.addEventListener('click', (e) => {
    sectionWelcome.classList.remove('hide');
    sectionGameBasics.classList.add('hide');
    sectionChampions.classList.add('hide');

});

buttonNavGBasics.addEventListener('click', (e) => {
    sectionWelcome.classList.add('hide');
    sectionChampions.classList.add('hide');
    sectionGameBasics.classList.remove('hide');
});

buttonNavChampions.addEventListener('click', (e) => {
    sectionChampions.classList.remove('hide');
    sectionGameBasics.classList.add('hide');
    sectionWelcome.classList.add('hide');
});


buttonMeetChampions.addEventListener('click', (e) => {
    sectionWelcome.classList.add('hide');
    sectionChampions.classList.remove('hide');
});

buttonGBStart.addEventListener('click', (e) => {
    sectionGameBasics.classList.add('hide');
    sectionChampions.classList.remove('hide');
});

//llamar a la data//
let data = LOL.data;



for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        let cards = `<p>${element.name}</p> <br>
        <p> <img src="${element.img}"></p> <br>
        <p>${element.title}</p> <br>
        <p>Roles: ${element.tags}</p> <br>
        <p>Armadura: ${element.stats.armor}</p> <br>
        <p>Daño de Ataque: ${element.stats.attackdamage}</p> <br>
        <p>Velocidad de Ataque: ${element.stats.attackspeedoffset}</p>
        <p>Velocidad de Movimiento: ${element.stats.movespeed}</p>`;
        // console.log(typeof cards);//
        const root = document.getElementById('cards-champions');
        root.insertAdjacentHTML('afterbegin', cards);

    }
}