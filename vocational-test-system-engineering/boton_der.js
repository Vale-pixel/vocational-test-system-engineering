
class Boton_Der extends Botones {
    constructor() {
        super();
        this.name = "derecha"
        this.imagen = new loadImage('src/RIGHT.png')
    }

    mostrarBoton(index){
        
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }
}