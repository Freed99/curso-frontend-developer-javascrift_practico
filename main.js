const menuNivel = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuMobil = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const navbarCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuNivel.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu() {
    desktopmenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

menuMobil.addEventListener('click', toggleMobilmenu);

function toggleMobilmenu() {
    mobilMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

navbarCart.addEventListener('click', toggleNavbarCart);

function toggleNavbarCart() {
    productDetail.classList.toggle('inactive');
    mobilMenu.classList.add('inactive');
    desktopmenu.classList.add('inactive');
}