class Botones {
    constructor(){
        this.index = 0;
        this.x = 40;
        this.y = windowHeight - 100;
        this.name = "derecha";
    };

    pintarBotones(index){
        
        rect(this.x * index + 500, this.y, 20, 20);
        fill(0);
        this.index = index;

    }

   getX(){
    return this.x * this.index + 500
   } 

   getY(){
    return this.y
    } 
}