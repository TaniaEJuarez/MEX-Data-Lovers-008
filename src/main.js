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


// Buscador para la sección de game-basics
const glosarys = [
    {word: '<strong>Ace:</strong> Todos los enemigos han muerto, y están esperando su tiempo para renacer. Ideal para empujar las líneas y atacar las Torretas o el Nexo Enemigo.'},
    {word: '<strong>ADC:</strong> (Attack Damage Carry). Es un campeón tirador que logra hacer el mayor daño en el menor tiempo.'},
    {word: '<strong>AoE:</strong> Area of Effect (Area de Efecto). Una habilidad que es capaz de golpear un área en lugar de un solo objetivo.'},
    {word: '<strong>AP:</strong> Ability Power (poder de habilidad). El atributo que mejora la efectividad de algunas habilidades.'},
    {word: '<strong>Aura:</strong> Una pasiva que no solo afecta al Campeón que la lleva, sino también a Campeones en su rango de trabajo. Una pasiva para compartir.'},
    {word: '<strong>BD / Backdoor:</strong> Atacar la base enemiga sin esperar a los súbditos de tu equipo. Normalmente se hace cuando los enemigos tardarán en llegar a protegerla. xPeke el AP Carry de Fnatic realiza este procedimiento con frecuencia.'},
    {word: '<strong>Bush / Brush:</strong> Las hierbas que causan que los campeones que estén dentro no sean vistos por campeones que estén afuera.'},
    {word: '<strong>Buff:</strong> Normalmente es algo que mejora los atributos de algún campeón.'},
    {word: '<strong>Crowd Control (CC):</strong> Movimientos que interfieren en los movimientos de otro campeón como aturdimiento, terror, impulsos y cegar.'},
    {word: '<strong>Cooldown (CD):</strong> En español Enfriamiento. Es el tiempo entre el uso repetido de habilidades.'},
    {word: '<strong>Champion (Campeón):</strong> El personajes que como invocador, controlas.'},
    {word: '<strong>DD:</strong> Direct Damage Ability (Habilidad de Daño Directo: Normalmente habilidades que no se pueden esquivar. Por ejemplo: la bola de fuego de Annie.'},
    {word: '<strong>Disable:</strong> Disable son los hechizos que previenen a los campeones de hacer cualquier acción. Ejemplos son: aturdimiento, root (fijar al suelo).'},
    {word: '<strong>DOT:</strong> Damage over time (daño por tiempo).'},
    {word: '<strong>DPS:</strong> Damage Per second (Daño por Segundo). También hace referencia a campeones cuyo principal trabajo es hacer daño (Al contrario que los apoyos y los tanques).'},
    {word: '<strong>Executed (Ejecutado):</strong> Asesinado por una torreta sin que ningún campeón se lleve la muerte.'},
    {word: '<strong>Face-check:</strong> Entrar a la hierba (sin otra habilidad u objeto de visión) para verificar la presencia del enemigo o del indicio de un enemigo próximo.'},
    {word: '<strong>Farm:</strong> Farmear se refiere a conseguir gran cantidad de oro. Como mejor se consigue es matar muchos súbditos muy rápido.'},
    {word: '<strong>First blood (FB):</strong> Obtener la primera baja del juego'},
    {word: '<strong>Feed:</strong> Es un término que se utiliza para denominar a alguien que ha muerto demasiadas veces.'},
    {word: '<strong>Grass:</strong> Ir a mirar la hierba.'},
    {word: '<strong>Harass:</strong> Molestar al enemigo dañándole poco a poco, forzándole a encerrarse en su torreta o ir de nuevo a la base para curarse.'},
    {word: '<strong>Héroe (Hero):</strong> Se refiere a los campeones.'},
    {word: '<strong>Humiliation (Humillacion):</strong> Asesinado por un súbdito sin que ningún campeón se lleve la recompensa.'},
    {word: '<strong>IAS:</strong> Increased Attack Speed (Velocidad de Ataque Incrementada).'},
    {word: '<strong>Juke, juking:</strong> Cuando se es perseguido, juking es para atontar a tus enemigos. Normalmente ocurre en la jungla. Un buen juke te libra de tus enemigos explotando su linea de visión, o simplemente hacer que tu enemigo falle al clickearte.'},
    {word: '<strong>Jungle (Jg):</strong> Atacar a Súbditos neutrales, permitiendo dejar 2 lineas con 1 solo campeón y poder gankear mejor.'},
    {word: '<strong>Last Hit (Lh):</strong> Dar el último golpe.'},
    {word: '<strong>MR:</strong> Magic Resist (resistencia mágica). Una protección contra ataques mágicos.'},
    {word: '<strong>MS:</strong> Movement Speed (velocidad de movimiento).'},
    {word: '<strong>Neutrals:</strong> Los Súbditos que están en la jungla.'},
    {word: '<strong>Neuts:</strong> Neutrals.'},
    {word: '<strong>Passive (Pasiva):</strong> Una habilidad que no se activa pero que ayuda al jugador. Normalmente solo se aplican al jugador que las lleva.'},
    {word: '<strong>Proc:</strong> Se refiere al arma, objeto o habilidad que se activan con "Posibilidad al golpear" o "Posibilidad de usarse". "Programmed Random Occurence".'},
    {word: '<strong>Root:</strong> Un efecto negativo que previene que un campeón pueda moverse o usar habilidades.'},
    {word: '<strong>Silence (Silencio):</strong> Efecto Negativo que previene al campeón de usar habilidades.'},
    {word: '<strong>Skillshot:</strong> Habilidad que dispara un proyectil que puede ser esquivado. Por ejemplo: El Tiro Místico de Ezreal'},
    {word: '<strong>Snowball:</strong> Objeto que aumenta su poder con muertes. Por ejemplo: El Roba Almas de Mejai.'},
    {word: '<strong>Stun (Aturdimiento):</strong> Efecto Negativo que previene al Campeón de usar cualquier acción.'},
    {word: '<strong>Summoner (Invocador):</strong> Tu representante en el juego. Básicamente eres el titiritero que mueve a los campeones en el juego.'},
    {word: '<strong>Support (Apoyo):</strong> Campeón que normalmente va a Bot y ayuda al Attack Damage Carry comprándole wards y en general están para ayudar a todo el equipo.'},
    {word: '<strong>Tank (Tanque):</strong> Campeones que son capaces de resistir muchos golpes y se encargan de iniciar la pelea contra el equipo rival. Tienen mucha vida, armadura / resistencia mágica.'},
    {word: '<strong>Torret Hugging, Turret Hug, Thug:</strong> Defender la torre permaneciendo bajo ella, básicamente porque no se es capaz de defenderla sin su ayuda.'},
    {word: '<strong>TP (Teleport):</strong> Hechizo de Invocador que te permite tele-transportarte de un lugar a una torreta, ward o súbdito.'},
    {word: '<strong>Ultimate o Ulti:</strong> Habilidad definitiva. Se utiliza presionando la tecla R.'},
    {word: '<strong>Unique (Única):</strong> Algunas pasivas o habilidades son únicas, es decir que no se pueden tener dos.'},
    ]

    const form = document.querySelector('#form');
    const buttonSearch = document.querySelector('#buttonSearch');
    const resultFound= document.querySelector('#resultFound')   

    const find = ()=>{
        //console.log(fomulario.value);
        resultFound.innerHTML = '';
        console.log('fdfghjk')

        const search =form.value.toLowerCase();

        for(let glosary of glosarys){
            let word = glosary.word.toLowerCase();
            if(word.indexOf(search) !== -1){
                resultFound.innerHTML += `
                <li>${glosary.word}</li>
                `
            }
        }
        
        if(resultFound.innerHTML === ''){
            resultFound.innerHTML += `
            <li>No Encontrado ...</li>
            `
        }

    }

    buttonSearch.addEventListener('click', find)
    form.addEventListener('keyup', find)
    
    find();

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
