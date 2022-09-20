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

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Car',
    price: 1500,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tax',
    price: 1000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
     </figure>
</div> */}

function renderList(arr){
for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + product.price;

    const productName = document.createElement('div');
    productName.innerText= product.name;

    productInfoDiv.append(productPrice, productName);

    const figure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    figure.append(productImgCart);

    productInfo.append(productInfoDiv, figure);

    productCard.append(img, productInfo);

    const cardsContainer = document.querySelector('.cards-container')
    cardsContainer.append(productCard);
}
}

renderList(productList);