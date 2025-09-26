/*cart */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
  
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
  
    var addCart = document.querySelector('.addCart');
  
    console.log(addCart.parentElement);
    
  
    /*shop-item-button*/
    var addToCartButtons = document.getElementsByClassName('addCart')
    for(var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
  
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
  }
  
 
  
  function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
  }
  
  function removeCartItem(event) {
    const buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  }
  
  function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
  }
  
  function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('bottom')[0].innerText
    var price = shopItem.getElementsByClassName('cartPrice')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
  }
  
  
  
     function addItemToCart(title, price, imageSrc) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
          for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('This item has already been added to the cart')
                return
            }
          }
  
        var cartRowContents = `
            <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">car</span>
        </div>
        <span class="cart-price cart-column">$19.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
        `
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }
  
  
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value 
        total = total + (price * quantity)
    }
  
    total = Math.round(total * 100) / 100
  
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
  }
  
  var showContain = document.querySelector('.showContainer');
  var cart = document.querySelector('.cart')
  var containerTwo = document.querySelector('.containerTwo');
  var removeCart = document.querySelector('.fa-times');
  
  function showContainer() {
    containerTwo.classList.add('showContainer');
  }

 
  
  cart.addEventListener('click', showContainer);
  
  removeCart.addEventListener('click', () => {
    containerTwo.classList.remove('showContainer');
  })

 const btnFive = document.querySelector('.btnFive');
 

  function myFunction() {
    var element = document.body;
    btnFive.addEventListener('click', () => {
      element.classList.toggle("darkMode");
    })
  }

  myFunction();