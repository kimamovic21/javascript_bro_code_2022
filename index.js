// #59 anonymous objects 

// anonymous objects - objects without a name
// not directy referenced
// less syntsx. No need for unique names


// 2. primjer

// class Card {
//   constructor(value, suit){
//     this.value = value;
//     this.suit = suit;
//   }
// }

// let cards = [
//              new Card("A", "Hearts"),
//              new Card("A", "Spades"),
//              new Card("A", "Diamonds"),
//              new Card("A", "Clubs"),
//              new Card("2", "Hearts"),
//              new Card("2", "Spades"),
//              new Card("2", "Diamonds"),
//              new Card("2", "Clubs")
//              ];

// cards.forEach(card => console.log(`${card.value} ${card.suit}`))

// console.log(cards[0].value + cards[0].suit);




// 1. primjer

// class Card {
//   constructor(value, suit){
//     this.value = value;
//     this.suit = suit;
//   }
// }

// let card1 = new Card("A", "Hearts");
// let card2 = new Card("A", "Spades");
// let card3 = new Card("A", "Diamonds");
// let card4 = new Card("A", "Clubs");

// let card5 = new Card("2", "Hearts");
// let card6 = new Card("2", "Spades");
// let card7 = new Card("2", "Diamonds");
// let card8 = new Card("2", "Clubs");

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

// console.log(card1.value + card1.suit);
// console.log(cards[0].value + cards[0].suit);













// #58 array of objects


// 2. primjer

// class Car {
//   constructor(model, year, color){
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   drive(){
//     console.log(`You drive the ${this.model}.`);
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// const car4 = new Car("Ferrari", 2025, "white");

// const cars = [car1, car2, car3, car4];

// startRace(cars);

// function startRace(cars) {
//   for(const car of cars) {
//     car.drive();
//   }
// }




// 1. primjer

// class Car {
//   constructor(model, year, color){
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   drive(){
//     console.log(`You drive the ${this.model}.`);
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// const cars = [car1, car2, car3];

// console.log(cars);
// console.log(cars[0]);
// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();












// #57 objects as arguments

// 2. primjer

// class Car {
//   constructor(model, year, color){
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// changeColor(car3, "gold");
// displayInfo(car3);

// function displayInfo(car) {
//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);
// }

// function changeColor(car, color){
//   car.color = color;
// }





// 1. primjer

// class Car {
//   constructor(model, year, color){
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// displayInfo(car1);

// function displayInfo(car) {
//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);
// }



















// #56 getters and setters 

// get - binds an object property to a function
// when that property is accessed

// set - binds an object property to a function
// when that property is assigned a value


// 3. primjer

// class Car {
//   constructor(power) {
//     this._gas = 25;
//     this._power = power;
//   }
//   get power() {
//     return `${this._power}hp`;
//   }
//   get gas() {
//     return `${this._gas}L (${this._gas / 50 * 100}%)`;
//   }
//   set gas(value) {
//     if (value > 50){
//       value = 50;
//     }
//     else if (value < 0) {
//       value = 0;
//     }
//     this._gas = value;
//   }
// }

// let car = new Car(400);

// car.gas = 10000000;

// console.log(car.power);
// console.log(car.gas);





// 2. primjer

// ._ - protected property

// class Car {
//   constructor(power) {
//     this._gas = 25;
//     this._power = power;
//   }
//   get power() {
//     return `${this._power}hp`;
//   }
//   get gas() {
//     return `${this._gas}L (${this._gas / 50 * 100}%)`;
//   }
// }

// let car = new Car(400);

// car.power = 100000000;

// console.log(car.power);
// console.log(car.gas);





// 1. primjer

// class Car {
//   constructor(power) {
//     this.power = power;
//   }
// }

// let car = new Car(400);

// console.log(car.power + "hp");

















// #55 super

// super - refers to the parent class
// commonly used to invoke constructor of a parent class


// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 100);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);















// #54 inheritance

// extends keyword
// inheritence - a child class can inherit all the 
// methods and properties from another class



// 2. primjer

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping.`);
//   }
// }


// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running.`);
//   }
// }


// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming.`);
//   }
// }


// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`This ${this.name} is flying.`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();



// 1. primjer

// class Rabbit {
//   alive = true;
//   name = "rabbit";

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping.`);
//   }
//   run() {
//     console.log(`This ${this.name} is running.`);
//   }
// }


// class Fish {
//   alive = true;
//   name = "fish";

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping.`);
//   }
//   swim() {
//     console.log(`This ${this.name} is swimming.`);
//   }
// }


