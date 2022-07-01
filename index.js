// #88 Pong game

// const gameBoard = document.querySelector("#gameBoard");
// const context = gameBoard.getContext("2d");
// const scoreText = document.querySelector("#scoreText");
// const resetBtn = document.querySelector("#resetBtn");
// const gameWidth = gameBoard.width;
// const gameHeight = gameBoard.height;
// const boardBackground = "green";
// const paddle1Color = "lightblue";
// const paddle2Color = "red";
// const paddleBorder = "black";
// const ballColor = "yellow";
// const ballBorderColor = "black";
// const ballRadius = 20;
// const paddleSpeed = 40;

// let intervalId;
// let ballSpeed = 0.5;
// let ballX = gameWidth / 2;
// let ballY = gameHeight / 2;
// let ballXDirection = 0;
// let ballYDirection = 0;
// let player1Score = 0;
// let player2Score = 0;

// let paddle1 = {
//   width: 35,
//   height: 120,
//   x: 0,
//   y: 0
// };
// let paddle2 = {
//   width: 35,
//   height: 120,
//   x: gameWidth - 35,
//   y: gameHeight - 110
// };

// window.addEventListener("keydown", changeDirection);
// resetBtn.addEventListener("click", resetGame);

// gameStart();
// // drawPaddles();

// // 3. uredujemo gameStart funkciju
// function gameStart(){
//   createBall();
//   nextTick();
// }

// // 4. uredujemo nextTick funkciju
// function nextTick(){
//   intervalId = setTimeout(() => {
//     clearBoard();
//     drawPaddles();
//     moveBall();
//     drawBall(ballX, ballY);
//     checkCollision();
//     nextTick();
//   }, 10)
// };

// // 5. uredujemo clearBoard funkciju
// function clearBoard(){
//   context.fillStyle = boardBackground;
//   context.fillRect(0, 0, gameWidth, gameHeight);
// }

// // 1. uredujemo drawPaddles funkciju
// function drawPaddles(){
//   context.strokeStyle = paddleBorder;

//   context.fillStyle = paddle1Color;
//   context.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
//   context.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

//   context.fillStyle = paddle2Color;
//   context.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
//   context.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
// };

// // 8. uredujemo createBall funkciju
// function createBall(){
//   ballSpeed = 1;
//   if(Math.round(Math.random()) == 1){
//     ballXDirection = 1;
//   } 
//   else {
//     ballXDirection = -1;
//   }
//   if(Math.round(Math.random()) == 1){
//     ballYDirection = 1;
//   } 
//   else {
//     ballYDirection = -1;
//   }
//   ballX = gameWidth / 2;
//   ballY = gameHeight / 2;
//   drawBall(ballX, ballY);
// };

// // 9. uredujemo moveBall funkciju
// function moveBall(){
//   ballX += (ballSpeed * ballXDirection);
//   ballY += (ballSpeed * ballYDirection);
// }

// // 7. uredujemo drawBall funkciju
// function drawBall(ballX, ballY){
//   context.fillStyle = ballColor;
//   context.strokeStyle = ballBorderColor;
//   context.lineWidth = 2;
//   context.beginPath();
//   context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
//   context.stroke();
//   context.fill();
// }

// // 10. uredujemo checkCollision funckiju
// function checkCollision(){
//   if(ballY <= 0 + ballRadius) {
//     ballYDirection *= -1;
//   }
//   if(ballY >= gameHeight - ballRadius){
//     ballYDirection *= -1;
//   }
//   if(ballX <= 0){
//     player2Score+=1;
//     updateScore();
//     createBall();
//     return;
//   }
//   if(ballX >= gameWidth){
//     player1Score+=1;
//     updateScore();
//     createBall();
//     return;
//   }
//   if (ballX <= (paddle1.x + paddle1.width + ballRadius)){
//     if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
//       ballX = (paddle1.x + paddle1.width + ballRadius); //if ball gets stuck
//       ballXDirection *= -1;
//       ballSpeed += .5;
//     }
//   }
//   if (ballX >= (paddle2.x - ballRadius)){
//     if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
//       ballX = paddle2.x - ballRadius; // if ball gets stuck
//       ballXDirection *= -1;
//       ballSpeed += .5;
//     }
//   }
// }

// // 6. uredujemo changeDirection funkciju
// function changeDirection(event){
//   const keyPressed = event.keyCode;
//   // console.log(keyPressed);
//   const paddle1Up = 87;
//   const paddle1Down = 83;
//   const paddle2Up = 38;
//   const paddle2Down = 40;

