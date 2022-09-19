const menuNivel = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

menuNivel.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu() {
    desktopmenu.classList.toggle('inactive');
}
