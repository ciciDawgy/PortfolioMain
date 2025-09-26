(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.querySelector('.cart');

    cart.addEventListener('click', function(){
        cart.classList.toggle('showCart');
    })
})();

(function() {
    const cartBtn = document.querySelectorAll(".store-item-icon");

    cartBtn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            if(e.target.parentElement.classList.containes
                ("store-item-icon")) {
                    let fullPath = e.target.parentElement.previousElementSibling.src;
                }
        })
    })()
})