//   switch(keyPressed){
//     case(paddle1Up):
//       if(paddle1.y > 0) {
//         paddle1.y -= paddleSpeed;
//       }
//       break;
//     case(paddle1Down):
//       if(paddle1.y < gameHeight - paddle1.height) {
//         paddle1.y += paddleSpeed;
//       }
//       break;
//     case(paddle2Up):
//       if(paddle2.y > 0) {
//         paddle2.y -= paddleSpeed;
//       }
//       break;
//     case(paddle2Down):
//       if(paddle2.y < gameHeight - paddle2.height) {
//         paddle2.y += paddleSpeed;
//       }
//       break;
//   }
// };

// // 11. uredujemo updateScore funkciju
// function updateScore(){
//   scoreText.textContent = `${player1Score} : ${player2Score}`;
// };

// // 12. uredujemo resetGame funkciju
// function resetGame(){
//   player1Score = 0;
//   player2Score = 0;
//   paddle1 = {
//     width: 35,
//     height: 120,
//     x: 0,
//     y: 0
//   };
//   paddle2 = {
//     width: 35,
//     height: 120,
//     x: gameWidth - 35,
//     y: gameHeight - 120
//   };
//   ballSpeed = 0.5;
//   ballX = 0;
//   ballY = 0;
//   ballXDirection = 0;
//   ballYDirection = 0;
//   updateScore();
//   clearInterval(intervalId);
//   gameStart();
// };













// #87 Snake game

// const gameBoard = document.querySelector("#gameBoard");
// const context = gameBoard.getContext("2d");
// const scoreText = document.querySelector("#scoreText");
// const resetBtn = document.querySelector("#resetBtn");
// const gameWidth = gameBoard.width;
// const gameHeight = gameBoard.height;
// const boardBackground = "white";
// const snakeColor = "lightgreen";
// const snakeBorder = "black";
// const foodColor = "red";
// const unitSize = 15;

// let running = false;
// let xVelocity = unitSize;
// let yVelocity = 0;
// let foodX;
// let foodY;
// let score = 0;
// let snake = [
//   {x:unitSize * 4, y:0},
//   {x:unitSize * 3, y:0},
//   {x:unitSize * 2, y:0},
//   {x:unitSize * 1, y:0},
//   {x:0, y:0}
// ]

// window.addEventListener("keydown", changeDirection);
// resetBtn.addEventListener("click", resetGame);

// gameStart();

// // 3. uredujemo gameStart funkciju
// function gameStart(){
//   running = true;
//   scoreText.textContent = score;
//   createFood();
//   drawFood();
//   nextTick();
// };

// // 4. uredujemo nextTick funkciju
// function nextTick(){
//   if(running){
//     setTimeout(() => {
//       clearBoard();
//       drawFood();
//       moveSnake();
//       drawSnake();
//       checkGameOver();
//       nextTick();
//     }, 75);
//   }
//   else {
//     displayGameOver();
//   }
// };

// // 5. uredujemo ClearBoard funkciju
// function clearBoard(){
//   context.fillStyle = boardBackground;
//   context.fillRect(0, 0, gameWidth, gameHeight);
// };

// // 1. uredujemo createFood funkciju
// function createFood(){
//   function randomFood(min, max){
//     const randNum = Math.round((Math.random() * (max - min) + min) / unitSize ) * unitSize;
//     return randNum;
//   }
//   foodX = randomFood(0, gameWidth - unitSize);
//   foodY = randomFood(0, gameWidth - unitSize);
//   // console.log(foodX);
// };

// // 2. uredujemo drawFood funkciju
// function drawFood(){
//   context.fillStyle = foodColor;
//   context.fillRect(foodX, foodY, unitSize, unitSize);
// };

// // 7. uredujemo moveSnake funkciju
// function moveSnake(){
//   const head = {x: snake[0].x + xVelocity,
//                 y: snake[0].y + yVelocity};

//   snake.unshift(head);
//   // if food is eaten
//   if(snake[0].x == foodX && snake[0].y == foodY) {
//     score+=1;
//     scoreText.textContent = score;
//     createFood();
//   }
//   else {
//     snake.pop();
//   }
// };

// // 6. uredujemo drawSnake funkciju
// function drawSnake(){
//   context.fillStyle = snakeColor;
//   context.strokeStyle = snakeBorder;
//   snake.forEach(snakePart => {
//     context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
//     context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
//   });
// };

// // 8. uredujemo changeDirection funkciju
// function changeDirection(event){
//   const keyPressed = event.keyCode;
//   const LEFT = 37;
//   const UP = 38;
//   const RIGHT = 39;
//   const DOWN = 40;

