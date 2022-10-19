class Botones {
    constructor(){
        this.x = 40;
        this.y = windowHeight - 100;
        this.name = "derecha";
    };

    pintarBotones(index){
        
        rect(this.x * index + 500, this.y, 20, 20);
        fill(0);

    }

    

}