// class Hawk {
//   alive = true;
//   name = "hawk";

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping.`);
//   }
//   fly() {
//     console.log(`This ${this.name} is flying.`);
//   }
// }














// #53 static

// static - belongs to the class, not the objects
// properties: useful for caches, fixed-configurations
// methods: useful for utility functions


// 3. primjer

// class Car {
//   static numberOfCars = 0;
//  constructor(model){
//    this.model = model;
//    Car.numberOfCars += 1;
//  }
//  static startRace(){
//   console.log("3...2...1...G0!");
//  }
// }

// const car1 = new Car("Mustamg");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");
// const car4 = new Car("Ferrari");
// const car5 = new Car("Lambo");

// Car.startRace();







// 2. primjer

// class Car {
//    static numberOfCars = 0;
//   constructor(model){
//     this.model = model;
//     Car.numberOfCars += 1;
//   }
// }

// const car1 = new Car("Mustamg");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");
// const car4 = new Car("Ferrari");
// const car5 = new Car("Lambo");

// console.log(Car.numberOfCars);

















// 1. primjer

// class Car {
//   numberOfCars = 0;
//   constructor(model){
//     this.model = model;
//     this.numberOfCars += 1;
//   }
// }

// const car1 = new Car("Mustamg");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");

// console.log(car1.numberOfCars);
// console.log(car2.numberOfCars);
// console.log(car3.numberOfCars);



















// #52 constructor

// constructor - a special method of a class,
// accepts arguments and assings properties


// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }

//   study() {
//     console.log(`${this.name} is studying.`);
//   }
// }

// const student1 = new Student("Spongebob", 30, 3.2);
// const student2 = new Student("Patrick", 35, 1.5);
// const student3 = new Student("Sandy", 27, 4.0);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();

// console.log(student3.name);
// console.log(student3.age);
// console.log(student3.gpa);
// student3.study();















// #51 class 

// class - a blueprint for creating objects
// define what properties and methods they have
// use a constructor for unique properties


// class Player {
//   score = 0;
//   pause() {
//     console.log("You paused the game.");
//   }
//   exit() {
//     console.log("You exited the game.");
//   }
// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();

// player1.score += 1;

// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player1.exit();






















// #50 this keyword

// this - reference to a particular object
// the object depends on the immediate context


// 2. primjer

// this.name = "myCoolWindow";
// console.log(this.name);




// 3. primjer

// window.name = "myCoolWindow"
// console.log(window.name);





// 1. primjer
// ako ne dodamo this keyword onda nece raditi

// const car1 = {
//   model:"Mustang",
//   color:"red",
//   year:2023,

//   drive: function() {
//     console.log(`You drive the ${this.model}.`);
//   },
// }

// const car2 = {
//   model:"Corvette",
//   color:"blue",
//   year:2024,

//   drive: function() {
//     console.log(`You drive the ${this.model}.`);
//   },
// }

// car1.drive();
// car2.drive();



















// #49 object 

// object - a group of properties and methods 
// properties - what an object has
// methods - what an object can do
// use . (dot notation) to access properties methods



// 2. primjer

// const car1 = {
//   model:"Mustang",
//   color:"red",
//   year:2023,

//   drive: function() {
//     console.log("You drive the car.");
//   },

//   brake: function() {
//     console.log("You step on the brakes.");
//   }
// }

// const car2 = {
//   model:"Corvette",
//   color:"blue",
//   year:2024,

//   drive: function() {
//     console.log("You drive the car.");
//   },

//   brake: function() {
//     console.log("You step on the brakes.");
//   }
// }

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();






// 1. primjer

// const car = {
//   model:"Mustang",
//   color:"red",
//   year:2023,

//   drive: function() {
//     console.log("You drive the car.");
//   },

//   brake: function() {
//     console.log("You step on the brakes.");
//   }
// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);

// car.drive();
// car.brake();




















// #48 maps

// Map - object that holds key-value pairs of any
// data type



// 2. primjer

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["socks", 10],
//   ["underwear", 50]  
// ]);

// store.get("t-shirt")
// store.set("hat", 40);
// store.delete("hat");
// console.log(store.has("hat"));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));



// 1. primjer

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["socks", 10],
//   ["underwear", 50]  
// ]);

// let shoppingCart = 0;
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("underwear");
// console.log(shoppingCart);

// store.forEach((value, key) => console.log(`${key} $${value}`));











// #47 nested functions

// functions inside other functions
// outer functions have access to inner functions
// inner functions are "hidden" from outside
// used in closures(future video topic)


// 2. primjer

// let userName = "Bro";
// let userInbox = 0;

// login();

// function login() {
//   displayUserName();
//   displayUserInbox();

//   function displayUserName() {
//     console.log(`Welcome: ${userName}`);
//   }
  
//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new messages`)
//   }
// }




