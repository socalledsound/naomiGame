// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.alpha = 150;
  this.dying = false;
  this.yspeed = 1;
  this.aliveColor = [255, 0, 200, this.alpha];
  this.dyingColor = [220, 120,20, this.alpha];
  this.currentColor = this.aliveColor;

  this.grow = function() {
    this.r = this.r + 2;
    if(this.r > 50){
     this.dying = true;  
      this.currentColor = this.dyingColor;
    }
      
  }

  // this.shiftDown = function() {
  //   this.xdir *= -1;
  //   this.y += this.r;
  // }

  this.move = function() {
    this.y = this.y + this.yspeed;
  }

  this.show = function() {
    noStroke();
    fill(this.currentColor);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
