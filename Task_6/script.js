// ==========================================
// 5 Real-Time JavaScript Questions
// Topic : Array + Object + HOF + Spread
// ==========================================


// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array


let presentStudents = ["Rahul", "Anjali", "Kiran"];
let absentStudents = ["Ravi", "Sneha"];

let finalStudents = [...presentStudents, ...absentStudents, "Vikram"];

console.log(finalStudents);

/*
Output:
[
  'Rahul',
  'Anjali',
  'Kiran',
  'Ravi',
  'Sneha',
  'Vikram'
]
*/

// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object


let mobile = {
    brand: "Samsung",
    price: 25000
};

let charger = {
    type: "Fast Charger",
    warranty: "1 Year"
};

let productDetails = {
    ...mobile,
    ...charger,
    deliveryDate: "20 May 2026"
};

console.log(productDetails);

/*
Output:
{
  brand: 'Samsung',
  price: 25000,
  type: 'Fast Charger',
  warranty: '1 Year',
  deliveryDate: '20 May 2026'
}
*/

// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item


function orderFood(...items) {

    console.log("Total items ordered:", items.length);
    console.log("First item:", items[0]);
    console.log("Last item:", items[items.length - 1]);

}

orderFood("Pizza", "Burger", "Pasta", "Ice Cream");

/*
Output:
Total items ordered: 4
First item: Pizza
Last item: Ice Cream
*/


// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees


let employees = [
    { name: "Rahul", salary: 45000 },
    { name: "Anjali", salary: 60000 },
    { name: "Kiran", salary: 75000 },
    { name: "Ravi", salary: 40000 }
];

let highSalaryEmployees = employees.filter(emp => emp.salary > 50000);

console.log(highSalaryEmployees);

/*
Output:
[
  { name: 'Anjali', salary: 60000 },
  { name: 'Kiran', salary: 75000 }
]
*/


// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total


let scores = [100, 200, 150, 250, 300];

let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

console.log("Total Score:", totalScore);

/*
Output:
Total Score: 1000
*/