var song;
var amp;
var button;


var volhistory = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var volume = mic.getLevel();
  volhistory.push(volume);
  stroke(255);
  noFill();

  translate(width/ 2, height/ 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10, 100);
    var x = r * cos(i)*10;
    var y = r * sin(i)*10;
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}