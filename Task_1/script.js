// *Section 1: Variables (1–8)*

// 1)What is the output?

var a = 10;
a = 15;
console.log(a);

//Output : 15

// 2) What happens here?

let b = 20;
let b = 30;

//Explaination: Error will come because let keyword will be allowing to declare an variable name only One time.

// 3) What is the output?

const c = 50;
console.log(c);

// Output: 50

// 4) Identify error:

const x = 10;
x = 20;

//Error here is x=20; 
// because already x variable is declared using constant keyword with x=10 so we canot reassign another value to that variable

//5) Output ?

var p = 5;
var p = 10;
console.log(p);

//Output: 10

//6)Output ?

let q = 25;
q = q + 10;
console.log(q);

//Output: 35

// 7)Output ?

const r = 7;
console.log(r + 3);

//Output:10

// 8) Fill correct keyword:

//___ a = 10;

// correct keyword: let


//*Section 2: Console Methods(9–12)*//

//9)Which method prints normal output ?
console.log();

//10) Which method shows warning ?
console.warn();

//11) Which method shows error ?
console.error();

//12)  What does this do?
console.clear();

// Answer: This method clear the screen.


//*Section 3: Data Types(13–18)*//

//13)Output ?

    let a = "hello";
console.log(typeof a);

//Output:string

//14)Output ?
    let b = 100;
console.log(typeof b);

//Output:number

//15)Output ?

    let c = false;
console.log(typeof c);

//Output:boolean

//16)Output ?

    let d;
console.log(d)

//Output:undefined

//17)What is type of null?

//Answer: object

//18)Convert string to number:"25"

Number("25")

//* Section 4: Arrays(19–24)*//

//19) Create array of 3 fruits.

let fruits = ["pineapple","orange","watermelon"];

//20)Output ?
    
let arr = ["a", "b", "c"];
console.log(arr[1]);

//Output: b

// 21) Output ?
   
let arr = ["x", "y", "z"];
console.log(arr[arr.length - 1]);

//Output: z

// 22)How to get first element ?

arr[0]

//23)Output ?

let arr = ["apple", "banana"];
console.log(arr.length);

//Output: 2

//24) Add new element to array.

arr.push("venkat");


//*Section 5: Objects(25–28)*//

//25)Create object with name & age.

let personal_data ={
  name:"venkat",
  age:22
};
//26) Output ?

let obj = { name: "Naveen" };
console.log(obj.name);

//Output: Naveen

//27)Output ?

    let obj = {
        fruits: ["apple", "banana"]
    };
console.log(obj.fruits[1]);

//Output:banana

// 28) How to access last element inside object array ?

obj.var_name[obj.var_name.length-1]

//*Section 6: Arithmetic Operators(29–32)*//
//29) Output ?

    console.log(5 + 3);

    //output: 8

//30) Output ?

    console.log(10 % 3);

    //output: 1
//31) Output ?

    console.log(2 ** 3);

    //output:8
//32) Output ?

    console.log(10 / 2);

    //Output: 5

//* Section 7: Increment / Decrement(33–36)*//

//33)Output ?

let a = 5;
a++;
console.log(a);

//Output: 6

//34) Output ?

let b = 5;
let c = b++;
console.log(b, c);

//Output: 6 5

//35) Output ?

let x = 5;
let y = ++x;
console.log(x, y);

//Output: 6 6

//36)Output ?

let m = 3;
let n = m--;
console.log(m, n);

//Output: 2 3

//*Section 8: Comparison & Logical(37–39)*//
//37) Output ?

    console.log(5 == "5");

  //Output: true

//38)Output ?

    console.log(5 === "5");

//Output: false

//39) Output ?

    console.log(true && false || true);
   
    //Output: true

//*Section 9: Ternary(40)*//

// 40)Output ?

    5 > 3 ? console.log("Yes") : console.log("No");

    //Output:Yes

