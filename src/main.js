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
//Variables de select de filtrado//
const selectRoles = document.getElementById('filter-roles');
const selectAbility = document.getElementById('filter-ability');


//Variables para mostrar secciones//
const sectionGameBasics = document.getElementById('game-basics');
const sectionChampions = document.getElementById('champions');
const sectionWelcome = document.getElementById('welcome');


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
    printDataObject(data);
});


buttonMeetChampions.addEventListener('click', () => {
    sectionWelcome.classList.add('hide');
    sectionGameBasics.classList.add('hide');
    sectionChampions.classList.remove('hide');
    printDataObject(data);
});

buttonGBStart.addEventListener('click', () => {
    sectionGameBasics.classList.add('hide');
    sectionWelcome.classList.add('hide');
    sectionChampions.classList.remove('hide');
});


//Crear funcion que muestre la data en pantalla//
const printDataObject = (data) => {
    newData = [];
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
            root.insertAdjacentHTML('afterbegin', cards);
        }
    }
};

//Crear función que  reciba el valor seleccionado y ejecute la funcion de filtrado por rol y la imprima en pantalla//
let filter = (ev) => {
    const role = ev.target.value;
    const filterRole = window.dataManager.filterByRole(newData, role);
    root.innerHTML = '';
    printDataObject(filterRole);
};
selectRoles.addEventListener('change', filter);

//Crear función que  reciba el valor seleccionado y ejecute la funcion que filtra la data por los mejores de cada habilidad e imprima en pantalla los mejores 10//
let sortAbility = (ev) => {
    const ability = ev.target.value;
    const filterAbility = window.dataManager.filterByAbility(newData, ability);
    let slice = filterAbility.slice(0, [10]);
    // console.log(slice);
    root.innerHTML = '';
    printDataObject(slice);
};

selectAbility.addEventListener('change', sortAbility);



// // let filterAbility = (ev) => {
// //     const ability = ev.target.value;
// //     const filterAbility = window.dataManager.filterByAbility(newData, ability);
// //     root.innerHTML = '';
// //     printDataObject(filterAbility);
// // };


//funcion para filtrar por habilidades (los 10 mejores)
// let bestAbility = (ev) => {
//     const ability = ev.target.value;
//     let higthAbility = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//     for (index in newData) {
//         for (let j = 0; j < 10; j++) {
//             const element = higthAbility[j];
//             if (newData[index].stats[ability] > higthAbility[j]) {
//                 higthAbility[j] = newData[index].stats[ability];
//                 console.log(higthAbility);
//             }
//         }
//     }
//     console.log("Habilidad seleccionada:" + ability + ":" + higthAbility);
//         return higthAbility;

// }

// selectAbility.addEventListener('change', bestAbility);

// root.innerHTML = '';
// printDataObject(ability);
