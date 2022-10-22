class Boton_Loop extends Botones {
    constructor(img){
        super(img)
        this.name = "repeticion"
        this.imagen = img;
        // this.imagen = new loadImage('src/P1.png')
    }

    mostrarBoton(index){
            image(this.imagen,this.x * index + 100, this.y, 60, 60);
            this.index = index;
        
    }
}