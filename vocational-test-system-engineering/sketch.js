let jugador;
let botonesNivel1_2;
let botonesNivel3_4_5_6;
let botonesAccion;
let botonInicio;

let posicionJugadorNivel1;
let posicionJugadorNivel2;

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
  posicionJugadorNivel2 = false;

  botonInicio = new Botones();

  //LlEGADA DE LOS BOTONES PARA EJECUTARSE
  botonesAccion = [];

  //Array llamada de los botones
  botonesNivel1_2 = [];

  botonesNivel1_2.push(new Boton_Der());
  botonesNivel1_2.push(new Boton_Izquierda());
  botonesNivel1_2.push(new Boton_Arriba());
  botonesNivel1_2.push(new Boton_Abajo());
  botonesNivel1_2.push(new Boton_Llegada());

  botonesNivel3_4_5_6 = [];

  botonesNivel3_4_5_6.push(new Boton_Der());
  botonesNivel3_4_5_6.push(new Boton_Izquierda());
  botonesNivel3_4_5_6.push(new Boton_Arriba());
  botonesNivel3_4_5_6.push(new Boton_Abajo());
  botonesNivel3_4_5_6.push(new Boton_Llegada());
  botonesNivel3_4_5_6.push(new Boton_Loop());

  //botones.push(new Boton_Arriba())

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
    recorridoArreglo();
  }

  if (screen === 3 || screen === 4) {
    agregarAcciones(botonesNivel1_2);
  } else if (screen > 4) {
    agregarAcciones(botonesNivel3_4_5_6);
  }
}

function agregarAcciones(array) {
  array.forEach((boton) => {
    if (dist(mouseX, mouseY, boton.getX() + 30, boton.getY() + 30) < 30) {
      if (boton.name === "derecha") {
        botonesAccion.push(new Boton_Der());
      } else if (boton.name === "arriba") {
        botonesAccion.push(new Boton_Arriba());
      } else if (boton.name === "abajo") {
        botonesAccion.push(new Boton_Abajo());
      } else if (boton.name === "izquierda") {
        botonesAccion.push(new Boton_Izquierda());
      } else if (boton.name === "llegada") {
        botonesAccion.push(new Boton_Llegada());
      } else {
        botonesAccion.push(new Boton_Loop());
      }
    }
  });
}

function recorridoArreglo() {
  botonesAccion.forEach((boton) => {
    if (
      boton.name === "derecha"
    ) {
      //screen += 1;
      jugador.setCol(jugador.getCol() + 1);
      console.log(screen);
      //jugador.setCol(jugador.getCol() + 1);
    } else if (
      boton.name === "izquierda"
    ) {
      console.log(screen);
      jugador.setCol(jugador.getCol() - 1);
    } else if (
      boton.name === "arriba"
    ) {
      console.log(screen);
      jugador.setFil(jugador.getFil() - 1);
    } else if (
      boton.name === "abajo"
    ) {
      console.log(screen);
      jugador.setFil(jugador.getFil() + 1);
    } 
  });
  console.log(terreno.getLocacion(jugador.getFil(), jugador.getCol()) );
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

  terreno.mostrar();

  if(terreno.getLocacion(jugador.getFil(),jugador.getCol())===1){
    screen += 1;
    botonesAccion = [];
  } else if (terreno.getLocacion(jugador.getFil(),jugador.getCol()) === 2){
    screen += 2;
    botonesAccion = [];
  }


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

      botonesNivel1_2.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(1);
        jugador.setFil(1);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.reiniciar();
      terreno.terrenoPrimerNivel(0);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      //background(255, 20, 255);
      break;

    case 4:
      //nivel 2

      botonesNivel1_2.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      jugador.show();
      terreno.reiniciar();
      terreno.terrenoPrimerNivel(1);

      if (posicionJugadorNivel2 == false) {
        jugador.setCol(4);
        jugador.setFil(1);
        posicionJugadorNivel2 = true;
      }

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });
      break;

    case 5:
      //nivel 3

      botonesNivel3_4_5_6.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      /*
      if (posicionJugadorNivel1 == false) {
        

        posicionJugadorNivel1 = true;
      }*/

      jugador.setCol(4);
      jugador.setFil(3);

      jugador.show();
      terreno.reiniciar();
      terreno.terrenoPrimerNivel(2);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;
    case 6:
      //nivel 4

      botonesNivel3_4_5_6.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(1);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.reiniciar();
      terreno.terrenoPrimerNivel(3);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;

    case 7:
      //nivel 5

      botonesNivel3_4_5_6.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(3);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.reiniciar();
      terreno.terrenoPrimerNivel(4);

      //Aqui es donde se debería colocar el reinicio de los arreglos
      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;

    case 8:
      //nivel 6

      botonesNivel3_4_5_6.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(4);
        jugador.setFil(1);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.reiniciar();
      terreno.terrenoPrimerNivel(5);

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;
  }
}

/*
function die(){

  
}*/
