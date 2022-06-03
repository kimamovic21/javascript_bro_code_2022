// #23 nested loops

// nested loop - a loop inside of another loop

// for (let i = 1; i <= 2; i++) { // koliko puta ce se petlja ponoviti unutar jedne petlje
//   for (let j = 1; j <= 3; j++) {
//      console.log(j);
//   } 
// }

// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt("Enter # of rows");
// let columns = window.prompt("Enter # of columns");

// for (let i = 1; i <= rows; i++) { 
//   for (let j = 1; j <= columns; j++) {
//      document.getElementById("myRectangle").innerHTML += symbol;
//   } 
//   document.getElementById("myRectangle").innerHTML += "<br>";
// }














// #22 break and continue statements

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop


// for (let i = 1; i <= 20; i+=1){
//   if( i == 13) {
//     break; // prekida petlju
//   }
//   console.log(i);
// }


// for (let i = 1; i <= 20; i+=1){
//   if( i == 13) {
//     continue; // petlja se prekida kod te vrijednosti i nastavlja dalje
//   }
//   console.log(i);
// }



















// #21 foor loops

// repeat some code a certain amount of times
// pocetna vrijednost ; krajnja vrijednost ; inkrement vrijednosti

// for (let counter = 1; counter <= 10; counter+=1) {
//   console.log(counter);
// }

// for (let i = 1; i <= 10; i+=1) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i-=1) {
//   console.log(i);
// }

// console.log("Happy New Year !");

















// #20 do while loops

// do something,
// then check the condition, 
// repeat if condition is true

// do somethin -> while condition  

// let userName;

// do {
//   userName = window.prompt("Enter you name");
// } while (userName == " ")

// console.log("Hello", userName);

















// #19 while loops 

// repeat some code while some condition is true
// potentially infinite

// let userName = "";

// while(userName == "" || userName == null) {
//   userName = window.prompt("Enter your name");
// }

// console.log("Hello", userName);
















// #18  ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true


// let temp = 15;
// if (temp > 0) {
//   console.log("It's warm outside.");
// }
// else {
//   console.log("It's cold outside.");
// }



// let temp = 15;
// let sunny = true;

// if (!(temp > 0)) { // ako uslov nije tacan ucini nesta
//   console.log("It's cold outside.");
// }
// else {
//   console.log("It's warm outside.");
// }

// if(!sunny) {
//   console.log("It's cloudy outside");
// } 
// else {
//   console.log("It's sunny outside");
// }


















// #17 And or logical operators && ||

// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (Either condition can be true)


// let temp = 20;

// if (temp > 0 && temp < 30 ) {
//   console.log("The weather is good!")
// }
// else {
//   console.log("The weather is bad!");
// }


// let temp = 10;

// if (temp <= 0 || temp >= 30) {
//   console.log("The weather is bad!");
// }
// else {
//   console.log("The weather is good!");
// }


// let temp = 15;
// let sunny = true;

// if(temp > 0 && temp < 30 && sunny) {
//   console.log("The weather is good!");
// }
// else {
//   console.log("The weather is bad!");
// }



















// #16 switches

// switch - statement that examines a value for 
// a match agains many case clauses.
// More efficient that many "else if" statements


// 1. nacin


// let grade = "A";

// if (grade == "A") {
//   console.log("You did great!");
// }
// else if (grade == "B") {
//   console.log("You did good!");
// }
// else if (grade == "C") {
//   console.log("You did okay!");
// }
// else if (grade == "D"){
//   console.log("You passed... barely!");
// }
// else if (grade == "F"){
//   console.log("You failed");
// }
// else {
//   console.log(grade, "is not a letter grade!");
// }


// switch(variable) -> case -> do something


// 2. nacin

// let grade = "A";

// switch(grade) {
//   case "A":
//     console.log("You did great!");
//     break;
//   case "B":
//     console.log("You did good!");
//     break;
//   case "C":
//     console.log("You did okay!");
//     break;
//   case "D":
//     console.log("You passed... barely!");
//     break;
//   case "F":
//     console.log("You failed!");
//     break;
//   default:
//     console.log(grade, "is not a letter grade!");
// }



// 3. nacin

