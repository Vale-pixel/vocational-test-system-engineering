class Boton_Llegada extends Botones {
    constructor(){
        super()
        this.name = "llegada"
        this.imagen = new loadImage('src/ACT.png')
    }

    mostrarBoton(index){
        
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }
}