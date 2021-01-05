class paper {
  constructor(x,y,r) {
      var option={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      }
      this.image = loadImage("paper.png");
      this.x = Bodies.circle(x,y,r,option);
      World.add(world,this.x);

      this.ra = r;
  } 
    display() {
    imageMode(RADIUS);
    image(this.image,this.x.position.x,this.x.position.y,50,50);
  }
}