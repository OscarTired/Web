//Abrir y Cerrar Carrito
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Abrir carro
cartIcon.onclick = () => {
  cart.classList.add("active");
}

//Cerrar carro
closeCart.onclick = () => {
  cart.classList.remove("active");
}

// Agregar al carrito
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

// Funcion
function ready() {
  //remover item del carro
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  for(var i = 0; i< removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  // Cantidad
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for(var i = 0; i< quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  // Agregar al carro
  var addCart = document.getElementsByClassName("add-cart");
  for(var i = 0; i< addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  loadCartItems();
}

// Items Remover
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
  saveCartItems();
  updateCartIcon();
}

// Cantidad
function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
  saveCartItems();
  updateCartIcon();
}

// Funcion Agregar
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  var price = shopProducts.getElementsByClassName('price')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
  var sizeDropdown = shopProducts.getElementsByClassName('size-dropdown')[0];
  var size = sizeDropdown.value;

  // Verificar si se ha seleccionado una talla
  if (size === "") {
    alert("Por favor, seleccione una talla antes de agregar al carrito.");
    return;
  }

// Verificar si el producto con la misma talla ya está en el carrito
var canAddToCart = true;
var cartItems = document.getElementsByClassName('cart-box');
for (var i = 0; i < cartItems.length; i++) {
  var cartItem = cartItems[i];
  var cartTitle = cartItem.getElementsByClassName('cart-product-title')[0].innerText;
  var cartSize = cartItem.getElementsByClassName('cart-size')[0].innerText.replace('Talla: ', '');
  if (cartTitle === title && cartSize === size) {
    canAddToCart = false;
    break;
  }
}

if (!canAddToCart) {
  alert("Ya has añadido este producto con la misma talla al carrito.");
  return;
}
  
  addProductToCart(title, price, productImg, size);
  updatetotal();
  saveCartItems();
  updateCartIcon();
}

function addProductToCart(title, price, productImg, size  ){
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartBoxContent = `
  <img src="${productImg}" alt="" class="cart-img">
  <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <div class="cart-size">Talla: ${size}</div>
      <input type="number" name="" id="" value="1" class="cart-quantity">
  </div>
  <!-- Quitar Articulo -->
  <i class="bx bx-trash-alt cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removeCartItem);
  cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener('change', quantityChanged);
  saveCartItems();
  updateCartIcon();
}

// Actualizar Total
function updatetotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;
  for (var i = 0; i< cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("S/", ""))
    var quantity = quantityElement.value;
    total+= price * quantity;
  }
  // Redondeo precio
  total =Math.round(total * 100)/100;
  document.getElementsByClassName('total-price')[0].innerText = "S/" + total;
  // Guardar Total
  localStorage.setItem('cartTotal', total);
}

// Mantener los articulos al refrescar la pagina
function saveCartItems (){
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var cartItems = [];

  for (var i=0; i< cartBoxes.length; i++) {
    cartBox = cartBoxes[i];
    var titleElement = cartBox.getElementsByClassName('cart-product-title')[0];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var productImg = cartBox.getElementsByClassName('cart-img')[0].src;
    var sizeElement = cartBox.getElementsByClassName('cart-size')[0];

    var size = sizeElement ? sizeElement.innerText.replace('Talla: ', '') : 'No definido';

    var item = {
      title: titleElement.innerText,
      price: priceElement.innerText,
      quantity: quantityElement.value,
      productImg: productImg,
      size: size,
    };
    cartItems.push(item);
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Cargar Carrito
function loadCartItems (){
  var cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    cartItems = JSON.parse(cartItems);

    for (var i=0; i< cartItems.length; i++) {
      var item = cartItems[i];
      addProductToCart(item.title, item.price, item.productImg, item.size);

      var cartBoxes = document.getElementsByClassName('cart-box');
      var cartBox = cartBoxes[cartBoxes.length - 1];
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      quantityElement.value = item.quantity;
    }
  }
  var cartTotal = localStorage.getItem('cartTotal');
  if(cartTotal) {
    document.getElementsByClassName('total-price')[0].innerText =
     "S/" + cartTotal;
  }
  updateCartIcon();
}

// EXTRAER TALLA (optimizado arriba)
// function extractSizeFromTitle(title) {
//   var matches = title.match(/Talla:\s*(\S+)/);
//   return matches && matches.length > 1 ? matches[1] : 'No definido';
// }

// Icono cantidad carrito
function updateCartIcon (){
  var cartBoxes = document.getElementsByClassName('cart-box');
  var quantity = 0;

   for (var i=0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    quantity+= parseInt(quantityElement.value);
   }
   var cartIcon = document.querySelector('#cart-icon');
   cartIcon.setAttribute('data-quantity', quantity);
}

// Limpiar carro despues de un pago exitoso
function clearCart(){
  var cartContent = document.getElementsByClassName('cart-content')[0];
  cartContent.innerHTML = '';
  updatetotal();
  localStorage.removeItem("cartItems");
}

function toggleMenu() {
        const sidebar = document.querySelector(".sidebar");
        const menuBtn = document.querySelector("#btn");
        const greeting = document.querySelector("#greeting");
        const links = document.querySelectorAll(".nav-list li");

        function getGreeting() {
          const now = new Date();
          const hour = now.getHours();

          if (hour >= 5 && hour < 12) {
            return "⛅ Buenos Días!";
          } else if (hour >= 12 && hour < 18) {
            return "🌞 Buenas Tardes!";
          } else {
            return "🌜 Buenas Noches!";
          }
        }

        function menuBtnChange() {
          if (sidebar.classList.contains("open")) {
            menuBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            links.forEach(link => {
              link.style.opacity = "1";
              link.style.pointerEvents = "auto";
            });
          } else {
            menuBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            links.forEach(link => {
              link.style.opacity = "0";
              link.style.pointerEvents = "none";
            });
          }
        }

        menuBtn.addEventListener("click", () => {
          sidebar.classList.toggle("open");
          menuBtnChange();
        });

        // Actualizar el saludo según el horario local
        greeting.textContent = getGreeting();
      }

      

      toggleMenu();