function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var canX = 1080, canY = 720,
    xi = [];

function setup()
{
  createCanvas(canX,canY);
}

var x = [],
    y = [canY/2 + 60, canY/2, canY/2 - 60],
    v = [];

for(var i=0; i<3; i++)
{
  x[i] = 0 - getRandomInt(500);
  v[i] = getRandomInt(11) + 1;
}
function draw()
{

  background(0);
  let c = color(255,128,0);
  for(var j=0; j<3; j++)
  {
    fill(c);
    noStroke();
    rect(x[j], y[j], 20, 15);
    if (x[j] < canX)
      x[j]+=v[j];
    else
      x[j] = canX;
  }
}
