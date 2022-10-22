class Boton_Abajo extends Botones {
    constructor(){
     super()
     this.name = "abajo"
     this.imagen = new loadImage('src/DOWN.png')
    }

    mostrarBoton(index){
        
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }
}