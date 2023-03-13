const tocarMail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")
const menuHam = document.querySelector (".menu")
const mobileMenu = document.querySelector (".mobile-menu")
const productDetailCloseIcon = document.querySelector (".product-detail-close")
const carritoCompra = document.querySelector (".navbar-shopping-cart")
const productDetail = document.querySelector ("#shoppingCartContainer")
const productDetailContainer = document.querySelector ("#productDetail")
const cardsContainer = document.querySelector (".cards-container")

tocarMail.addEventListener ("click", toggleDesktopMenu)
menuHam.addEventListener ("click", showMenu)
carritoCompra.addEventListener ("click", showShopping)
productDetailCloseIcon.addEventListener ("click", closeProductDetailAside)

function toggleDesktopMenu () {
    const isProductDetailClosed = productDetail.classList.contains ("inactive")  
    
    if (!isProductDetailClosed) {
        productDetail.classList.add ("inactive")
    }

    desktopMenu.classList.toggle ("inactive");

}

function showMenu () {
    const isProductDetailClosed = productDetail.classList.contains ("inactive")

    if (!isProductDetailClosed) {
        productDetail.classList.add ("inactive")
    }

    mobileMenu.classList.toggle ("inactive")
}

function showShopping (){
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive")
    const isDesktopMenu = desktopMenu.classList.contains ("inactive")
    const isProductDetailClosed = productDetailContainer.classList.contains ("inactive")

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add ("inactive")
    }

    if (!isDesktopMenu) {
        desktopMenu.classList.add ("inactive")
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add ("inactive")

        productDetail.classList.toggle ("inactive")
    }
}

function openProductDetailAside() {
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive")
}

const productList = []

productList.push ({
    name: "bike",
    precio: 200,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})

productList.push ({
    name: "compu",
    precio: 600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push ({
    name: "pantalla",
    precio: 10,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push ({
    name: "pantalla",
    precio: 10,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push ({
    name: "pantalla",
    precio: 10,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push ({
    name: "pantalla",
    precio: 10,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>  */


function renderProduct (arr) {

for (product of arr) {

   

    const divProductCard = document.createElement ("div")
divProductCard.classList.add ("product-card")

const imgProduct = document.createElement ("img")
imgProduct.setAttribute ("src", product.imagen)
imgProduct.addEventListener ("click", openProductDetailAside)

const divProductInfo = document.createElement ("div")
divProductInfo.classList.add ("product-info")

const divSecas = document.createElement ("div")

const productPrecio = document.createElement ("p")
productPrecio.innerText = "$" + product.precio

const productName = document.createElement ("p")
productName.innerText = product.name

divSecas.appendChild (productPrecio)
divSecas.appendChild (productName)

const figure = document.createElement ("figure")

const imgCarrito = document.createElement ("img")
imgCarrito.setAttribute ("src", "./icons/bt_add_to_cart.svg")

figure.appendChild (imgCarrito)

divProductInfo.appendChild (divSecas)
divProductInfo.appendChild (figure)

divProductCard.appendChild (imgProduct)
divProductCard.appendChild (divProductInfo)

cardsContainer.appendChild (divProductCard)

}}

renderProduct (productList)