//add to cart
var addToCart = document.getElementsByClassName('add')
for (let i = 0; i < addToCart.length; i++) {
    var addButton = addToCart[i];
    addButton.onclick = function () {
        var title = document.getElementsByClassName('title')[i].innerText;
        var price = document.getElementsByClassName('price')[i].innerText;
        var imageSrc = document.getElementsByClassName('image')[i].src;
        console.log(imageSrc, title, price);
        addItemToCart(imageSrc, title, price);
        updatePrice();
    }
}

function addItemToCart(imageSrc, title, price) {
    var cartRow = document.createElement('div');
    var cartItem = document.getElementById('List');
    var cartRowContents = `
    <div class="cart-list">
    <div class="left">
    <img src="${imageSrc}" alt="">
    <h2>${title}</h2>
    <p>${price}</p>
</div>
<div class="right">
    <input type="number" name="" id="qnt" value="1">
    <button class="cross">Remove</button>
</div>
 </div>`
    cartRow.innerHTML = cartRowContents;
    cartItem.append(cartRow);
    remove();
    input();
    clearAll();
}

//clear all
clearAll();
function clearAll() {
const clearCart = document.querySelector('.clear');
const list = document.querySelectorAll('.cart-list');
clearCart.onclick = function () {
    list.forEach(item => {
        item.remove();
    });
    total.innerHTML="Total : 0 TK";
}
}
//clear item
remove();
function remove(){
const remove = document.querySelectorAll('.cross');
for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        remove[i].parentElement.parentElement.remove();
        updatePrice();
    }
}
}
//input value
input();
function input(){
let inputQuantity = document.querySelectorAll('#qnt');
for (let i = 0; i < inputQuantity.length; i++) {
    inputQuantity[i].onchange = function () {
        if (isNaN(inputQuantity[i].value) || inputQuantity[i].value <= 0) {
            inputQuantity[i].value = 1;
        }
        updatePrice();
    }
}
}

//update price
let total = document.querySelector('.total');
function updatePrice() {
    let cartList = document.querySelectorAll('.cart-list p');
    let qnt = document.querySelectorAll('#qnt');
    let allTotal = 0;
    for (let i = 0; i < cartList.length; i++) {
        let price = parseFloat(cartList[i].innerText);
        let quantity = parseInt(qnt[i].value);
        allTotal = allTotal + (price * quantity);
        total.innerHTML = "Total : "+allTotal+" TK";
    }

}
//purchase
const Purchase=document.querySelector('.purchase');
Purchase.onclick=function(){
    alert("Thanks for purchasing.")
    
}