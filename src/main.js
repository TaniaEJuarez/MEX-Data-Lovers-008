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
//const filter = document.getElementById('filter'); (borre el boton si se usa crear nuevo)//
const selectRoles = document.getElementById('filter-roles');



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
            root.insertAdjacentHTML('afterbegin', cards);
        }
    }
}
let filtrar = (ev) => {
    const role = ev.target.value;
    const filterRole = window.dataManager.filterByRole(newData, role)
    root.innerHTML = '';
    printDataObject(filterRole);
};
selectRoles.addEventListener('change', filtrar);


/*{
    let filterRole = NewData.filter(index => index.tags == 'Assassin')
    root.innerHTML = '';
    printDataObject(filterRole);
    or(index => index.tags == 'Fighter')
    root.innerHTML = '';
    printDataObject(filterRole);
    or(index => index.tags == 'Mage')
    root.innerHTML = '';
    printDataObject(filterRole);
    or(index => index.tags == 'Marksman')
    root.innerHTML = '';
    printDataObject(filterRole);
    or(index => index.tags == 'Support')
    root.innerHTML = '';
    printDataObject(filterRole);
    or(index => index.tags == 'Tank')
    root.innerHTML = '';
    printDataObject(filterRole);
});*/
/*filter.addEventListener('click', () => {
    const miiNombre = newData.filter(index => index.name == 'Zed')
        // printDataObject(miiNombre)
    let data1 = { data: miiNombre[0] }
    root.innerHTML = '';
    printDataObject(data1)
})*/

//document.getElementById('filter-ability').insertAdjacentHTML('afterbegin',) = window.data.filter;//

//console.log(data);/

/*selectRoles.addEventListener('change', () => {
    console.log(newData);
    let selectRolesValue = document.getElementById('filter-roles').value;
    sectionChampionsFilter.classList.remove('hide');
    result = window.LOL.filterData(newData, selectRolesValue);
    console.log(selectRolesValue);
});*/