//   const goingUp = (yVelocity == -unitSize);
//   const goingDown = (yVelocity == unitSize);
//   const goingRight = (xVelocity == unitSize);
//   const goingLeft = (xVelocity == -unitSize);

//   switch(true){
//     case(keyPressed == LEFT && !goingRight):
//       xVelocity = -unitSize;
//       yVelocity = 0;
//       break;
//     case(keyPressed == UP && !goingDown):
//       xVelocity = 0;
//       yVelocity = -unitSize;
//       break;
//     case(keyPressed == RIGHT && !goingLeft):
//       xVelocity = unitSize;
//       yVelocity = 0;
//       break;
//     case(keyPressed == DOWN && !goingUp):
//       xVelocity = 0;
//       yVelocity = unitSize;
//       break;
//   }
// };

// // 9. uredujemo checkGameOver funkciju
// function checkGameOver(){
//   switch(true){
//     case (snake[0].x < 0):
//       running = false;
//       break;
//     case (snake[0].x >= gameWidth):
//       running = false;
//       break;
//     case(snake[0].y < 0):
//       running = false;
//       break;
//     case(snake[0].y >= gameHeight):
//       running = false;
//       break;
//   }
//   for(let i = 1; i < snake.length; i+=1){
//     if(snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
//       running = false;
//     }
//   }
// };

// // 10. uredujemo displayGameOver funkciju
// function displayGameOver(){
//   context.font = "50px MV Boli";
//   context.fillStyle = "black";
//   context.textAlign = "center";
//   context.fillText("Game over!", gameWidth / 2, gameHeight / 2);
//   running = false;
// };

// // 11. uredujemo resetGame funkciju
// function resetGame(){
//   score = 0;
//   xVelocity = unitSize;
//   yVelocity = 0;
//   snake = [
//     {x:unitSize * 4, y:0},
//     {x:unitSize * 3, y:0},
//     {x:unitSize * 2, y:0},
//     {x:unitSize * 1, y:0},
//     {x:0, y:0}
//   ];
//   gameStart();
// }























// #86 Tic Tac Toe game

// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];
// let options = ["","","","","","","","",""];
// let currentPlayer = "X";
// let running = false;

// initializeGame();

// function initializeGame() {
//   cells.forEach(cell => cell.addEventListener("click", cellClicked))
//   restartBtn.addEventListener("click", restartGame);
//   statusText.textContent = `${currentPlayer}'s turn`;
//   running = true;
// }

// function cellClicked() {
//   const cellIndex = this.getAttribute("cellIndex");
//   if(options[cellIndex] != "" || !running) {
//     return;
//   }

//   updateCell(this, cellIndex);
//   // changePlayer();
//   checkWinner();
// }

// function updateCell(cell, index) {
//   options[index] = currentPlayer;
//   cell.textContent = currentPlayer;
// }

// function changePlayer() {
//   currentPlayer = (currentPlayer == "X") ? "O" : "X";
//   statusText.textContent = `${currentPlayer}'s turn`;
// }

// function checkWinner() {
//   let roundWon = false;
//   for(let i = 0; i < winConditions.length; i++) {
//     const condition = winConditions[i];
//     const cellA = options[condition[0]];
//     const cellB = options[condition[1]];
//     const cellC = options[condition[2]];
//     if(cellA == "" || cellB == "" || cellC == ""){
//       continue;
//     }
//     if(cellA == cellB && cellB == cellC){
//       roundWon = true;
//       break;
//     }
//   }
//   if (roundWon) {
//     statusText.textContent = `${currentPlayer} wins!`;
//     running = false;
//   }
//   else if(!options.includes("")){
//     statusText.textContent = `Draw!`;
//     running = false;
//   }
//   else {
//     changePlayer();
//   }
// }

// function restartGame() {
//   currentPlayer = "X";
//   options = ["","","","","","","","",""];
//   statusText.textContent = `${currentPlayer}'s turn`;
//   cells.forEach(cell => cell.textContent = "");
//   running = true;
// }




















// #85 Rock - paper - scissors game

// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// const choiceBtns = document.querySelectorAll(".choiceBtn");

// let player;
// let computer;
// let result;

// choiceBtns.forEach(button => button.addEventListener("click", () => {

//   player = button.textContent;
//   computerTurn();
//   playerText.textContent = `Player: ${player}`;
//   computerText.textContent = `Computer: ${computer}`;

//   resultText.textContent = checkWinner();
// }));

// function computerTurn() {
//   const randNum = Math.floor(Math.random() * 3) + 1;
//   switch(randNum) {
//     case 1:
//       computer = "ROCK";
//       break;
//     case 2: 
//       computer = "PAPER";
//       break;
//     case 3:
//       computer = "SCISSORS";
//       break;
//   }
// }

