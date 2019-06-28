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