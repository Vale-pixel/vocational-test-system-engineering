class PopUp {
  constructor( img, posX, posY, width, height, text ) {
    this.img = img;
    this.posX = posX;
    this.posY = posY;
    this.text = text;
    this.width = width;
    this.height = height;
    this.on = false;
  }

  showButton() {
    image(this.img, this.posX, this.posY, this.img.widht, this.img.height);
  }
  showPopUp(){
    noStroke();
    fill("#D9D9D9");
    rect(this.posX + 60, this.posY - 50, this.width, this.height);
    fill("#3E2748");
    text(this.text, this.posX, this.posY, widthBox);
  }
  popUpAction() {

  }
}
