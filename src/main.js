//Crear variables globales //
let data = LOL.data;
//console.log(data);//
let cards = '';
let newData = [];
const root = document.getElementById('box-cards');

//Variables de botones//
const buttonMeetChampions = document.getElementById('button-meet-champions');
const buttonGBStart = document.getElementById('button-gb-start');
const buttonNavWelcome = document.getElementById('button-nav-welcome');
const buttonNavGBasics = document.getElementById('button-nav-gbasics');
const buttonNavChampions = document.getElementById('button-nav-champions');

//variables select para filtrado//
const selectRoles = document.getElementById('filter-roles');
const selectAbility = document.getElementById('filter-ability');
const buttonAlphabetic = document.getElementById('button-alphabetic');

//Variables para mostrar secciones//
const sectionGameBasics = document.getElementById('game-basics');
const sectionChampions = document.getElementById('champions');
const sectionWelcome = document.getElementById('welcome');
const sectionChampionsFilter = document.getElementById('box-cards-filter');


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


//Crear funcion que muestre la data en pantalla//
const printDataObject = (data) => {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            newData.push(element);
                        cards = `<div id="cards-champions" class="card">
                        <div id="card-img" class="card-img"> <p><img src="${element.img}"></p></div> <br>
                        <div id="card-text" class="card-text"> 
                             <p>${element.name}</p> <br>
                             <p>${element.title}</p> <br>
                             <p>Roles: ${element.tags}</p> <br>
                             <p>Armadura: ${element.stats.armor}</p> <br>
                             <p>Daño de Ataque: ${element.stats.attackdamage}</p> <br>
                             <p>Velocidad de Ataque: ${element.stats.attackspeedoffset}</p> <br>
                             <p>Velocidad de Movimiento: ${element.stats.movespeed}</p>
                        </div> 
                        </div>`;
            root.insertAdjacentHTML('beforeend', cards);
        }
    }console.log(newData);  
}
let filter = (ev) => {
    const role = ev.target.value;
    const filterRole = window.dataManager.filterByRole(newData, role);
    root.innerHTML = '';
    printDataObject(filterRole);
};
selectRoles.addEventListener('change', filter);


//crear funcion que filtre/ordene la data por los 10 mejores de cada habilidad y la imprima en pantalla//
let sortAbility = (ev) => {
    const ability = ev.target.value;
    const filterAbility = window.dataManager.filterByAbility(newData, ability);
    printDataObject(filterAbility);
}


selectAbility.addEventListener('change', sortAbility);


//crear funcion que ordene la data alfabeticamente//
let sortAlphabetic = (ev) => {
    const order = ev.target;
    console-log(order);
    const orderAlphabetic = window.dataManager.orderByAlphabetic(newData, order);
    printDataObject(orderAlphabetic);
}
buttonAlphabetic.addEventListener('click', sortAlphabetic);

//funcion para filtrar por habilidades (los 10 mejores), tomando como base la funcion de filtrado

// // let filterAbility = (ev) => {
// //     const ability = ev.target.value;
// //     const filterAbility = window.dataManager.filterByAbility(newData, ability);
// //     root.innerHTML = '';
// //     printDataObject(filterAbility);
// // };


//funcion para filtrar por habilidades (los 10 mejores), usando for dentro de un for in.

// let bestAbility = (ev) =>{
//     const ability = ev.target.value;
//     let higthAbility=  [0,0,0,0,0,0,0,0,0,0];
//     //let higthAbility2=  [null,null, null, null, null, null, null, null, null, null];
//     for (index in newData) {
//         for (let i = 0; i < 10; i++) {
//             const element = higthAbility[i];
//             if(newData[index].stats[ability]>higthAbility[i]);
//                 //(newData[index]);
//                 higthAbility[i] = newData[index].stats[ability];
//             }
//         }       
    
//     root.innerHTML='';
//     printDataObject(higthAbility2);   
//     console.log("Habilidad seleccionada:"+ability+":"+higthAbility);
//     //return higthAbility;
       
// };
// selectAbility.addEventListener('change', bestAbility);
