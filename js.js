if (document.readyState=='loading' ) {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}
function myfunction() {
    document.getElementById('popup').style.visibility='hidden'
    
}
function HidebookingOptions() {
    document.getElementById('serviceholder').style.visibility='hidden'
    document.getElementById('serviceholder').style.position='absolute'
   
}

function bookingOptions() {
    document.getElementById('serviceholder').style.visibility='visible'
    document.getElementById('serviceholder').style.position='relative'
   
}

function Hidedrinx() {
    document.getElementById('productsholder').style.visibility='hidden'
    document.getElementById('productsholder').style.position='absolute'
   
}

function drinx() {
    document.getElementById('productsholder').style.visibility='visible'
    document.getElementById('productsholder').style.position='relative'
   
}
function myfunction1() {
    document.getElementById('mpesaError').style.visibility='visible'
   
}
function completeOrder(){
    document.getElementById('orderpopup').style.visibility='visible'
}
function hideError() {
    document.getElementById('mpesaError').style.visibility='hidden'

}
function ready(){
    var RemoveFromCart = document.getElementsByClassName("removeItem")
    for( var i = 0; i<RemoveFromCart.length; i++) {
    var button = RemoveFromCart[i]
    button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-input')
    for( var i = 0; i<quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change' , quantityChange)
    }

    var addToCartButton = document.getElementsByClassName('  buy-buttton')
    for( var i = 0; i<addToCartButton.length; i++) {
        var button = addToCartButton[i]
        button.addEventListener('click', addToCartClicked )
    }

    document.getElementsByClassName('order-btn')[0].addEventListener('click', Ordered)
    
    
}

function Ordered() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal()
    updateTotal1()
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    
    updateTotal()
    updateTotal1()
    document.getElementById('cartLoaded').style.visibility='hidden'
}

function quantityChange(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1
    }
    updateTotal()
    updateTotal1()
}

function addToCartClicked(event){
    var button = event.target
    var product = button.parentElement.parentElement
    var title = product.getElementsByClassName('producttitle')[0].innerText
    var price = product.getElementsByClassName('productprice')[0].innerText
    var image = product.getElementsByClassName('productimage')[0].src
    addItemToCart(title, price, image)
    updateTotal()
    updateTotal1()
    document.getElementById('cartLoaded').style.visibility='visible'


}



function addItemToCart(title, price, image){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemsNames = cartItems.getElementsByClassName('item-title')
  
    for( var i = 0; i < cartItemsNames.length; i++) {
        
        if (cartItemsNames[i].innerText== title) {
            document.getElementById("popup").style.visibility="visible";
            
            
            
            return
        }
    }

    
        var cartRowContents = 

                                            `<div class="cart-item cart-column"> 
                                            <img src="${image}"  class="
                                            cart-img">
                                            <span class="item-title">${title}</span>
                                        </div>

                                        <span class="cart-price  cart-column">${price} </span>

                                        <div class="cart-item cart-column">
                                        <input type="number" value="1" class="cart-quantity cart-input" >
                                        <button role="button" class="btn removeItem"> REMOVE</button>
                                        </div>`
                                        
                                        
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('removeItem')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-input')[0].addEventListener('change', quantityChange)

    
}



function updateTotal() {
    
    var CartItems= document.getElementsByClassName('cart-items')[0]
    var cartRows = CartItems.getElementsByClassName('cart-row')
 var total = 0
    for( var i = 0; i < cartRows.length; i++) {
        var cartrow = cartRows[i]
        var priceElement = cartrow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartrow.getElementsByClassName(' cart-input')[0]
        var price = parseFloat( priceElement.innerText.replace('Kshs.', ''))
        var quantity = quantityElement.value
        total= total + (price*quantity)
    }
document.getElementsByClassName('total-price')[0].innerText ='Kshs. ' + total
}

function updateTotal1() {
    
    var CartItems= document.getElementsByClassName('cart-items')[0]
    var cartRows = CartItems.getElementsByClassName('cart-row')
 var total = 0
    for( var i = 0; i < cartRows.length; i++) {
        var cartrow = cartRows[i]
        var priceElement = cartrow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartrow.getElementsByClassName(' cart-input')[0]
        var price = parseFloat( priceElement.innerText.replace('Kshs.', ''))
        var quantity = quantityElement.value
        total= total + (price*quantity)
    }
document.getElementsByClassName('total-price1')[0].innerText =' Kshs. ' + total
}