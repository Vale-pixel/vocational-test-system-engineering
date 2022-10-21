class Botones {
    constructor() {
        this.botonesAccion = [];
        this.index = 0;
        this.x = 80;
        this.y = windowHeight - 110;
        this.imagen = null;
        this.posX = windowWidth / 2;
        this.posY = windowHeight / 2 + 200;
    };

    mostrarBoton(){}

    //boton para iniciar el juego (recorrido del arreglo)
    botonInicioJuego() {
        circle(this.posX, this.posY, 50, 50);
        fill(123, 0, 255);
    }

    pintarBotonesAccion(index) {
        if (index < 4) {
            image(this.imagen,this.x * index + 1350, this.y - 500, 60, 60);
        } else if (index >= 4 && index < 8) {
            image(this.imagen,this.x * index + 1030, this.y - 430, 60, 60);
        } else if (index >= 4 && index < 12) {
            image(this.imagen,this.x * index + 710, this.y - 360, 60, 60);
        }
    }



    getX() {
        return this.x * this.index + 100
    }

    getY() {
        return this.y
    }
}