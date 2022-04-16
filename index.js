let counter = 0;
let cart = [];
let first = true;

class Item {
  constructor(
    companyName,
    productName,
    description,
    price,
    sale,
    ogPrice,
    mainPic
  ) {
    this.companyName = companyName;
    this.productName = productName;
    this.description = description;
    this.price = price;
    this.sale = sale;
    this.ogPrice = ogPrice;
    this.mainPic = mainPic;
  }
}

let sneakers = new Item(
  "Sneaker Company",
  "Fall Limited Edition Sneakers",
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  125.0,
  50,
  250.0,
  "./images/image-product-1-thumbnail.jpg"
);

function showItems() {
  var x = document.getElementById("cartContainer");

  if (x.style.display === "none") {
    x.style.display = "block";
    showCart = true;
  } else {
    x.style.display = "none";
    showCart = true;
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
  if (counter !== 0) {
    if (first === true) {
      first = false;
      var img = document.createElement("img");
      img.src = sneakers.mainPic;
      var src = document.getElementById("productPic");
      src.appendChild(img);
    }

    document.getElementById("productName").innerHTML = sneakers.productName;
    document.getElementById("price").innerHTML = `$${sneakers.price}`;
    document.getElementById("itemQuantity").innerHTML = `x ${counter}`;
    document.getElementById("overall").innerHTML = `$${
      counter * sneakers.price
    }`;
  }
}

function renderCart(item) {}