// function checkWinner() {
//   if(player == computer) {
//     return "Draw!";
//   }
//   else if(computer == "ROCK") {
//     return (player == "PAPER") ? "You win!" : "You lose!";
//   }
//   else if(computer == "PAPER") {
//     return (player == "SCISSORS") ? "You win!" : "You lose!";
//   }
//   else if(computer == "SCISSORS") {
//     return (player == "ROCK") ? "You win!" : "You lose!";
//   }
// }


















// #84 Stopwatch game

// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//   if(paused) {
//     paused = false;
//     startTime = Date.now() - elapsedTime;
//     intervalId = setInterval(updateTime, 1000)
//   }
// });

// pauseBtn.addEventListener("click", () => {
//   if(!paused) {
//     paused = true;
//     elapsedTime = Date.now() - startTime;
//     clearInterval(intervalId);
//   }
// });

// resetBtn.addEventListener("click", () => {
//   paused = true;
//   clearInterval(intervalId);
//   startTime = 0;
//   elapsedTime = 0;
//   currentTime = 0;
//   hrs = 0;
//   mins = 0;
//   secs = 0;
//   timeDisplay.textContent = "00:00:00";
// });

// function updateTime() {
//   elapsedTime = Date.now() - startTime;

//   secs = Math.floor((elapsedTime / 1000) % 60);
//   mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

//   secs = pad(secs);
//   mins = pad(mins);
//   hrs = pad(hrs);

//   timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

//   function pad(unit) {
//     return (("0") + unit).length > 2 ? unit : "0" + unit
//   }
// }














// #83 cookies

// cookies - a small text file stored on your computer
// used to remember information about the user saved in
// name=value pairs


// 4. primjer

// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//   setCookie("firstName", firstText.value, 365);
//   setCookie("lastName", lastText.value, 365);
// });

// cookieBtn.addEventListener("click", () => {
//   firstText.value = getCookie("firstName");
//   lastText.value = getCookie("lastName");
// });

// function setCookie(name, value, daysToLive) {
//   const date = new Date();
//   date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// function deleteCookie(name) {
//   setCookie(name, null, null);
// }

// function getCookie(name) {
//   const cDecoded = decodeURIComponent(document.cookie);
//   const cArray = cDecoded.split("; ");
//   let result = null; 

//   cArray.forEach( element => {
//     if(element.indexOf(name) == 0) {
//       result = element.substring(name.length + 1)
//     }
//   })
//   return result;
// }




// 3. primjer

// setCookie("firstName", "SpongeBob", 365);
// setCookie("lastName", "Squarepants", 365);

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

// function setCookie(name, value, daysToLive) {
//   const date = new Date();
//   date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// function deleteCookie(name) {
//   setCookie(name, null, null);
// }

// function getCookie(name) {
//   const cDecoded = decodeURIComponent(document.cookie);
//   const cArray = cDecoded.split("; ");
//   let result = null; 

//   cArray.forEach( element => {
//     if(element.indexOf(name) == 0) {
//       result = element.substring(name.length + 1)
//     }
//   })
//   return result;
// }





// 2. primjer

// setCookie("email", "Sponge@gmail.com", 365);
// console.log(document.cookie);

// function setCookie(name, value, daysToLive) {
//   const date = new Date();
//   date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// function deleteCookie(name) {
//   setCookie(name, null, null);
// }

// deleteCookie("firstName");
// deleteCookie("lastName");
// deleteCookie("email");



// 1. primjer

// console.log(navigator.cookieEnabled);
// document.cookie = "firstName=SpongeBog; expires=Sun, 1 January 2023 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2023 12:00:00 UTC; path=/";
// console.log(document.cookie);











// #82 window object

// window - interface used to talk to the web browser
// the DOM is a property of the window


// 5. primjer

// window.alert("Hello!");
// window.confirm("Press OK to continue");
// let age = window.prompt("Enter your age");
// if (age < 12) {
//   window.alert("You must be 18+ to visit this site");
//   window.close();
// }





// 4. primjer

// const myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", () => {
//   window.open("https://www.google.com")}
// );

// const closeButton = document.querySelector("#closeButton");
// closeButton.addEventListener("click", () => {
//   window.close()}
// );

// const printButton = document.querySelector("#printButton");
// printButton.addEventListener("click", () => {
//   window.print()}
// );





// 3. primjer

// console.log(window.location.href);
// console.log(window.location.hostname);
// window.location.href = "https://www.google.com"
// console.log(window.location.pathname);





