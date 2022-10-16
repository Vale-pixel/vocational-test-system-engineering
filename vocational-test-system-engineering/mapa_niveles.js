class mapa_niveles {
    constructor(){
        this.escaque = [];
        this.escaque2 = [];

        this.posX = 20;
        this.posY = 20;
    }

    arregloEscaque(){
        for (let index = 0; index < 5; index++) {
            this.escaque.push(new Array(5));
        }

        for (let fil = 0; fil < 3; fil++) {
            for(let col = 0; col < 4; col++){
                this.escaque[fil][col] = 0;
            }
        }
    }

    arregloEscaque2(){
        for (let index = 0; index < 4; index++) {
            this.escaque2.push(new Array(4));
        }

        for (let fil = 0; fil < 3; fil++) {
            for(let col = 0; col < 4; col++){
                this.escaque2[fil][col] = 0;
            }
        }
    }


//En este punto se configuran los espacios por donde pasará el personaje
terrenoPrimerNivel(nivel1){
    for (let fil = 0; fil < 3; fil++){
        for(let col = 0; col < 4; col++){

            switch (nivel1) {
                case 0:
                    
                    this.escaque[0][0] = 1;
                    this.escaque[1][3] = 1;
                    this.escaque[2][0] = 1;

                    break;
            
                default:
                    break;
            }
        }
    }
}

mostrar(pantalla1) {

    

    // pintamos basados en los valores de la matriz
   for (let fil = 0; fil < 3; fil++) {
       for (let col = 0; col < 4; col++) {
           if (this.escaque[fil][col] === 0) { //Zona para caminar
               fill(255);
           } else if (this.escaque[fil][col] === 1) { //Obstaculos
               fill(0);
           }
           stroke(0);
           rect(col * 50, fil * 50, 50);

       }
   }

}

getLocacion(newFil, newCol){

   return this.escaque[newFil][newCol];

}

}
