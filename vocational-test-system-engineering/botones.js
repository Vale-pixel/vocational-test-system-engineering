class Botones {
    constructor(){
        this.index = 0;
        this.x = 80;
        this.y = windowHeight - 110;
        this.name = "derecha";

        this.posX = windowWidth / 2;
        this.posY = windowHeight / 2 + 200;
    };

    pintarBotones(index){
        
        circle(this.x * index + 100, this.y, 60, 60);
        fill(0);
        this.index = index;

    }

    //boton para iniciar el juego (recorrido del arreglo)
    botonInicioJuego(){
        circle(this.posX, this.posY, 50, 50);
        fill(123,0,255);
    }

    pintarBotonesAccion(index){
        if (index < 4) {
            circle(this.x * index + 1050, this.y - 500, 50, 50);
            fill(0);
        }else if(index >= 4 && index<8) {
            circle(this.x * index + 730, this.y - 430, 50, 50);
            fill(0);
        } else if(index >= 4 && index<12){
            circle(this.x * index + 410, this.y - 360, 50, 50);
            fill(0);
        }
    }

   getX(){
    return this.x * this.index + 100
   } 

   getY(){
    return this.y
    } 
}