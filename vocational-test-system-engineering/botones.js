class Botones {
    constructor(){
        this.index = 0;
        this.x = 80;
        this.y = windowHeight - 100;
        this.name = "derecha";
    };

    pintarBotones(index){
        
        rect(this.x * index + 500, this.y, 50, 50);
        fill(0);
        this.index = index;

    }

    pintarBotonesAccion(index){
        if (index < 4) {
            rect(this.x * index + 1000, this.y - 450, 50, 50);
            fill(0);
        }else if(index >= 4 && index<8) {
            rect(this.x * index + 680, this.y - 380, 50, 50);
            fill(0);
        } else{
            rect(this.x * index + 360, this.y - 310, 50, 50);
            fill(0);
        }
    }

   getX(){
    return this.x * this.index + 500
   } 

   getY(){
    return this.y
    } 
}