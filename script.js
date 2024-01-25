//set variables (global)
let screen = 0; // Variable to keep track of the screen (0=start, 1=game, 2=end)
let y=-0; //Set vertical position of the falling ball
let x=200; // Set horizontal position of the falling ball
let speed = 2;// Starting speed of the falling ball
let score= 0; // Player's score


function setup() { //setup function, runs once at start
  createCanvas(600, 400); // Create a canvas
}

function draw() { // Draw function - runs continuously
  if(screen == 0){
    startScreen() // Display start screen if screen is 0
  }else if(screen == 1){
    gameOn()// Display game screen if screen is 1
  }else if(screen==2){
    endScreen() // Display end screen if screen is 2
  }	
}

function startScreen(){ // Function to display the start screen
    background(150, 100, 255)// Set background color
    fill(255) // Set text color to white
    textAlign(CENTER); // Center-align text
    text('WELCOME TO THE CATCHING GAME', width / 2, height / 2) // Display start message
    text('click to start', width / 2, height / 2 + 20);// Prompt to click to start
    reset();// Reset game variables
}

// Function to display the game screen
function gameOn() {
  background(0); // Set background color to black
  text("score = " + score, 30, 20); // Display the player's score
  ellipse(x, y, 20, 20); // Display the falling object (ellipse)
  rectMode(CENTER); // Set rectangle mode to center
  rect(mouseX, height - 10, 50, 30); // Display the player's paddle (rectangle)
  y += speed; // Move the falling object downward

  // Check if the falling object reached the bottom of the canvas
  if (y > height) {
    screen = 2; // Switch to the end screen
  }

  // Check if the falling object is caught by the paddle
  if (y > height - 10 && x > mouseX - 20 && x < mouseX + 20) {
    y = -20; // Reset the falling object's position
    speed += 0.5; // Increase the falling speed
    score += 1; // Increase the player's score
  }

  // If the falling object is reset at the top, pick a new random horizontal position
  if (y == -20) {
    pickRandom();
  }
}

// Function to pick a random horizontal position for the falling object
function pickRandom() {
  x = random(20, width - 20); // Set x to a random value between 20 and width-20
}

// Function to display the end screen
function endScreen() {
  background(150); // Set background color
  textAlign(CENTER); // Center-align text
  text('GAME OVER', width / 2, height / 2); // Display game over message
  text("SCORE = " + score, width / 2, height / 2 + 20); // Display player's score
  text('click to play again', width / 2, height / 2 + 40); // Prompt to click to play again
}

// Function to handle mouse click events
function mousePressed() {
  // If on the start screen, switch to the game screen; if on the end screen, switch to the start screen
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

// Function to reset game variables
function reset() {
  score = 0; // Reset score to 0
  speed = 2; // Reset falling speed to 2
  y = -20; // Reset falling object's vertical position
}
