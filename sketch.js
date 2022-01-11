var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blastImage;

function preload() {
  backgroundImage = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/background.png");
  car1_img = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/car1.png");
  car2_img = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/car2.png");
  track = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/track.jpg");
  fuelImage = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/fuel.png");
  powerCoinImage = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/goldCoin.png");
  obstacle1Image = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/obstacle1.png");
  obstacle2Image = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/obstacle2.png");
  lifeImage = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/life.png");
  blastImage = loadImage("https://vajraadityavijay.github.io/WhJr_Car-Racer/assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
