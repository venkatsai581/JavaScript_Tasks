// 1. API Task - User Names Uppercase
// API:
// https://jsonplaceholder.typicode.com/users
// Fetch all users.
// Use map()
// Convert all usernames to UPPERCASE.
// Print new array.


//* 1. API Task - User Names Uppercase *//


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {

    let upperCaseUsers = data.map((user) => {
      return user.username.toUpperCase();
    });

    console.log(upperCaseUsers);

  })
  .catch((error) => {
    console.log(error);
  });


// Output Example:
// ["BRET", "ANTONETTE", "SAMANTHA", ...]



// 2. API Task - Expensive Products
// API:
// https://fakestoreapi.com/products
// Fetch products.
// Use filter()
// Print products price greater than 100.


//* 2. API Task - Expensive Products *//


fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {

    let expensiveProducts = products.filter((product) => {
      return product.price > 100;
    });

    console.log(expensiveProducts);

  })
  .catch((error) => {
    console.log(error);
  });


// Output:
// Products with price greater than 100



//* 3. Date Concept Task - Digital Clock *//
// Create one Date object.
// Print:
// current hours
// current minutes
// current seconds
// Output Example:
// 10 : 45 : 30



//* 3. Date Concept Task - Digital Clock *//


let currentDate = new Date();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(hours + " : " + minutes + " : " + seconds);


// Output Example:
// 19 : 11 : 33





// 4. String Concept Task - Username Checker
// Create one string:
// "   Naveen Kumar   "
// Remove spaces using trim().
// Convert into uppercase.
// Check string includes "KUMAR".
// Print final output.




//* 4. String Concept Task - Username Checker *//

let username = "   Naveen Kumar   ";

let finalName = username.trim().toUpperCase();

console.log(finalName);

console.log(finalName.includes("KUMAR"));


// Output:
// NAVEEN KUMAR
// true





// 5. Array Concept Task - Student Rank System
// Create one array:
// [450, 300, 700, 200, 900]
// Sort marks high to low.
// Print top 3 marks only using slice().


//* 5. Array Concept Task - Student Rank System *//


let marks = [450, 300, 700, 200, 900];

let sortedMarks = marks.sort((a, b) => b - a);

let topThree = sortedMarks.slice(0, 3);

console.log(topThree);


// Output:
// [900, 700, 450]