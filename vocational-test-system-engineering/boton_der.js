let imagen_botonDer;

class Boton_Der extends Botones {
    constructor() {
        super();
    }


    preload() {
        imagen_botonDer = new loadImage('src/Flecha_derecha.png')
    }

    mostrarBotonDer(){
        image(imagen_botonDer)
    }
}