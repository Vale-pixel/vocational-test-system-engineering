class Boton_Loop extends Botones {
    constructor(){
        super()
        this.name = "repeticion"
        this.imagen = new loadImage('src/P1.png')
    }

    mostrarBoton(index){
        
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }
}