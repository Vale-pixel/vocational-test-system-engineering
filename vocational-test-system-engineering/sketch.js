let jugador;
let botonesNivel1_2;
let botonesNivel3_4_5_6;
let botonesAccion;
let botonInicio;
let botonBorrar;

let score = 0;

let funcionMovimientoJugador = 0;

let fondoN1;
let fondoN2;
let fondoN3;
let fondoInicio;

let posicionJugadorNivel1;
let posicionJugadorNivel2;
let posicionJugadorNivel3;
let posicionJugadorNivel4;
let posicionJugadorNivel5;
let posicionJugadorNivel6;
let posicionJugadorNivel7;

let terreno;
let screen;
let startGameButton;

let xPos;
let yPos;
let pCol;
let pFil;
let nivel = 1;

const maxHeight = 80;
const gridSize = 10;
let gridX;
let gridY;
const sideLength = 50;
const cubes = [];

let btnImgIzq;
let btnImgDer;
let btnImgArr;
let btnImgAb;
let btnImgLl;
let btnImgP1;
let btnImgP2;
let btnImgPlay;
let btnImgTrash;

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

function preload() {
  // img = loadImage('sample-image.png');
  btnImgIzq = loadImage("src/LEFT.png");
  fondoN1 = loadImage("src/FONDO_N1.png");
  fondoN2 = loadImage("src/fondoN2.png");
  fondoN3 = loadImage("src/fondoN3.png");
  fondoInicio = loadImage("src/INICIO.png");
  btnImgDer = loadImage("src/RIGHT.png");
  btnImgArr = loadImage("src/UP.png");
  btnImgAb = loadImage("src/DOWN.png");
  btnImgLl = loadImage("src/ACT.png");
  btnImgP1 = loadImage("src/P1.png");
  btnImgP2 = loadImage("src/P2.png");
  btnImgPlay = loadImage("src/PLAY.png");
  btnImgTrash = loadImage("src/TRASH.png");
}

function startGameAction() {
  screen += 1;
  startGameButton.hide();
  console.log("se cambio");
}

function setup() {
  posicionJugadorNivel1 = false;
  posicionJugadorNivel2 = false;
  posicionJugadorNivel3 = false;
  posicionJugadorNivel4 = false;
  posicionJugadorNivel5 = false;
  posicionJugadorNivel6 = false;
  posicionJugadorNivel7 = false;

  botonInicio = new Botones(btnImgPlay);
  botonBorrar = new Botones(btnImgTrash);

  //LlEGADA DE LOS BOTONES PARA EJECUTARSE
  botonesAccion = [];

  //Array llamada de los botones
  botonesNivel1_2 = [];
  botonesNivel1_2.push(new Boton_Der(btnImgDer));
  botonesNivel1_2.push(new Boton_Izquierda(btnImgIzq));
  botonesNivel1_2.push(new Boton_Arriba(btnImgArr));
  botonesNivel1_2.push(new Boton_Abajo(btnImgAb));
  botonesNivel1_2.push(new Boton_Llegada(btnImgLl));
  

  botonesNivel3_4 = [];

  botonesNivel3_4.push(new Boton_Der(btnImgDer));
  botonesNivel3_4.push(new Boton_Izquierda(btnImgIzq));

  botonesNivel3_4.push(new Boton_Arriba(btnImgArr));
  botonesNivel3_4.push(new Boton_Abajo(btnImgAb));
  botonesNivel3_4.push(new Boton_Llegada(btnImgLl));
  botonesNivel3_4.push(new Boton_P1(btnImgP1));

  botonesNivel5_6 = [];
  botonesNivel5_6.push(new Boton_Der(btnImgDer));
  botonesNivel5_6.push(new Boton_Izquierda(btnImgIzq));

  botonesNivel5_6.push(new Boton_Arriba(btnImgArr));
  botonesNivel5_6.push(new Boton_Abajo(btnImgAb));
  botonesNivel5_6.push(new Boton_Llegada(btnImgLl));
  botonesNivel5_6.push(new Boton_P1(btnImgP1));
  botonesNivel5_6.push(new Boton_P2(btnImgP2));


  //llamada del jugador
  jugador = new Jugador(0, 0);

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
  if (dist(mouseX, mouseY, windowWidth / 2 + 20, windowHeight / 2 + 220) < 40) {
    recorridoArreglo();
  }

  if (dist(mouseX, mouseY, windowWidth / 1.15, windowHeight / 2 + 220) < 40) {
    botonesAccion = [];
    console.log('BORRO COMANDOS');
  }

  if (screen === 3 || screen === 4) {
    agregarAcciones(botonesNivel1_2);
  } else if (screen === 5 || screen === 6) {
    agregarAcciones(botonesNivel3_4);
  } else if (screen > 6) {
    agregarAcciones(botonesNivel5_6);
  }
}

