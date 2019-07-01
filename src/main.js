//Crear variables para modal//
const modal = document.getElementById('modal-box');
const flex = document.getElementById('modal-flex');
const openModal = document.getElementById('modal-help');
const closeModal = document.getElementById('close-modal');
const filtrar = document.getElementById('filtrar')
let data = LOL.data;
const root = document.getElementById('box-cards');

const newData = [];


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

buttonNavWelcome.addEventListener('click', () => {
    sectionWelcome.classList.remove('hide');
    sectionGameBasics.classList.add('hide');
    sectionChampions.classList.add('hide');

});

buttonNavGBasics.addEventListener('click', () => {
    sectionWelcome.classList.add('hide');
    sectionChampions.classList.add('hide');
    sectionGameBasics.classList.remove('hide');
    sectionGameBasics.style.display = block;
});

buttonNavChampions.addEventListener('click', () => {
    sectionChampions.classList.remove('hide');
    sectionGameBasics.classList.add('hide');
    sectionWelcome.classList.add('hide');
    printDataObject(data)
});


buttonMeetChampions.addEventListener('click', (e) => {
    sectionWelcome.classList.add('hide');
    sectionGameBasics.classList.add('hide');
    sectionChampions.classList.remove('hide');
    printDataObject(data)
});

buttonGBStart.addEventListener('click', (e) => {
    sectionGameBasics.classList.add('hide');
    sectionWelcome.classList.add('hide');
    sectionChampions.classList.remove('hide');
});

//llamar a la data//


const printDataObject = (data) => {
    
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        newData.push(element)
        let cards = `<div id="cards-champions" class="card">
        <p>${element.name}</p> <br>
        <p> <img src="${element.img}"></p> <br>
        <p>${element.title}</p> <br>
        <p>Roles: ${element.tags}</p> <br>
        <p>Armadura: ${element.stats.armor}</p> <br>
        <p>Daño de Ataque: ${element.stats.attackdamage}</p> <br>
        <p>Velocidad de Ataque: ${element.stats.attackspeedoffset}</p> <br>
        <p>Velocidad de Movimiento: ${element.stats.movespeed}</p>
        </div>`;
        // console.log(typeof cards);//
        root.insertAdjacentHTML('afterbegin', cards);
    }
}


}




filtrar.addEventListener('click', () => {
    const miiNombre = newData.filter(index  => index.name == 'Zed')
    // printDataObject(miiNombre)
    let data1 = {data: miiNombre[0]}
    root.innerHTML = '';
printDataObject(data1)
})