// 1. primjer

// let userName = "Bro";
// let userInbox = 0;

// displayUserName();
// displayUserInbox();

// function login() {
//   displayUserName();
//   displayUserInbox();
// }

// function displayUserName() {
//   console.log(`Welcome: ${userName}`);
// }

// function displayUserInbox() {
//   console.log(`You have ${userInbox} new messages`)
// }






















// #46 shuffle an array

// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// shuffle(cards);

// // console.log(cards);
// cards.forEach(card => console.log(card));

// function shuffle(array) {
//   let currentIndex = array.length;
//   while(currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length )
//     currentIndex-=1;
//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// }











// #45 arrow function expressions =>

// compact alternative to a traditional function expression



// 5. primjer

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));





// 4. primjer

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort(descending);
// grades.forEach(print);

// function descending(x,y) {
//   return y - x;
// }

// function print(element) {
//   console.log(element);
// }






// 3. primjer

// const percent = (x,y) => x/y*100;

// console.log(`${percent(45, 50)}%`);






// 2.primjer

// const greeting = (userName) => {
//   console.log(`hello ${userName}`);
// }

// greeting("Bro");





// 1. primjer

// const greeting = function(userName) {
//   console.log(`hello ${userName}`);
// }

// greeting("Bro");


















// #44  function expressions

// function without a name (anonymous function)
// avoid pulluting the global scope with names
// write ih, then forget about it


// 1. primjer

// function sayHello(){
//   console.log("Hello!");
// }

// sayHello();



// 2. primjer

// const greeting = function() {
//   console.log("Hello");
// }

// greeting();




// 3. primjer

// let count = 0

// function increaseCount() {
//   count+=1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount() {
//   count-=1;
//   document.getElementById("myLabel").innerHTML = count;
// }




// 4. primjer

// let count = 0;

// document.getElementById("increaseButton").onclick = function() {
//   count+=1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("decreaseButton").onclick = function() {
//   count-=1;
//   document.getElementById("myLabel").innerHTML = count;
// }



















// #43 sort an array of numbers

// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(descendingSort);
// grades = grades.sort(ascendingOrder);

// grades.forEach(print);

// function descendingSort(x, y) {
//   return y - x;
// }

// function ascendingOrder(x, y) {
//   return x - y;
// }

// function print(element) {
//   console.log(element);
// }



















// #42 array.reduce()

// reduces an array to a single value

// let prices = [5, 10 ,15, 20, 25, 30];
// let total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(total, element) {
//   return total + element;
// }

















// #41 array.filter()

// creates a new array with all elements that pass the
// test provided by a function


// let ages = [18, 16, 21, 17, 19, 30];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }
















// #40 array.map()

// executes a provided callback function once for each
// array element and creates a new array

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube)

// squares.forEach(print);
// cubes.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// function print(element) {
//   console.log(element);
// }




















// #39 arrays.forEach()

// executes a provided callback function once for 
// each array element


// let students = ["spongebob", "patrick", "squidward"];
// students.forEach(capitalize);

// students.forEach(print);

// function capitalize(element, index, array) {
//    array[index] = element[0].toUpperCase() + element.substring(1);
// }

// console.log(students[0]);

// function print(element) {
//     console.log(element);
// }
















// #38 callback 

// a function passed as an argument to another function
// Ensures that a function is not going to run before a
// task is completed.
// Helps us develop asynchronous code.
// (When one function has to wait for another function)
// that helps us avoid errors and potential problems
// example: wait for a file to load


// 1. primjer

