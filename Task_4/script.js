//*Task 1 — Basic Function*//
//Create a function called welcomeUser.
/*Requirements:
Accept name
Print:
Welcome Naveen
Example:
welcomeUser("Naveen")*/

function welcomeUser(name){
    console.log("Welcome " + name);
}

welcomeUser("Naveen");

//Output: Welcome Naveen


//*Task 2 — Parameter + Return*//
/*Create a function squareNumber.
Requirements:
Accept one number
Return square value
Example:
squareNumber(5)
Output:
25*/

function squareNumber(num){
    return num * num;
}

console.log(squareNumber(5));

//Output:25


//*Task 3 — Object Function*//
/*
Create an object:
{
   name : "Rahul",
   salary : 50000
}
Requirements:
Create a function:
employeeBonus(bonus)
Output:
Rahul
55000
*/

const employee = {
    name: "Rahul",
    salary: 50000,

    employeeBonus: function(bonus){
        console.log(this.name);
        console.log(this.salary + bonus);
    }
};

employee.employeeBonus(5000);

/*Output:
Rahul
55000
*/


//*Task 4 — Scope Checking*//
/*
Inside a function:
Create var
Create let
Create const
Requirements:
Try accessing them outside block
Observe which works and which gives error
*/

function checkScope(){

    if(true){

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a); // Works

    // console.log(b); // Error
    // console.log(c); // Error
}

checkScope();

//Explaination: var can be accessed outside block but let and const can be accessed within Scope block

//*Task 5 — Arrow Function*//
/*
Convert this into arrow function:
function add(a,b){
   console.log(a+b);
}
   */

const add = (a,b) => {
    console.log(a + b);
};

add(5,3);

//output:8


//*Task 6 — Callback Function*//
/*
Create:
multiply
calculator
Requirements:
calculator should accept:
callback function
two numbers
Example:
calculator(multiply,5,2)
Output:
10
*/

function multiply(a,b){
    return a * b;
}

function calculator(callback,x,y){
    console.log(callback(x,y));
}

calculator(multiply,5,2);

//Output:10


//*Task 7 — Generator Function*//
/*
Create generator function offers.
Requirements:
Yield:
"50% OFF"
"Free Delivery"
"Cashback"
Use:
next()
to print values one by one.
*/

function* offers(){

    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const data = offers();

console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);

/*Output:
50% OFF
Free Delivery
Cashback */


//*Task 8 — Default Parameter*//
/*
Create:
student(name,course="JavaScript")
Requirements:
If course not passed,
default should become "JavaScript".
*/

function student(name, course = "JavaScript"){
    console.log(name);
    console.log(course);
}

student("Krishna");

/*Output:
Krishna
JavaScript
 */

//*Task 9 — Currying*//
/*
Create currying function for multiplication.
Example:
multi(2)(3)(4)
Output:
24
*/

function multi(a){
    return function(b){
        return function(c){
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));

/*
Output:
24
*/


//*Task 10 — Spread Operator*//
/*
Merge these arrays:
[1,2,3]
[4,5,6]
Final Output:
[1,2,3,4,5,6]
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const result = [...arr1, ...arr2];
console.log(result);

/*Output:
[1,2,3,4,5,6]
*/

//*Task 11 — Object Spread*//
/*
Merge two objects:
{name:"Navi"}
{role:"Developer"}
Final Output:
{
  name:"Navi",
  role:"Developer"
}
  */

const obj1 = {name:"Navi"};
const obj2 = {role:"Developer"};

const finalObj = {...obj1, ...obj2};

console.log(finalObj);

/*Output:
{
  name:"Navi",
  role:"Developer"
}*/


//*Task 12 — Rest Operator*//
/*
Create function:
numbers(...num)
Requirements:
Print all numbers
Print total sum
Example:
numbers(1,2,3,4)
Output:
[1,2,3,4]
10
*/

function numbers(...num){

    console.log(num);

    let sum = 0;

    for(let i of num){
        sum += i;
    }

    console.log(sum);
}

numbers(1,2,3,4);
/*
Output:
[1,2,3,4]
10
*/


//*Mini Challenge *//
/*
Create one small Student Management System using:
function
callback
object
array
spread operator
rest operator
Features:
Add student
Print students
Calculate marks
Add bonus marks
*/

// Student Array
let students = [];

// Add Student Function
function addStudent(name, marks){

    const student = {
        name,
        marks
    };

    students.push(student);

    console.log(name + " Added");
}

// Print Students
function printStudents(){

    console.log("Student List:");

    students.forEach((student) => {
        console.log(student.name, student.marks);
    });
}

// Callback Function
function calculateMarks(student){
    return student.marks;
}

// Calculator Function
function studentResult(callback, student){

    console.log(
        student.name + " Marks: " + callback(student)
    );
}

// Bonus Marks using Spread
function bonusMarks(bonus){

    students = students.map(student => ({
        ...student,
        marks: student.marks + bonus
    }));
}

// Rest Operator
function totalMarks(...marks){

    let total = 0;

    for(let m of marks){
        total += m;
    }

    console.log("Total:", total);
}

// Adding Students
addStudent("Rahul",80);
addStudent("Navi",90);

// Printing
printStudents();

// Callback
studentResult(calculateMarks, students[0]);

// Bonus Marks
bonusMarks(5);

printStudents();

// Rest Operator
totalMarks(80,90,70);

/*output:

Rahul Added
Navi Added

Student List:
Rahul 80
Navi 90

Rahul Marks: 80

Student List:
Rahul 85
Navi 95

Total: 240
*/