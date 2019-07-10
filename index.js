function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var canX = 1080, canY = 720,
    xi = [],
    road = {
      x: 0,
      y: 270,
      w: 1080,
      h: 180
    };

function setup()
{
  createCanvas(canX,canY);
}

var x = [],
    y = [],
    v = [];

for(var i=0; i<4; i++)
{
  x[i] = 0 - getRandomInt(500);
  y[i] = (road.y + (45 * i)) + 15;
  v[i] = getRandomInt(11) + 1;
}

function draw()
{
  background(0);
  fill(128, 128, 128);
  rect(road.x,road.y,road.w,road.h);
  for(var i=0; i<5; i++)
  {
    strokeWeight(4);
    stroke(64, 64, 64);
    line(0,road.y+(45*i),road.w,road.y+(45*i));
  }
  let c = color(255,128,0);
  for(var j=0; j<4; j++)
  {
    fill(c);
    noStroke();
    rect(x[j], y[j], 20, 15);
    x[j]+=v[j];
  }
}

function mousePressed() {
   redraw(5);
 }