// let total = sum(2,3);
// displayConsole(total);
// displayDOM(total);

// function sum(x, y) {
//   let result = x + y;
//   return result;
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }



// 2. primjer

// sum(2, 3, displayConsole);
// sum(2, 3, displayDOM);


// function sum(x, y, callBack) { // mozemo staviti i drugo ime parametra callBack
//   let result = x + y;
//   callBack(result);
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

















// #37 rest parameters

// represents an indefinite number of parameters
// (packs arguments into an array)


// 1. primjer

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum1(a, b));
// console.log(sum2(a, b, c));
// console.log(sum3(a, b, c ,d));

// function sum1(a, b) {
//   return a + b;
// }

// function sum2(a, b, c) {
//   return a + b + c;
// }

// function sum3(a, b, c, d) {
//   return a + b + c + d;
// }


// 2. primjer


// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// function sum(...numbers) { // ovdje mozemo dodati sum(x, y, ...numbers) respektivno
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }


















// #36 spread operator

// allows an iterable such as an array or string to be
// expanded in places where zero or more arguments are expected 
// (unpacks the elements)


// 1. primjer

// let userName = "Bro Code";
// let numbers = [1,2,3,4,5,6,7,8,9];

// console.log(numbers);
// console.log(...numbers);
// console.log(...userName);



// 2. primjer

// let numbers = [0,1,2,3,4,5,6,7,8,9,10];

// let maximum = Math.max(numbers);
// let maximum = Math.max(...numbers);
// console.log(maximum);




// 3. primjer

// let class1 = ["SpongeBob", "Patrick", "Sandy"];
// let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

// console.log(class1);
// console.log(class2);

// class1.push(class2);
// class1.push(...class2);

// console.log(...class1);
// console.log(...class2);



















// #35 2D arrays 

// An array of arrays

// let fruits     = ["apple", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats      = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[0][0] = "mangoes"; // prvi indeks je red a drugi indeks je kolona
// groceryList[0][2] = "kiwies";
// groceryList[2][0] = "steak";
// groceryList[2][2] = "steak";

// for(let list of groceryList) {
//   for(let food of list) {
//     console.log(food);
//   }
// }

// console.log(list);
// console.log(groceryList);




















// #34 sort an array of strings

// let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort(); // poredani po engleskom alfabetu
// fruits = fruits.sort().reverse(); // poredani otpozada po engleskom alfabetu

// for (let fruit of fruits) {
//   console.log(fruit);
// }
























// #33 loop through an array

// let prices = [5, 10, 15, 20, 25];

// for (let i = 0; i < prices.length; i+=1) {
//   console.log(prices[i]);
// }


// for (let i = prices.length - 1; i >= 0; i-=1) {
//   console.log(prices[i]);
// }


// for (let i of prices) {
//   console.log(i);
// }


// for (let price of prices) { // ovo je vise deskriptivno nego prethodni primjer
//   console.log(price);
// }























// #32 arrays

// think of it as a variable that can store multiple values



// 1. primjer

// let fruits = ["apple", "orange", "banana"];

// console.log(fruits);
// console.log(fruits[0]);




// 2. primjer

// let fruits = ["apple", "orange", "banana"];

// fruits[0] = "coconut"; // ako hocemo da promjenimo neku stavku u nizu

// console.log(fruits);




// 3. primjer

// let fruits = ["apple", "orange", "banana"];

// fruits.push("lemon");    // add an element
// fruits.pop();            // removes last element
// fruits.unshift("mango"); // add element to beginning
// fruits.shift();          // removes element from beginning

// let length = fruits.length;
// let index = fruits.indexOf("apple");
// let indexKiwi = fruits.indexOf("kiwi");

// console.log(fruits);
// console.log(length);
// console.log(index);
// console.log(indexKiwi); // negativan broj zato sto ne postoji u nizu
























// #31 temperature conversion program


// 2. primjer

// document.getElementById("submitButton").onclick = function() {

//   let temp;

//   if(document.getElementById("cButton").checked) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toCelsius(temp);
//     document.getElementById("tempLabel").innerHTML = temp + "C";
//   } 
//   else if(document.getElementById("fButton").checked) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toFahrenheit(temp);
//     document.getElementById("tempLabel").innerHTML = temp + "F";
//   } 
//   else {
//     document.getElementById("tempLabel").innerHTML = "Select a unit";
//   }