// let grade = 90;

// switch(true) {
//   case grade >= 90:
//     console.log("You did great!");
//     break;
//   case grade >= 80:
//     console.log("You did good!");
//     break;
//   case grade >= 70:
//     console.log("You did okay!");
//     break;
//   case grade >= 60:
//     console.log("You passed... barely!");
//     break;
//   case grade >=50 :
//     console.log("You failed!");
//     break;
//   default:
//     console.log(grade, "is not a letter grade!");
// }


















// #15 checked property


// 1. nacin
// document.getElementById("myButton").onclick = function() {
//   if(document.getElementById("myCheckBox").checked) {
//     console.log("You are subscribed!");
//   } 
//   else {
//     console.log("You are not subscribed!")
//   }
// }


// 2. nacin
// document.getElementById("myButton").onclick = function() {

//   const myCheckBox = document.getElementById("myCheckBox");

//   const visaBtn = document.getElementById("visaBtn");
//   const mastercardBtn = document.getElementById("mastercardBtn");
//   const paypalBtn = document.getElementById("paypalBtn");

//   if(myCheckBox.checked) {
//     console.log("You are subscribed!");
//   } 
//   else {
//     console.log("You are not subscribed!")
//   }

//   if(visaBtn.checked){
//     console.log("You are paying with a Visa !");
//   }
//   else if(mastercardBtn.checked){
//     console.log("You are paying with a MasterCard !");
//   }
//   else if (paypalBtn.checked) {
//     console.log("You are paying with Paypal !");
//   }
//   else {
//     console.log("You must select a payment type!");
//   }
// }

















// #14 if statements

// A basic form of decision making if a condition is true, then do something
// If not, then don't do it !
// if -> condition -> do something



// 1. primjer

// let age = 80;

// if (age >= 65) {
//   console.log("You are a senior citizen.");
// }
// else if ( age >= 18) {
//   console.log("You are an adult.");  
// } 
// else if (age < 0) {
//   console.log("You haven't been born yet.");
// }
// else {
//   console.log("You are a child.");
// }



// 2. primjer

// let online = true;

// if(online) {
//   console.log("You are online!");
// }
// else {
//   console.log("You are offline!");
// }


















// #13 method chaining

// method chaining = calling one method after another
// in one continuous line of code

// let userName = "bro";

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let letter = userName.charAt(0).toUpperCase();
// dvije ili vise metoda u jednom redu - jednoj liniji koda

// console.log(letter);






















// #12 string slicing

// slice() extracts a section of a string and 
// return it as a new string, without modifying
// the original string

// let fullName = "Bro Code";
// let firstName;
// let lastName;

// firstName = fullName.slice(0, 3); // pocetni indeks i kranji indeks
// console.log(firstName); // u ovom primjeru pisat ce Bro u konzoli
// lastName = fullName.slice(4); // tring do 4. mjesta ce biti izbrisan 
// console.log(lastName); // u ovom primjeru pisat ce Code u konzoli

// firstName = fullName.slice(0, fullName.indexOf(" ") + 1); // obrisat ce se tekst iza praznog prostora, u konzoli ce pisati Bro
// lastName = fullName.slice(fullName.indexOf(" ") + 1); // obrisat ce tekst prije praznog prostora, u konzoli ce pisati Code

// console.log(firstName);
// console.log(lastName);



















// #11 useful string methods

// let userName = "Bro Code";
// let phoneNumber = "123-456-7890";

// let userLength = userName.length; // kolika je duzina naseg stringa
// console.log(userLength); 

// console.log(userName.length);
// console.log(userName.charAt(0)); // pozicija slova us stringu
// console.log(userName.indexOf("o")); // gdje se nalazi slovo o u stringu
// console.log(userName.lastIndexOf("o")); // zadnje mjesto u stringu gdje se nalazi slovo o
// userName = userName.trim(); // uklanja prazan prostor u stringu

// userName = userName.toUpperCase();
// console.log(userName);

// userName = userName.toLowerCase();
// console.log(userName);


// phoneNumber = phoneNumber.replaceAll("-", "/"); //dodaje / umjesto -
// console.log(phoneNumber);

















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
