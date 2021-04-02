
/*MENU RESPONSIVE*/ 
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.menu ul');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});

enlaces.addEventListener('click',() =>{
    enlaces.classList.toggle('activado');
});