const tocarMail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")
const menuHam = document.querySelector (".menu")
const mobileMenu = document.querySelector (".mobile-menu")

tocarMail.addEventListener ("click", toggleDesktopMenu)

function toggleDesktopMenu () {
    console.log("hola");
    desktopMenu.classList.toggle ("inactive");

}

menuHam.addEventListener ("click", showMenu)

function showMenu () {
    mobileMenu.classList.toggle ("inactive")
}
