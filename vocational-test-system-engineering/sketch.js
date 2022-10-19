let jugador;
let botones;
let botonesAccion;

let terreno;
let screen;
let startGameButton;

let xPos;
let yPos;
let pCol;
let pFil;

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
  
  //LlEGADA DE LOS BOTONES PARA EJECUTARSE
  botonesAccion = [];


  //llamada de los botones
  botones = [];
  for (let index = 0; index < 4; index++) {
    botones.push (new Botones())
  }

  //llamada del jugador
  jugador = new Jugador(0 , 0);

  //llamada de la clase mapa niveles para la definicion de los espacios de los niveles
  terreno = new mapa_niveles();
  terreno.arregloEscaque();

  gridX = width / 2;
  gridY = height / 2;
  //cubes.push(new cubes(0, 0, 0));
  
  //definicion pantalla inicial juego
  screen = 2;

  createCanvas(windowWidth, windowHeight);
  background(0);

  startGameButton = createButton('<i class="material-icons">play_arrow</i>');
  startGameButton.center();
  startGameButton.position(windowWidth / 2, windowHeight / 2);
  startGameButton.center();
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

  botones.forEach((boton, index)=> {
    boton.pintarBotones(index)
  });

  terreno.mostrar();

  switch (screen) {
    case 0:
      //animación (de momento es el botón de inicio)
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
      //nivel 1

     jugador.mostrarProtagonista(1,1);
     terreno.terrenoPrimerNivel(0);

      //background(255, 20, 255);
      break;

    case 4:
      //nivel 2
      background(255, 20, 255);
      break;

    case 5:
      //nivel 3
      background(255, 20, 255);
      break;

    default:
      background(220);
      break;
  }
}
