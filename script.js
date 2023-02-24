const tocarMail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")
const menuHam = document.querySelector (".menu")
const mobileMenu = document.querySelector (".mobile-menu")
const carritoCompra = document.querySelector (".navbar-shopping-cart")
const productDetail = document.querySelector (".product-detail")

tocarMail.addEventListener ("click", toggleDesktopMenu)
menuHam.addEventListener ("click", showMenu)
carritoCompra.addEventListener ("click", showShopping)

function toggleDesktopMenu () {
    console.log("hola");
    desktopMenu.classList.toggle ("inactive");

}

function showMenu () {
    mobileMenu.classList.toggle ("inactive")
}

function showShopping (){
productDetail.classList.toggle ("inactive")
}