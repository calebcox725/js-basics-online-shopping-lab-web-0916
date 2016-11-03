var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});

  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return cart;
  }

  var cartString = "In your cart, you have";

  for (let i = 0; i < cart.length; i++) {
    let item = Object.keys(cart[i])[0];
    let price = cart[i][item];

    cartString += ` ${item} at $${price}`;

    if (i < cart.length - 1) {
      cartString += ',';
    }
  }

  console.log(cartString + '.');
}

function removeFromCart(itemToRemove) {
  var originalCartLength = cart.length;

  for (let i = 0; i < cart.length; i++) {
    let item = Object.keys(cart[i])[0];

    if (item === itemToRemove) {
      cart.splice(i, 1);
    }
  }

  if (originalCartLength === cart.length) {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }

}