const menuNivel = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuMobil = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');


menuNivel.addEventListener('click', toggleDesktopmenu);

menuMobil.addEventListener('click', toggleMobilmenu);

function toggleDesktopmenu() {
    desktopmenu.classList.toggle('inactive');
}

function toggleMobilmenu() {
    mobilMenu.classList.toggle('inactive');
}
