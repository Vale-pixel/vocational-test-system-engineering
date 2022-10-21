
class Boton_Der extends Botones {
    constructor() {
        super();
        this.name = "derecha"
        this.imagen = new loadImage('src/Flecha_derecha.png')
    }

    mostrarBoton(index){
        
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }
}