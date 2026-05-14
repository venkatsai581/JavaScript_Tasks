//*Task 1 — Student Registration Form*//
/*
Create a program using:
prompt()
variables (let, const)
console.log()
Requirements:
Ask student name
Ask department
Ask age
Print all details using template string
Example Output:
Welcome Naveen
Department: CSE
Age: 20
*/

let studentName = prompt("Enter Student Name:");
let department = prompt("Enter Department:");
let age = prompt("Enter Age:");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

/*Output:
Enter Student Name: Naveen
Enter Department: CSE
Enter Age: 20

Welcome Naveen
Department: CSE
Age: 20
*/

//*Task 2 — ATM Withdrawal System*//
/*
Use:
if else
comparison operators
logical operators
Requirements:
User balance = 10000
Ask withdrawal amount
If amount <= balance → "Transaction Successful"
Else → "Insufficient Balance"
Bonus:
Minimum withdrawal = 100
*/

let balance = 10000;

let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawAmount >= 100) {

    if (withdrawAmount <= balance) {
        console.log("Transaction Successful");
    }
    else {
        console.log("Insufficient Balance");
    }

}
else {
    console.log("Minimum withdrawal amount is 100");
}

/*Output1:
Enter Withdrawal Amount: 5000
Transaction Successful

Output2:
Enter Withdrawal Amount: 15000
Insufficient Balance
*/

//*Task 3 — Swiggy Discount Checker*//

/*
Use:
ternary operator
Requirements:
If order amount > 499
Show:
"Free Delivery Available"
Else:
"Delivery Charges Applied"
*/

let orderAmount = Number(prompt("Enter Order Amount:"));

let result = orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied";

console.log(result);

/*
Output1:
Enter Order Amount: 600
Free Delivery Available

Output2:
Enter Order Amount: 300
Delivery Charges Applied
*/


//*Task 4 — Instagram Login System*//
/*
Use:
nested if
Requirements:
Correct username = "admin"
Correct password = "1234"
Conditions:
If username correct → ask password
If password correct → Login Success
Else → Wrong Password
Else → Invalid Username
*/

let username = prompt("Enter Username:");

if (username === "admin") {

    let password = prompt("Enter Password:");

    if (password === "1234") {
        console.log("Login Success");
    }
    else {
        console.log("Wrong Password");
    }

}
else {
    console.log("Invalid Username");
}

/*
Output1:
Enter Username: admin
Enter Password: 1234
Login Success

Output2:
Enter Username: admin
Enter Password: 1111
Wrong Password
*/


//*Task 5 — Traffic Signal System*//
/*
Use:
switch statement
Requirements:
Input:
red / yellow / green
Output:
STOP
READY
GO
*/

let signal = prompt("Enter Signal Color:");

switch(signal) {

    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}

/*
Output:
Enter Signal Color: red
STOP
*/

//*Task 6 — Employee Salary Calculator*//
/*
Use:
function
parameters
return
Requirements:
Create function salaryCalculation
Basic salary + bonus
Return total salary
Example:
salaryCalculation(25000,5000)
Output:
30000
*/

function salaryCalculation(basicSalary, bonus) {

    return basicSalary + bonus;

}

let totalSalary = salaryCalculation(25000, 5000);

console.log(totalSalary);

/*
Output:
30000
*/

//*Task 7 — E-Commerce Cart Total*//
/*
Use:
Array
for loop
Requirements:
Store product prices inside array:
[100,200,300,400]
Find:
Total price
Average price
*/

let prices = [100, 200, 300, 400];

let total = 0;

for(let i = 0; i < prices.length; i++) {

    total = total + prices[i];

}

let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);

/*
Output:
Total Price: 1000
Average Price: 250
*/

//*Task 8 — WhatsApp Contact Book*//
/*
Use:
Object
for in loop
Requirements:
Store:
name
phone
status
Print all details dynamically.
*/

let contact = {

    name: "Rahul",
    phone: "9876543210",
    status: "Available"

};

for(let key in contact) {

    console.log(key + " : " + contact[key]);

}
/*
Output:
name : Rahul
phone : 9876543210
status : Available
*/

//*Task 9 — Movie Ticket Booking*//
/*
Use:
function
callback function
Requirements:
Create:
bookTicket()
payment()
After booking complete,
callback payment function automatically.
*/

function payment() {

    console.log("Payment Successful");

}

function bookTicket(callback) {

    console.log("Ticket Booked");

    callback();

}

bookTicket(payment);

/*
Output:
Ticket Booked
Payment Successful
*/

//*Task 10 — Food Delivery Time Tracker*//
/*
Use:
Generator Function
Requirements:
Show order stages one by one:
Order Confirmed
Preparing Food
Out for Delivery
Delivered
*/

function* deliveryTracker() {

    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";

}

let order = deliveryTracker();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);

/*Output:
Order Confirmed
Preparing Food
Out for Delivery
Delivered
*/