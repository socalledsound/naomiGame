let img;
let sound1;
let ship;
let flowers = [];
let drops = [];
let difficulty = 4999;
let score = 0;


function preload() {
  
  img = loadImage('purpleworld.jpeg');
  sound1 = loadSound('space.mp3');
  
} 
  
function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  drop = new Drop(width/2, height/2);
  
  flowers.push(new Flower(width/2, -10));
  
  
   sound1.loop(); 
  
  

}

function draw() {
  //background(0, 0, 128);
  background(img);
  
  fill(220,220,20);
  textSize(60);
  text("score : " + score, 10, 60);
  
  ship.show();
  ship.move();
  
  for (let i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
    
        for (var j = 0; j < flowers.length; j++) {

            if (drops[i].hits(flowers[j])) {
              flowers[j].grow();
              drops[i].evaporate();

            }
        }
  }
  
    let edge = false;

    for (var i = 0; i < flowers.length; i++) {

        flowers[i].show();
        flowers[i].move();

        // if (flowers[i].x > width || flowers[i].x < 0) {
        //   edge = true;
        // }
      
    

       if(flowers[i].dying){
         flowers[i].alpha-=2;
         flowers[i].dyingColor[0]+=10
         flowers[i].dyingColor[1]+=30
         flowers[i].dyingColor[2]+=3
       }

      if(flowers[i].alpha < 5){
        flowers.splice(i,1);
        score+=1;
      }



      // if (edge) {
      //   for (var i = 0; i < flowers.length; i++) {
      //     flowers[i].shiftDown();
      //   }
      // }
  }

      for (var i = drops.length-1; i >= 0; i--) {
        if (drops[i].toDelete) {
          drops.splice(i, 1);
        }
      }

    // if(flowers.length < 3){
    //     for(let i = 0; i < 6; i++){
    //     flowers.push(new Flower(i*45 + 40, 80));    
    //     }
    //   }
  
  
  let coin = random(0, 5000);
  if(coin > difficulty){
    flowers.push(new Flower(random(0,width),-20));
  }
  
  
  difficulty-=0.01;
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1) ;
  }
}