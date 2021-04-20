class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
  this.a1 = [];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>1 && this.body.position.x>200)
    {

    }
    var position = [this.body.position.x, this.body.position.y];
    this.a1.push(position);
    for(var i=0;  i<this.a1.length; i++){
      image(this.smoke, this.a1[i][0], this.a1[i][1])
    }
  }
}
