var font;
var particles = [];
var particles2 = [];

function preload(){

  font = loadFont('Georgia.ttf');
}

function setup() {
  createCanvas(1080,720);
  background(51);
  textFont(font);
  textSize(120);

  var points = font.textToPoints('SAVETHESETREES',0,height/2);
  var points2 = font.textToPoints('THESE',0,height/2);

  var vel = createVector(0,-1);
  for(var i=0;i<points.length;i++){
    var p = points[i];
    var particle = new Particle(p.x,p.y);
    particles.push(particle);
  }
  for(var i=0;i<points2.length;i++){
    var p2 = points2[i];
    var particle2 = new Particle(p2.x,p2.y);
    particles2.push(particle2);
  }


}

function draw() {
  background(51);
  for(var i=0;i<particles.length;i++){

    var pt = particles[i];
    pt.behaviors();
    pt.update();
    pt.show();


  }
}
