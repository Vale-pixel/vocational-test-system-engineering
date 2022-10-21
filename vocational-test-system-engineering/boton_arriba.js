class Boton_Arriba extends Botones {
    constructor() {
        super();
        this.name = "arriba"
        this.imagen = new loadImage('src/Arriba.png')
    }

    mostrarBoton(index){
        
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }
}