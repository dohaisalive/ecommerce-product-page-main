let counter = 0;
let cart = [];
let item = "";
function showItems() {
  var x = document.getElementById("cartContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function minus() {
  counter--;
  if (counter < 0) counter = 0;
  document.getElementById("counter").innerHTML = counter;
}

function plus() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}

function addToCart() {
  cart.add(item);
}