function agregarAcciones(array) {
  array.forEach((boton) => {
    if (dist(mouseX, mouseY, boton.getX() + 30, boton.getY() + 30) < 30) {
      if (boton.name === "derecha") {
        botonesAccion.push(new Boton_Der(btnImgDer));
      } else if (boton.name === "arriba") {
        botonesAccion.push(new Boton_Arriba(btnImgArr));
      } else if (boton.name === "abajo") {
        botonesAccion.push(new Boton_Abajo(btnImgAb));
      } else if (boton.name === "izquierda") {
        botonesAccion.push(new Boton_Izquierda(btnImgIzq));
      } else if (boton.name === "llegada") {
        botonesAccion.push(new Boton_Llegada(btnImgLl));
      } else {
        botonesAccion.push(new Boton_P1(btnImgP1));
      }
    }
  });
}

function recorridoJugador () {

} 

function recorridoArreglo() {
  botonesAccion.forEach((boton) => {
    if (boton.name === "derecha") {
      //screen += 1;
      jugador.setCol(jugador.getCol() + 1);
      /* timeOut(() => {
        jugador.setCol(jugador.getCol() + 1);
      }); */

      console.log(screen);
      //jugador.setCol(jugador.getCol() + 1);
    } else if (boton.name === "izquierda") {
      jugador.setCol(jugador.getCol() - 1);
      console.log(screen);
      /* timeOut(() => {
        
      }); */
    } else if (boton.name === "arriba") {
      jugador.setFil(jugador.getFil() - 1);
      console.log(screen);
      /* timeOut(() => {
        jugador.setFil(jugador.getFil() - 1);
      }); */
    } else if (boton.name === "abajo") {
      jugador.setFil(jugador.getFil() + 1);
      console.log(screen);
      /* timeOut(() => {
        
      }); */
    }
     if (boton.name === "rep_p1") {
      recorridoArreglo();}
  });
  console.log(terreno.getLocacion(jugador.getFil(), jugador.getCol()));
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

function sumasPuntajes() {
  /* if (terreno.getLocacion(jugador.getFil(), jugador.getCol()) === 2) {
    score += 100;
} */
}

function draw() {
  background(0);

  if (terreno.getLocacion(jugador.getFil(), jugador.getCol()) === 2 && screen == 4) {
    score += 100;
} else if
  (terreno.getLocacion(jugador.getFil(), jugador.getCol()) === 2 && screen == 6) {
  score += 100;

}else if
  (terreno.getLocacion(jugador.getFil(), jugador.getCol()) === 2 && screen == 8) {
  score += 100;
}

  /*  fill(5, 255, 124);
  ellipse(windowWidth/2, windowHeight/2 + 200, 30, 30); */

  //console.log(terreno.getLocacion(jugador.getFil(), jugador.getCol()));
  //

  if (terreno.getLocacion(jugador.getFil(), jugador.getCol()) === 1 && screen != 9) {
    screen += 1;
    botonesAccion = [];

    fill(100);
    console.log("PERDIO --> ", {
      nivel: nivel + 1, 
      locarion: terreno.getLocacion(jugador.getFil(), jugador.getCol()),
      fil: jugador.getFil(), 
      col: jugador.getCol()
    });

  } else if (terreno.getLocacion(jugador.getFil(), jugador.getCol()) === 2) {
    //score += 100;
    screen += 1;
    botonesAccion = [];
    fill(100);
    console.log("GANO");

  } else if (terreno.getLocacion(jugador.getFil(), jugador.getCol()) === 3) {
    screen += 1;
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
      image(fondoInicio, 0, 0, windowWidth, windowHeight);
      break;
    case 3:
      //nivel 1

      image(fondoN1, 0, 0, windowWidth, windowHeight);
      terreno.mostrar();
      botonInicio.botonInicioJuego();
      botonBorrar.botonBorrarComandos();

      botonesNivel1_2.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      if (posicionJugadorNivel1 == false) {
        jugador.setCol(2);
        jugador.setFil(2);

        posicionJugadorNivel1 = true;
      }

      jugador.show();
      terreno.reiniciar();
      terreno.terrenoPrimerNivel(0);
      nivel = 0;
      

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      //background(255, 20, 255);
      break;

    case 4:
      //nivel 2

      image(fondoN1, 0, 0, windowWidth, windowHeight);
      terreno.mostrar();
      botonInicio.botonInicioJuego();
      botonBorrar.botonBorrarComandos();

      botonesNivel1_2.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      jugador.show();
      terreno.reiniciar();
      nivel = 1;
      terreno.terrenoPrimerNivel(1); // nivel 2
      botonInicio.botonInicioJuego();

      if (posicionJugadorNivel2 == false) {
        jugador.setCol(1);
        jugador.setFil(1);

        posicionJugadorNivel2 = true;
      }

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });
      break;

    case 5:
      //nivel 3

      image(fondoN2, 0, 0, windowWidth, windowHeight);
      terreno.mostrar();
      botonInicio.botonInicioJuego();
      botonBorrar.botonBorrarComandos();

      botonesNivel3_4.forEach((boton, index) => {
        boton.mostrarBoton(index);
      });

      jugador.show();
      terreno.reiniciar();
      nivel = 2;
      terreno.terrenoPrimerNivel(2); // nivel 3

      if (posicionJugadorNivel3 == false) {
        jugador.setCol(1);
        jugador.setFil(1);
        posicionJugadorNivel3 = true;
      }

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;
    case 6:
      //nivel 4

      image(fondoN2, 0, 0, windowWidth, windowHeight);
      terreno.mostrar();
      botonInicio.botonInicioJuego();
      botonBorrar.botonBorrarComandos();

      botonesNivel3_4.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      jugador.show();
      terreno.reiniciar();
      nivel = 3;
      terreno.terrenoPrimerNivel(3); // nivel 4

      if (posicionJugadorNivel4 == false) {
        jugador.setCol(1);
        jugador.setFil(4);
        posicionJugadorNivel4 = true;
      }

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;

    case 7:
      //nivel 5 ----------------------------------------------------------------------------------------------------------------------------
      image(fondoN3, 0, 0, windowWidth, windowHeight);
      terreno.mostrar();
      botonInicio.botonInicioJuego();
      botonBorrar.botonBorrarComandos();

      botonesNivel5_6.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      jugador.show();
      terreno.reiniciar();
      nivel = 4;
      terreno.terrenoPrimerNivel(4);

      if (posicionJugadorNivel5 == false) {
        jugador.setCol(3);
        jugador.setFil(1);
        posicionJugadorNivel5 = true;
      }

      //Aqui es donde se debería colocar el reinicio de los arreglos
      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });

      break;
      // ----------------------------------------------------------------------------------------------------------------------------
    case 8:
      //nivel 6

      image(fondoN3, 0, 0, windowWidth, windowHeight);
      terreno.mostrar();
      botonInicio.botonInicioJuego();
      botonBorrar.botonBorrarComandos();

      botonesNivel5_6.forEach((boton, index) => {
        boton.mostrarBoton(index);
        //boton.mostrarBotonDer(index)
      });

      jugador.show();
      terreno.reiniciar();
      nivel = 5;
      terreno.terrenoPrimerNivel(5);

      if (posicionJugadorNivel6 == false) {
        jugador.setCol(9);
        jugador.setFil(1);
        posicionJugadorNivel6 = true;
      }

      botonesAccion.forEach((boton, index) => {
        boton.pintarBotonesAccion(index);
      });
      break;

    case 9:
      //pantalla finals
      background(255, 20, 20);
      fill(255);
      text(`fin`, 100, 100);

      break;
  }

  fill(255);
  textSize(20);
  text(`Score: ${score}`, windowHeight/2 - 300, windowWidth/4- 200)

  fill(255);
  text(`nivel -> ${nivel + 1}`, 100, 100);
  text(`Location -> ${terreno.getLocacion(jugador.getFil(), jugador.getCol())}`, 100, 200);
  text(`Fila columna -> ${jugador.getFil()} ${jugador.getCol()}`, 100, 300);
  text(`Screen -> ${screen}`, 100, 400);

}

/* function timeOut(metodo) {
  setTimeout(metodo, 1000);
} */

/*
function die(){

  
}*/