// 2. primjer

// console.log(window.scrollX);
// console.log(window.scrollY);





// 1. primjer

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);
















// #81 canvas API


// Canvas API - a means for drawing graphics
// Used for animations, games, data visualization


// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");


// 5. primjer

// Draw text
// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("You win!", canvas.width/2, canvas.height/2);








// 4. primjer

// Draw circle
// (x, y, r, sAngle, eAngle, counterclockwise)

// context.fillStyle = "lightblue";
// context.lineWidth = 7;
// context.strokeStyle = "red"
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();







// 3. primjer

// Draw rectangle
// context.lineWidth = 5;
// context.fillStyle = "blue"
// context.fillRect(0, 0, 250, 250)
// context.strokeStyle = "red";
// context.strokeRect(0, 0, 250, 250);

// context.lineWidth = 5;
// context.fillStyle = "red"
// context.fillRect(0, 250, 250, 250)
// context.strokeStyle = "blue";
// context.strokeRect(0, 250, 250, 250);

// context.lineWidth = 5;
// context.fillStyle = "green"
// context.fillRect(250, 250, 250, 250)
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.lineWidth = 5;
// context.fillStyle = "black"
// context.fillRect(250, 0, 250, 250)
// context.strokeStyle = "green";
// context.strokeRect(250, 0, 250, 250);







// 2. primjer

// Draw triangle

// context.strokeStyle = "grey"
// context.fillStyle = "yellow";
// context.lineWidth = 5;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.fill();
// context.stroke();







// 1. primjer

// Draw lines

// context.strokeStyle = "purple"
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

















// #80 animations


// 4. primjer

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin); 

// function begin() {
//   let timerId = null;
//   let scaleX = 1;
//   let scaleY = 1;

//   timerId = setInterval(frame, 4);

//   function frame() {
//     if (scaleX >= 2 || scaleY >= 2) {
//       // scaleX <= 0.1 || scaleY <= 0.1
//       clearInterval(timerId); 
//     }
//     else {
//       scaleX += 0.01;
//       scaleY += 0.01;
//       // scaleX -= 0.01;
//       // scaleY -= 0.01;
//       myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//   }
//  }
// }




// 3. primjer

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin); 

// function begin() {
//   let timerId = null;
//   let degrees = 0;
//   let x = 0;
//   let y = 0;

//   timerId = setInterval(frame, 4);

//   function frame() {
//     if ( x >= 200 || y >= 200) {
//       clearInterval(timerId); 
//     }
//     else {
//      degrees+=2;
//      x += 1;
//      y += 1;
//      myAnimation.style.left = x + "px";
//      myAnimation.style.top = y + "px";
//      myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//   }
//  }
// }




// 2. primjer

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin); 

// function begin() {
//   let timerId = null;
//   let degrees = 0;

//   timerId = setInterval(frame, 4);

//   function frame() {
//     if (degrees >= 360) {
//       clearInterval(timerId); 
//     }
//     else {
//      degrees+=1;
//      myAnimation.style.transform = "rotateX("+degrees+"deg)";
//   }
//  }
// }




// 1. primjer

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin); 
//                         // event , callback function
// function begin() {
//   let timerId = null;
//   let x = 0;
//   let y = 0;

//   timerId = setInterval(frame, 4);
//   // setInterval metoda (callback , 
//   // duzina - nakon koliko sekundi zelimo da pokrenemo ovu funkciju)
//   function frame() {
//     if (x >= 200 || y >= 200) {
//       clearInterval(timerId); 
//       // clearInterval metodom se zaustavlja animacija
//     }
//     else {
//       x += 1;
//       y += 1;
//       myAnimation.style.left = x + "px";
//       myAnimation.style.top = y + "px";
//     }
//   }
// }















// #79 detect key presses


// 2. primjer

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;
// function move(event) {
//   switch(event.key) {
//     case "ArrowDown" : 
//       y+=5;
//       myDiv.style.top = y + "px";
//       break;
//     case "ArrowUp" : 
//       y-=5;
//       myDiv.style.top = y + "px";
//       break;
//     case "ArrowRight" : 
//       x+=5;
//       myDiv.style.left = x + "px";
//       break;
//     case "ArrowLeft" : 
//       x-=5;
//       myDiv.style.left = x + "px";
//       break;
//     default:
//       break;
//   }
// }




// 1. primjer

// window.addEventListener("keydown", event => console.log(event.key));



















// #78 show/hide HTML elements


// 2. primjer

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");
 
