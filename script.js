const tocarMail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")

tocarMail.addEventListener ("click", toggleDesktopMenu)

function toggleDesktopMenu () {
    console.log("hola");
    desktopMenu.classList.toggle ("inactive");

}
