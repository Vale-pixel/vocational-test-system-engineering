class mapa_niveles {
    constructor(){
        this.escaque = [];

        this.posX = 20;
        this.posY = 20;
    }

    arregloEscaque(){
        for (let index = 0; index < 5; index++) {
            this.escaque.push(new Array(5));
        }

        for (let fil = 0; fil < 5; fil++) {
            for(let col = 0; col < 6; col++){
                this.escaque[fil][col] = 0;
            }
        }
    }

    /*

    arregloEscaque2(){
        for (let index = 0; index < 4; index++) {
            this.escaque2.push(new Array(4));
        }

        for (let fil = 0; fil < 5; fil++) {
            for(let col = 0; col < 6; col++){
                this.escaque2[fil][col] = 0;
            }
        }
    }*/


//En este punto se configuran los espacios por donde pasará el personaje
terrenoPrimerNivel(nivel1){
    for (let fil = 0; fil < 5; fil++){
        for(let col = 0; col < 6; col++){

            switch (nivel1) {
                case 0:
                    this.escaque
                    this.escaque[0][0] = 1;
                    this.escaque[0][1] = 1;
                    this.escaque[0][2] = 1;
                    this.escaque[0][3] = 1;
                    this.escaque[0][4] = 1;
                    this.escaque[0][5] = 1;
                    this.escaque[0][6] = 1;
                    this.escaque[1][0] = 1;
                    this.escaque[1][2] = 1;
                    this.escaque[1][3] = 1;
                    this.escaque[1][4] = 1;
                    this.escaque[1][5] = 1;
                    this.escaque[2][0] = 1;
                    this.escaque[2][3] = 1;
                    this.escaque[2][4] = 1;
                    this.escaque[2][5] = 1;
                    this.escaque[3][0] = 1;
                    this.escaque[3][1] = 1;
                    this.escaque[3][2] = 1;
                    this.escaque[3][3] = 1;
                    this.escaque[3][4] = 1;
                    this.escaque[3][4] = 1;
                    this.escaque[3][5] = 1;
                    this.escaque[4][0] = 1;
                    this.escaque[4][1] = 1;
                    this.escaque[4][2] = 1;
                    this.escaque[4][3] = 1;
                    this.escaque[4][4] = 1;
                    this.escaque[4][5] = 1;
                    
                    this.escaque[2][2] = 2;
                    

                    break;

                    case 1:
                    this.escaque[0][0] = 1;
                    this.escaque[0][1] = 1;
                    this.escaque[0][2] = 1;
                    this.escaque[0][3] = 1;
                    this.escaque[0][4] = 1;
                    this.escaque[0][5] = 1;
                    this.escaque[0][6] = 1;
                    this.escaque[1][0] = 1;
                    this.escaque[2][0] = 1;
                    this.escaque[3][0] = 1;
                    this.escaque[4][0] = 1;
                    this.escaque[4][1] = 1;
                    this.escaque[4][2] = 1;
                    this.escaque[4][3] = 1;
                    this.escaque[4][4] = 1;
                    this.escaque[4][5] = 1;
                    this.escaque[1][5] = 1;
                    this.escaque[2][5] = 1;
                    this.escaque[3][5] = 1;

                    this.escaque[2][2] = 1;
                    this.escaque[2][3] = 1;
                    this.escaque[2][4] = 1;

                    this.escaque[3][4] = 2;
                    
                    
                    
                    break;
            
                case 2:
                    this.escaque[0][0] = 1;
                    this.escaque[0][1] = 1;
                    this.escaque[0][2] = 1;
                    this.escaque[0][3] = 1;
                    this.escaque[0][4] = 1;
                    this.escaque[0][5] = 1;
                    this.escaque[0][6] = 1;
                    this.escaque[1][0] = 1;
                    this.escaque[1][2] = 1;
                    this.escaque[1][3] = 1;
                    this.escaque[1][4] = 1;
                    this.escaque[1][5] = 1;
                    this.escaque[2][0] = 1;
                    
                    this.escaque[2][5] = 1;
                    this.escaque[3][0] = 1;
                    this.escaque[3][1] = 1;
                    this.escaque[3][2] = 1;
                    this.escaque[3][3] = 1;
                    this.escaque[3][4] = 1;
                    this.escaque[3][4] = 0;
                    this.escaque[3][5] = 1;
                    this.escaque[4][0] = 1;
                    this.escaque[4][1] = 1;
                    this.escaque[4][2] = 1;
                    this.escaque[4][3] = 1;
                    this.escaque[4][4] = 1;
                    this.escaque[4][5] = 1;

                    this.escaque[1][1] = 2;
                    
                    break;

                    case 3:
                    this.escaque[0][0] = 1;
                    this.escaque[0][1] = 1;
                    this.escaque[0][2] = 1;
                    this.escaque[0][3] = 1;
                    this.escaque[0][4] = 1;
                    this.escaque[0][5] = 1;
                    this.escaque[0][6] = 1;
                    this.escaque[1][0] = 1;
                    this.escaque[1][1] = 1;
                    this.escaque[1][3] = 1;
                    this.escaque[1][5] = 1;
                    this.escaque[2][0] = 1;
                    this.escaque[2][1] = 1;
                    this.escaque[2][3] = 1;
                    this.escaque[2][5] = 1;
                    this.escaque[3][0] = 1;
                    this.escaque[3][1] = 1;
                    this.escaque[3][4] = 1;
                    this.escaque[3][4] = 0;
                    this.escaque[3][5] = 1;
                    this.escaque[4][0] = 1;
                    this.escaque[4][1] = 1;
                    this.escaque[4][2] = 1;
                    this.escaque[4][3] = 1;
                    this.escaque[4][4] = 1;
                    this.escaque[4][5] = 1;

                    this.escaque[1][1] = 2;
                    
                    break;

                    case 4:
                    this.escaque[0][0] = 1;
                    this.escaque[0][1] = 1;
                    this.escaque[0][2] = 1;
                    this.escaque[0][3] = 1;
                    this.escaque[0][4] = 1;
                    this.escaque[0][5] = 1;
                    this.escaque[0][6] = 1;
                    this.escaque[1][0] = 1;
                    this.escaque[1][5] = 1;
                    this.escaque[2][0] = 1;
                    this.escaque[2][2] = 1;
                    this.escaque[2][3] = 1;
                    this.escaque[2][5] = 1;
                    this.escaque[3][0] = 1;
                    this.escaque[3][3] = 1;
                    this.escaque[3][4] = 0;
                    this.escaque[3][5] = 1;
                    this.escaque[4][0] = 1;
                    this.escaque[4][1] = 1;
                    this.escaque[4][2] = 1;
                    this.escaque[4][3] = 1;
                    this.escaque[4][4] = 1;
                    this.escaque[4][5] = 1;

                    this.escaque[3][2] = 2;
                    
                    break;

                    case 5:
                        this.escaque[0][0] = 1;
                        this.escaque[0][1] = 1;
                        this.escaque[0][2] = 1;
                        this.escaque[0][3] = 1;
                        this.escaque[0][4] = 1;
                        this.escaque[0][5] = 1;
                        this.escaque[0][6] = 1;
                        this.escaque[1][0] = 1;
                        this.escaque[1][1] = 1;
                        this.escaque[1][2] = 1;
                        this.escaque[1][3] = 1;
                        this.escaque[1][5] = 1;
                        this.escaque[2][0] = 1;
                        this.escaque[2][2] = 1;
                        this.escaque[2][5] = 1;
                        this.escaque[3][0] = 1;
                        this.escaque[3][4] = 1;
                        this.escaque[3][5] = 1;
                        this.escaque[4][0] = 1;
                        this.escaque[4][1] = 1;
                        this.escaque[4][2] = 1;
                        this.escaque[4][3] = 1;
                        this.escaque[4][4] = 1;
                        this.escaque[4][5] = 1;
    
                        this.escaque[1][1] = 2;
                        
                        break;
            }
        }
    }
}

mostrar(pantalla1) {

    

    // pintamos basados en los valores de la matriz
   for (let fil = 0; fil < 5; fil++) {
       for (let col = 0; col < 6; col++) {
           if (this.escaque[fil][col] === 0) { //Zona para caminar
               fill(255);
               
           } else if(this.escaque[fil][col] === 1) { //Paredes
               fill(0 , 0 , 255);
               
           } else if(this.escaque[fil][col] === 2) { //Meta
                fill(255, 255, 0);
                
        }
           noStroke();
           rect((windowWidth/2) - ( 85 * 2) + (col * 60), (windowHeight/2) - (60 * 2) + (fil * 60), 50, 50);

       }
   }

}

reiniciar(){
    this.escaque = [];
    this.arregloEscaque();
  //  this.arregloEscaque2();
}

getLocacion(newFil, newCol){

   return this.escaque[newFil][newCol];

}

}