// myButton.addEventListener("click", () => {
//   console.log(myImg.style.display);
//   if(myImg.style.visibility == "hidden"){
//      myImg.style.visibility = "visible";
//   } 
//   else {
//     myImg.style.visibility = "hidden";
//   }
// });





// 1. primjer

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");
 
// myButton.addEventListener("click", () => {
//   console.log(myImg.style.display);
//   if(myImg.style.display == "none"){
//      myImg.style.display = "block";
//   } 
//   else {
//     myImg.style.display = "none";
//   }
// });


















// #77 .addEventListener

// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element
// Even the same event that invokes different functions


// 2. primjer

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue, true);

// function changeBlue() {
//   alert(`You selected ${this.id}`);
//   this.style.backgroundColor = 'lightblue';
// }





// 1. primjer

// const innerDiv = document.getElementById("innerDiv");

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);

// function changeRed() {
//   innerDiv.style.backgroundColor = "red";
// }

// function changeGreen() {
//   innerDiv.style.backgroundColor = "green";
// }






















// #76 events


// 5. primjer

// const element = document.getElementById("myDiv");
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

// function doSomething() {
//   element.style.backgroundColor = 'red';
// }

// function doSomethingElse() {
//   element.style.backgroundColor = 'lightgreen';
// }





// 4. primjer

// const element = document.getElementById("myText");
// element.onchange = doSomething; 

// function doSomething() {
//   alert("You did something");
// }



// 3. primjer

// const element = document.body;
// element.onload = doSomething;

// function doSomething() {
//   alert("You did something");
// }



// 2. primjer

// const element = document.getElementById("myButton1");
// element.onclick = doSomething;

// function doSomething() {
//   alert("You did something");
// }



// 1. primjer

// function doSomething() {
//   alert("You did something");
// }























// #75 add/change CSS properties

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "lightblue"; 
// title.style.backgroundColor = "rgb(50, 200, 250)";
// title.style.backgroundColor = "#336DFF";
// title.style.color = "rgb(50, 200, 250)"
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "2px solid red";
// title.style.display = "none";
// title.style.display = "block";

















// #74 add/change HTML elements

// .innerHTML (vulnerable to XSS attacks)
// .textContext (more secure)


// 4. primjer

// const myList = document.querySelector("#fruits");
// const listItem = document.createElement("li");
// listItem.textContent = "Mango";
// myList.append(listItem);
// myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);





// 3. pimjer (textContent)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);
 



// 2. primjer (innerHTML)

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your name");
// document.body.append(nameTag);




// 1. primjer

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = "Kerim";
// document.body.append(nameTag);




















// 73 DOM traversal


// family relationships between elements


// 6. primjer

// let element = document.querySelector("#fruits");
// let children = Array.from(element.children);
// children.forEach(child => {
//   child.style.backgroundColor = 'lightgreen'
// })

// let element1 = document.querySelector("#vegetables");
// let children1 = Array.from(element1.children);
// children1.forEach(child => {
//   child.style.backgroundColor = 'lightblue'
// })

// let element2 = document.querySelector("#desserts");
// let children2 = Array.from(element2.children);
// children2.forEach(child => {
//   child.style.backgroundColor = 'yellow'
// })



// 5. primjer

// let element = document.querySelector("#fruits");
// let child = element.children[1];
// child.style.backgroundColor = 'lightgreen';


// 4. primjer

// let element = document.querySelector("#fruits");
// let child = element.firstElementChild;
// child.style.backgroundColor = 'lightgreen';



// 3. primjer

// let element = document.querySelector("#vegetables");
// let sibling = element.nextElementSibling;
// sibling.style.backgroundColor = 'lightgreen'; 



// 2. primjer

// let element = document.querySelector("#vegetables");
// let parent = element.parentElement;
// parent.style.backgroundColor = 'lightgreen';




// 1.primjer

// let element = document.body;
// let child = element.firstElementChild;
// child.style.backgroundColor = 'lightgreen';


// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previosElementSibling
// .children[]
// Array.from(.childre)



















// #72 element selectors


// let element = document.getElementById("myTitle");
// element.style.backgroundColor = 'lightgreen';


// let fruits = document.getElementsByName("fruits");
// console.log(fruits[0]);

// fruits.forEach(fruit => {
//   if(fruit.checked) {
//     console.log(fruit.value);
//   }
// })


// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.background = 'lightgreen';


// let desserts = document.getElementsByClassName("desserts");
// desserts[0].style.backgroundColor = 'lightgreen';






// Query selector - samo jedan element (prvi)

// let title = document.querySelector("#myTitle");
// title.style.backgroundColor = 'lightgreen';

