let screen;
let startGameButton;
const maxHeight = 80;
const gridSize = 10;
let gridX;
let gridY;
const sideLength = 50;
const cubes = [];

/*
let grid = [
  [15, 15, 15],
  [15, 15, 15],
  [15, 15, 15],
];
let fileImages = [];
let xStart = 0;
let yStart = 0;
*/
function startGameAction() {
  screen += 1;
  startGameButton.hide();
  console.log("se cambio");
}
function preload() {}

function setup() {
  gridX = width / 2;
  gridY = height / 2;
  cubes.push(new cubes(0, 0, 0));
  
  screen = 0;
  createCanvas(windowWidth, windowHeight);
  background(0);

  startGameButton = createButton('<i class="material-icons">play_arrow</i>');
  startGameButton.center();
  startGameButton.position(windowWidth / 2, windowHeight / 2);
  startGameButton.child('<i class="material-icons">cloud</i>');
  startGameButton.addClass("btn");
  startGameButton.mousePressed(startGameAction);
}
function showGrid() {
  xStart = width / 2 - TILE_WIDTH / 2;
  yStart = 50;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      draw_tile(tile_images[grid[j][i]], i, j);
    }
  }
}
function draw() {
  switch (screen) {
    case 0:
      //animación
      background(0);
      break;
    case 1:
      //incio
      background(255, 20, 255);
      break;
    case 2:
      //instrucciones
      background(2, 20, 255);
      break;
    case 3:
      //nivel 0
      background(255, 20, 255);
      break;
    default:
      background(220);
      break;
  }
}
