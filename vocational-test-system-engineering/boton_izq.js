class Boton_Izquierda extends Botones {
    constructor() {
        super();
        this.name = "izquierda"
        this.imagen = new loadImage('src/Izquierda.png')
    }

    mostrarBoton(index){
        
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }

}