// let forAttribute = document.querySelector("[for]");
// forAttribute.style.backgroundColor = 'lightgreen';

// let listItem = document.querySelector("li");
// listItem.style.backgroundColor = 'lightgreen';

// let desserts = document.querySelector(".desserts");
// desserts.style.backgroundColor = 'lightgreen';





// Query selecotor All - svi elementi

// let elements = document.querySelectorAll("[for]");
// elements.forEach(element => {
//   element.style.backgroundColor = 'lightgreen';
// })

// let elements = document.querySelectorAll("li");
// elements.forEach(element => {
//   element.style.backgroundColor = 'lightgreen';
// })

// let elements = document.querySelectorAll("div");
// elements.forEach(element => {
//   element.style.backgroundColor = 'lightgreen';
// })

















// #71 DOM intro

// DOM - Document object model (API)
// An interface for changing the content of a page


// console.log(document);
// console.dir(document);
// console.log(document.title);
// console.log(document.URL);

// document.title = 'Title goes here';
// document.location = 'https://www.google.com';

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello";
















// #70 ES6 moduls

// The idea behind a module is that it's a file of reusable code
// We can import sections of pre written code to use whenever we want
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapters of a book


// 2. nacin importovanja

// import * as MathUtil from './math_util.js';
// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);





// 1. nacin importovanja

// import {PI, getCircumference, getArea} from './math_util.js';
// console.log(PI);

// let circumference = getCircumference(10);
// console.log(circumference);

// let area = getArea(10);
// console.log(area);















// #69 await - makes an async function wait for a Promise


// async function loadFile() {

//   let fileLoaded = true;

//   if(fileLoaded){
//     return "File loaded";
//   }
//   else {
//     throw "File NOT loaded";
//   }
// };

// async function startProcess() {
//   try {
//     let message = await loadFile();
//     console.log(message);
//   }
//   catch(error) {
//     console.log(error);
//   }
 
// }
// startProcess();













// #68 async - makes a function return a promise

// async function loadFile() {

//   let fileLoaded = true;

//   if(fileLoaded){
//     return "File loaded";
//   }
//   else {
//     throw "File NOT loaded";
//   }

// };

// loadFile().then(value => console.log(value))
//           .catch(error => console.log(error));














// #67 promises

// promise - object that encapsulates the result of 
// an asynchronous operation
// let asynchronous methods return values like 
// synchronous methods
// "I promise to return something in the future"

// the STATE is 'pending' then: 'fulfilled' or 'rejected'
// the RESULT is what can be returned
// 2 parts producing and cosuming


// 3. primjer

// const wait = time => new Promise( resolve => {
//     setTimeout(resolve, time);
// });

// wait(3000).then( () => console.log("Thanks for waiting."));





// 2. primjer

// const promise = new Promise( resolve => {
//     setTimeout(resolve, 3000);
// });

// promise.then( () => console.log("Thanks for waiting."));









// 1. primjer

// const promise = new Promise((resolve, reject) => {

//   let fileLoaded = false;

//   if(fileLoaded){
//     resolve("File loaded");
//   }
//   else {
//     reject("File NOT loaded");
//   }

// });

// promise.then(value => console.log(value))
//        .catch(error => console.log(error));
















// #66 console.time()

// console.time() - starts a timer you can use to track
// how long an operation takes
// Give each time a unique name


// 2. primjer

// // start
// console.time("Response time");

// setTimeout(() => console.log("Hello"), 3000);

// // end
// console.timeEnd("Response time");




// 1. primjer

// // start
// console.time("Response time");

// alert("Click the ok button");

// // end
// console.timeEnd("Response time");











// #65 asynchronous

// synchronous code = in an ordered sequence.
// step by step linear instructions
// (start now, finish now)

// asynchronous code = out of sequence
// example access a database
// fetch a file
// tasks that take time
// (start now, finish some time later)



// 2. primjer

// console.log("Start");
// setTimeout(() => console.log("This is asynchronous"), 3000);
// console.log("End");




// 1. primjer

// console.log("Start");
// console.log("This step is synchronous");
// console.log("End");





















// #64 Clock program

// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000);

// function update() {
//   let date = new Date();
//   myLabel.innerHTML = formatTime(date);

//   function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >=12 ? "pm" : "am";

//     hours = (hours % 12) || 12;

//     hours = formatZeroes(hours);
//     minutes = formatZeroes(minutes);
//     seconds = formatZeroes(seconds);

//     return `${hours}:${minutes}:${seconds} ${amOrPm}`
//   }

//   function formatZeroes(time) {
//     time = time.toString();
//     return time.length < 2 ? "0" + time : time;
//   }
// }



















