// #11 useful string methods

























// #10 random number generator

// let x = Math.floor(Math.random() * 6) + 1;
// let y = Math.floor(Math.random() * 6) + 1;
// let z = Math.floor(Math.random() * 6) + 1;

// console.log(x);
// console.log(y);
// console.log(z);

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function() {

//   x = Math.floor(Math.random() * 6) + 1;
//   y = Math.floor(Math.random() * 6) + 1;
//   z = Math.floor(Math.random() * 6) + 1;

//   document.getElementById("xlabel").innerHTML = x;
//   document.getElementById("ylabel").innerHTML = y;
//   document.getElementById("zlabel").innerHTML = z;

// }















// #9 counter program

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function() {
//   count -=1;
//   document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function() {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function() {
//   count +=1;
//   document.getElementById("countLabel").innerHTML = count;
// }















// #8 Hypotenuse calc practice program 

// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side C:", c);


// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick = function() {

//     a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     b = document.getElementById("bTextBox").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     c = c.toFixed(2); // zaokruzuje broj na dvije decimale

//     document.getElementById("cLabel").innerHTML = "Side c:" + c; 
// }

















// #7 Math

// let x = 3.51; // zaokruzuje na vecu ili manju decimalu
// x = Math.round(x);
// console.log(x);


// let x = 3.99; // zaokruzuje na manji broj
// x = Math.floor(x);
// console.log(x);


// let x = 3.1; // zaokruzuje na veci broj
// x = Math.ceil(x);
// console.log(x);


// let x = 3; // kvadrat broja
// x = Math.pow(x, 2);
// console.log(x);


// let x = 9; // korijen broja
// x = Math.sqrt(x);
// console.log(x);


// let x = -3.14; // apsolutna vrijednost broja
// x = Math.abs(x);
// console.log(x);


// let x = -3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// maximum = Math.max(x, y, z); // maksimalna vrijednost
// minimum = Math.min(x, y, z); // minimalna vrijednost

// console.log(maximum);
// console.log(minimum);


// x = Math.PI;
// console.log(x);



















// #6 const

// a variable that can't be changed

// let pi = 3.14159;

// const PI = 3.14159; // praksa je da se koriste velika slova kod deklarisanja konstanti
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// // PI = 10; // pojavit ce se error u konzoli zato sto ne mozemo ponovo deklarisati konstantu

// circumference = 2 * PI * radius;

// console.log("The circumference is:", circumference);


















// #5 Type conversion 

// change the datatype of a value to another
// (strings, numbers, boolens)
   

// 1. primjer

// let age = window.prompt("How old are you?");

// console.log(typeof age);
// age = Number(age); // ovo ce da konvertuje string u broj
// console.log(typeof age);
// age += 1;

// console.log("Happy birthday! You are", age, "years old");



// 2. primjer

// let x;
// let y;
// let z;
// let t;
// let nan;

// nan = Number("Kerim"); // u konzoli ce pisati NaN zato sto konvertujemo slova u broj
// x = Number("3.14");
// y = String(3.14);
// z = Boolean(""); // boolean vrijednost ce da bude false posto imamo prazne stringove
// t = Boolean("Imamovic"); // boolean vrijednost ce da bude true posto imamo vrijednost u stringovima

// console.log(nan, typeof nan);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// console.log(t, typeof t);



















// #4 User input

// How to accept user input

// Easy way with a window prompt

// let username = window.prompt("What's your name?");
// console.log(username);


// difficult way HTML textbook

// let username;

// document.getElementById("myButton").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }










// #3 Arithmetic expressions 

/* arithmetic expression is a combination of... 
  operands (values, variables, etc...)
  operators (+ - * / % )
  that can be evaluated to a value
  ex. y = x + 5;
*/

// let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;

// let extraStudents = students % 3; //remainder

// newStudents = students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

// console.log(students);
// console.log(newStudents);
// console.log(extraStudents);

/* 
    operator precendence
    1. parenthesis ()
    2. exponents
    3. multiplication & divison
    4. additon & subtraction
*/

// let result = 1 + 2 * (1+2)**2;
// console.log(result);












// #2 Variables

// A variable is a container for storing data
// A varibale behaves as if it was the value that it contains

//Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (assignment operator)
// Descriptive variable

// strings, numbers and booleans

//let age; 
//age = 25;
// let firstName = "Kerim"; // strings

// let age = 25; // numbers
//age = age + 1;

// let student = false; // boolean


// console.log(firstName);
// console.log(age);
// console.log(student);

// console.log("Hello", firstName);
// console.log("You are", age);
// console.log("Enrolles:", student);
// Ako ne dodamo nikakvu vrijednost onda ce biti nedefinisano

// DOM
// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + "years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;











// #1 Introduction to javascript

//console.log("Kerim");
//console.log("Imamovic");

//window.alert('My name is Kerim Imamovic');

// This is a comment

/* 
This 
is 
a
multiline 
commment 
*/
