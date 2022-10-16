class mapa_niveles {
    constructor(){
        this.escaque = [];
        this.escaque2 = [];
    }

    arregloEscaque(){
        for (let index = 0; index < 20; index++) {
            this.escaque.push(new Array(20));
        }

        for (let fil = 0; fil < 20; fil++) {
            for(let col = 0; col < 20; col++){
                this.escaque[fil][col] = 0;
            }
        }
    }

    arregloEscaque2(){
        for (let index = 0; index < 20; index++) {
            this.escaque2.push(new Array(20));
        }

        for (let fil = 0; fil < 20; fil++) {
            for(let col = 0; col < 20; col++){
                this.escaque2[fil][col] = 0;
            }
        }
    }


//En este punto se configuran los espacios por donde pasará el personaje
terrenoPrimerNivel(nivel1){
    for (let fil = 0; fil < 20; fil++){
        for(let col = 0; col < 20; col++){

            switch (nivel1) {
                case 0:
                    
                    this.escaque[0][1] = 1;
                    this.escaque[0][2] = 1;
                    this.escaque[0][3] = 1;
                    this.escaque[1][3] = 1;
                    this.escaque[2][0] = 1;
                    this.escaque[2][1] = 1;
                    this.escaque[3][1] = 1;
                    this.escaque[3][3] = 1;
                    this.escaque[4][4] = 1;
                    this.escaque[5][3] = 1;
                    this.escaque[5][1] = 1;
                    this.escaque[7][0] = 1;
                    this.escaque[8][2] = 1;
                    this.escaque[7][4] = 1;
                    this.escaque[6][5] = 1;
                    this.escaque[0][5] = 1;
                    this.escaque[1][6] = 1;
                    this.escaque[2][7] = 1;
                    this.escaque[0][8] = 1;
                    this.escaque[1][8] = 1;
                    this.escaque[1][10] = 1;
                    this.escaque[0][13] = 1;
                    this.escaque[1][15] = 1;
                    this.escaque[1][16] = 1;
                    this.escaque[1][17] = 1;
                    this.escaque[2][16] = 1;
                    this.escaque[3][15] = 1;
                    this.escaque[4][14] = 1;
                    this.escaque[2][18] = 1;
                    this.escaque[4][18] = 1;
                    this.escaque[3][18] = 1;
                    this.escaque[4][17] = 1;
                    this.escaque[5][18] = 1;
                    this.escaque[7][6] = 1;
                    this.escaque[8][7] = 1;
                    this.escaque[8][8] = 1;
                    this.escaque[6][9] = 1;
                    this.escaque[5][6] = 1;
                    this.escaque[3][8] = 1;
                    this.escaque[4][9] = 1;
                    this.escaque[4][10] = 1;
                    this.escaque[4][8] = 1;
                    this.escaque[3][12] = 1;
                    this.escaque[5][13] = 1;
                    this.escaque[6][13] = 1;
                    this.escaque[7][13] = 1;
                    this.escaque[6][11] = 1;
                    this.escaque[6][12] = 1;
                    this.escaque[6][14] = 1;
                    this.escaque[8][11] = 1;
                    this.escaque[6][16] = 1;
                    this.escaque[7][16] = 1;
                    this.escaque[8][16] = 1;
                    this.escaque[8][15] = 1;
                    this.escaque[7][17] = 1;
                    this.escaque[4][19] = 1;
                    this.escaque[7][19] = 1;
                    this.escaque[9][1] = 1;
                    this.escaque[9][3] = 1;
                    this.escaque[9][7] = 1;
                    this.escaque[9][9] = 1;
                    this.escaque[9][11] = 1;
                    this.escaque[9][15] = 1;
                    this.escaque[9][18] = 1;

                    break;
            
                default:
                    break;
            }
        }
    }
}

mostrar(pantalla1) {

    // pintamos basados en los valores de la matriz
   for (let fil = 0; fil < 20; fil++) {
       for (let col = 0; col < 20; col++) {
           if (this.escaque[fil][col] === 0) { //Zona para caminar
               fill(255);
           } else if (this.escaque[fil][col] === 1) { //Obstaculos
               fill(0);
           }
           stroke(0);
           rect(col * 40, fil * 40, 40, 40);

       }
   }

}

getLocacion(newFil, newCol){

   return this.escaque[newFil][newCol];

}

}
