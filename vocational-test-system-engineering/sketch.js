let jugador;
let botones;
let botonesAccion;
let botonInicio;
let botonDer;

let posicionJugadorNivel1;

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
  posicionJugadorNivel1 = false;

  botonInicio = new Botones();

  //LlEGADA DE LOS BOTONES PARA EJECUTARSE
  botonesAccion = [];

  //Array llamada de los botones
  botones = [];

  for (let index = 0; index < 5; index++) {
    botones.push(new Botones());
    //botones.push(new Boton_Arriba())
}


  //llamada del jugador
  jugador = new Jugador(1, 1);

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

function mousePressed() {
  if (dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2 + 200) < 30) {
    console.log("se le dio click");
    recorridoArreglo();
  }

  botones.forEach((boton) => {
    if (dist(mouseX, mouseY, boton.getX(), boton.getY()) < 30) {
      botonesAccion.push(new Botones());
    }
  });
}

function recorridoArreglo() {
  botonesAccion.forEach((boton) => {
    if (boton.name === "derecha") {
      jugador.setCol(jugador.getCol() + 1);
    }

    console.log(jugador.getCol);
  });
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
  botonInicio.botonInicioJuego();

  /*  fill(5, 255, 124);
  ellipse(windowWidth/2, windowHeight/2 + 200, 30, 30); */

  botones.forEach((boton, index) => {
    boton.pintarBotones(index);
    //boton.mostrarBotonDer(index)
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

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(1);
        jugador.setFil(1);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.terrenoPrimerNivel(0);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      //background(255, 20, 255);
      break;

    case 4:
      //nivel 2
      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(1);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.terrenoPrimerNivel(1);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });
      break;

    case 5:
      //nivel 3

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(3);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.terrenoPrimerNivel(2);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;
    case 6:
      //nivel 4

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(1);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.terrenoPrimerNivel(3);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;

    case 7:
      //nivel 5

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(3);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.terrenoPrimerNivel(4);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;

    case 8:
      //nivel 6

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(1);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.terrenoPrimerNivel(5);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;
  }
}