// }
 

// function toCelsius(temp) {
//   return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp) {
//   return temp * 9 / 5 + 32;
// }





// 1. primjer

// let temp = 32;
// // temp = toCelsius(temp);
// temp = toFahrenheit(temp);
// console.log(temp);

// function toCelsius(temp) {
//   return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp) {
//   return temp * 9 / 5 + 32;
// }
















// #30 number guessing game

// const answer = Math.floor(Math.random() * 10 + 1); // random number between 1 and 10
// let guesses = 0;

// document.getElementById("submitButton").onclick = function() {

//     let guess = document.getElementById("guessField").value;
//     guesses+=1;

//     if (guess == answer) {
//       alert(`${answer} is the number. It took you ${guesses} guesses`);
//     }
//     else if (guess < answer) {
//       alert("Tooo small...");
//     }
//     else {
//       alert("Too large...");
//     }

// }


















// #29 toLocaleString()

// returns a string with a language sensitive representation
// of this number

// number.toLocaleString(locale, {otions});

// 'locale' - specity that language
//  (undefined - default set in browser)
// 'options' - object with formatting options


// 1. primjer

// let myNum = 123456.789;

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // hindi India
// myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});



// 2. primjer

// let myNum = 10;

// myNum = myNum.toLocaleString(undefined, {style:"percent"});

// console.log(myNum);



// 3. primjer

// let myNum = 100;

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

// console.log(myNum);



















// #28 Template literals 

// delimited with (`)
// instead of double or signle quotes
// allows embedded variables and expressions

// let userName = 'Kerim';
// let items = 3;
// let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in you cart");
// console.log("Your total is $", total);

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} in you cart`);
// console.log(`Your total is $${total}`);

// let text = 
// `Hello ${userName}. <br>
// You have ${items} in you cart. <br>
// Your total is $${total}`;

// console.log(text);

// document.getElementById("myLabel").innerHTML = text;














// #27 var vs let

// variable scope - where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function() {}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)


// 1. primjer

// for (let i = 1; i <=3; i+=1) {
//   // console.log(i); // i je definisano
// }

// console.log(i); // i nije definisano


// 2. primjer

// let name = 'Bro'; // global variable

// doSomething();

// function doSomething() {
//   for (var i = 1; i <=3; i+=1) {
//     // console.log(i); 
//   }
// }

// ovaj dio sam ubacio u funkciju iznad
// for (var i = 1; i <=3; i+=1) {
//   // console.log(i); 
// }

// console.log(i);


// 3. primjer

// var name = "Bro"; // ukucati window u konzoli pretrazivaca
// var moze utjecati na izmjenu default vrijednost pretrazivaca
// let name = "Bro";


















// #26 ternary operator

// shortcut for an 'if/else statement'
// takes 3 operands: 
// 1. a condition with ?
// 2. expression if true :
// 3. expression if false

// condition ? expression(true) : expression(false)


// 1. primjer

// let adult = checkAge(21);
// console.log(adult);

// function checkAge(age) {
//   if ( age >= 18) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }


// 2. primjer

// let adult = checkAge(21);
// console.log(adult);

// function checkAge() {
//   return age >= 18 ? true : false;
// }


// 3. primjer

// checkWinner(true);

// function checkWinner(win) {
//   win ? console.log('You win!') : console.log('You lose');
// }

















// #25 return statement

//returns a value back to the place where you invoked a function


// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:", area);

// function getArea(width, height) {
//     let result = width * height;
//     // return width * height;
//     return result;
// }


















// #24 functions ()

// Define code once, and use it many times
// To perform some code, call the function name


// 1. primjer

// let userName = "Bro";
// let age = 21;

// function happyBirthday() {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday dear", userName);
//   console.log("Happy birthday to you!");
//   console.log("You are", age, "years old.");
// }

// happyBirthday(); // invoke function
// happyBirthday();
// happyBirthday();



// 2. primjer

// startProgram();

// function startProgram() {
//   let userName = "Bro";
//   let age = 21;
//   happyBirthday(userName, age); // arguments
// }

// function happyBirthday(userName, age) { // parameters
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday dear", userName);
//   console.log("Happy birthday to you!");
//   console.log("You are", age, "years old.");
// }

// raspored argumenata i parametara je bitan


















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
