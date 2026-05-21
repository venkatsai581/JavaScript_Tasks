/*
//FINAL TASK
Real-Time API Project Tasks
Beginner Tasks

Task 1
Fetch all products from API and display:
Product Image
Title
Price

Task 2
Add a loading message:
Loading...
before API data comes.

Task 3
If API fails:
Error Fetching Data
show inside UI.

Task 4
Use:
slice()
to limit:
title → 20 letters
description → 50 letters

Task 5
Add hover effect to product cards using CSS.
Intermediate Tasks

Task 6 — Search Feature
Create a search bar.
User types:
shirt
Only shirt products should appear.

Task 7 — Category Filter
Create category buttons:
electronics
jewelery
men's clothing
women's clothing
When clicked → show only that category.

Task 8 — Add To Cart
Add button:
Add To Cart
When clicked:
increase cart count
store product inside array

Task 9 — Remove From Cart
Add remove button.
When clicked:
remove item from array
update cart count

Task 10 — Total Price
Calculate total cart amount.
Example:
Total = $450
*/



let productsDiv = document.getElementById("products");

let searchInput = document.getElementById("search");

let allProducts = [];

let cart = [];




//* Task 2*//
// Loading Message


productsDiv.innerHTML = "<h2>Loading...</h2>";




//* Task 1*//
// Fetch Products from API


fetch("https://fakestoreapi.com/products")

  .then((res) => res.json())

  .then((data) => {

    allProducts = data;

    displayProducts(data);

  })




  //* Task 3*//
  // Error Handling
 

  .catch(() => {

    productsDiv.innerHTML = "<h2>Error Fetching Data</h2>";

  });




// Display Products Function

function displayProducts(products) {

  productsDiv.innerHTML = "";

  products.forEach((product) => {

    productsDiv.innerHTML += `

        <div class="card">

            <img src="${product.image}">


            <!-- Task 4 -->
            <!-- slice() for title -->

            <h3>
              ${product.title.slice(0, 20)}
            </h3>


            <!-- Task 4 -->
            <!-- slice() for description -->

            <p>
              ${product.description.slice(0, 50)}
            </p>


            <h2>$${product.price}</h2>


            <!-- Task 8 -->
            <!-- Add To Cart Button -->

            <button onclick="addToCart(${product.id})">
            Add To Cart
            </button>


            <!-- Task 9 -->
            <!-- Remove From Cart Button -->

            <button onclick='removeFromCart(${product.id})'>
              Remove
            </button>

        </div>

        `;

  });

}





//* Task 6 *//
// Search Feature

searchInput.addEventListener("keyup", () => {

  let searchValue = searchInput.value.toLowerCase();

  let filteredData = allProducts.filter((product) => {

    return product.title.toLowerCase().includes(searchValue);

  });

  displayProducts(filteredData);

});





//* Task 7 *//
// Category Filter


function filterCategory(category) {

  let filteredData = allProducts.filter((product) => {

    return product.category === category;

  });

  displayProducts(filteredData);

}




//* Task 8 *//
// Add To Cart


function addToCart(id){

    let product = allProducts.find((item) => {

        return item.id === id;

    });

    cart.push(product);

    console.log(cart);

    document.getElementById("count").innerText = cart.length;

    calculateTotal();

}





//* Task 9 *//
// Remove From Cart


function removeFromCart(id) {

  let index = cart.findIndex((item) => {
    return item.id === id;
  });

  if (index !== -1) {
    cart.splice(index, 1);
  }

  document.getElementById("count").innerText = cart.length;

  calculateTotal();

  console.log(cart);
}



//* Task 10 *//
// Total Price Calculation


function calculateTotal() {

  let total = 0;

  cart.forEach((item) => {

    total += item.price;

  });

  document.getElementById("total").innerText = total.toFixed(2);

}