// #63 Date objects


// The date object is used work with dates and times



// 7. primjer (DOM)

// let date = new Date();

// document.getElementById("formatDate").innerHTML = formatDate(date);
// document.getElementById("formatTime").innerHTML = formatTime(date);

// function formatDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   return `${month}/${day}/${year}`
// }

// function formatTime(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let amOrPm = hours >= 12 ? "pm" : "am";

//   hours = (hours % 12) || 12;

//   return `${hours}:${minutes}:${seconds}${amOrPm}`
// }





// 6. primjer (DOM)

// let date = new Date();

// date.setFullYear(2024);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(12);
// date.setMinutes(1);
// date.setSeconds(30);

// date = date.toLocaleString();
// document.getElementById("myDate").innerHTML = date;





// 5. primjer (DOM)

// let date = new Date();

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hours = date.getHours();
// let minutes = date.getMinutes()
// let seconds = date.getSeconds();
// let miliseconds = date.getMilliseconds();

// date = date.toLocaleString();

// document.getElementById("myLabel").innerHTML = year;
// document.getElementById("myLabel1").innerHTML = dayOfMonth;
// document.getElementById("myLabel2").innerHTML = dayOfWeek;
// document.getElementById("myLabel3").innerHTML = month;
// document.getElementById("myLabel4").innerHTML = hours;
// document.getElementById("myLabel5").innerHTML = minutes;
// document.getElementById("myLabel6").innerHTML = seconds;
// document.getElementById("myLabel7").innerHTML = miliseconds;

// console.log(date);




// 4. primjer (DOM)

 // primjer sa negativnim i pozitivnim brojem kao parametrom
// let date = new Date(1000000000000000);
// let date = new Date(-100000000000);
// let date = new Date(0);
// let date = new Date(2023, 0, 1, 2, 3, 4);
// let date = new Date("January 1, 2023, 00:00:00");
// date = date.toLocaleString();
// console.log(date);
// document.getElementById("myLabel").innerHTML = date;




// 3. primjer (DOM)

// let date = new Date();
// date = date.toLocaleString();
// console.log(date);
// document.getElementById("myLabel").innerHTML = date;





// 2. primjer

// let date = new Date();
// date = date.toLocaleString();
// console.log(date);




// 1. primjer

// let date = new Date();
// console.log(date);






















// #62 setInterval()

// setInterval() - invokes a function repeatedly after a number of miliseconds
// setInterval() - asynchronous function (doesn't pause an execution)


// let count = 0;
// let max = window.prompt("Count up to waht #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//   count+=1;
//   console.log(count);
//   if(count >= max) {
//     clearInterval(myTimer);
//   }
// }



















// #61 setTimeout()

//  setTimeout() - invokes a function after a number of miliseconds
//  setTimeout() - asynchronous function (doesn't pause execution)


// 2. primjer

// let item = "cryptocurrency";
// let price = 399.90;

// let timer1 = setTimeout(firstMessage, 2000, item, price);
// let timer2 = setTimeout(secondMessage, 4000);
// let timer3 = setTimeout(thirdMessage, 6000);

// function firstMessage(item, price) {
//   alert(`Buy this ${item} for ${price}`);
// }
// function secondMessage() {
//   alert(`This is not a scam!`);
// }
// function thirdMessage() {
//   alert(`DO IT NOW !!!`);
// }

// document.getElementById("myButton").onclick = function(){
//   clearTimeout(timer1);
//   clearTimeout(timer2);
//   clearTimeout(timer3);
//   alert(`Thanks for buying`);
// }




// 1. primjer

// setTimeout(firstMessage, 2000);
// setTimeout(secondMessage, 4000);
// setTimeout(thirdMessage, 6000);

// function firstMessage() {
//   alert(`Buy this course for $199!`);
// }
// function secondMessage() {
//   alert(`This is not a scam!`);
// }
// function thirdMessage() {
//   alert(`DO IT NOW !!!`);
// }






















// #60 error handling

// error - object with a description of something went wrong
// can't open a file
// lose connection
// user types incorrent input
// TypeError
// throw - executes a user-defined error


// 3. primjer 

// try {
//   let x = window.prompt("Enter a #");
//   x = Number(x);

//   if(isNaN(x)) throw "That wasn't a number!";
//   if(x == "") throw "That was empty!";

//   console.log(`${x} is a number`);
// }
// catch(error){
//   console.log(error);
// }
// finally{
//   console.log("This always executes!");
// }




//2. primjer

// try {
//   console.lag();
// }
// catch(error){
//   console.log(error);
// }





// 1. primjer

// console.lag()
























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
