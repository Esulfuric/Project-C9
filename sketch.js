var btn_red;
var btn_green;

var r1 = 0;
var g1 = 0;
var b1 = 0;


function setup() {
  createCanvas(400, 400); 

  btn_red = createButton("red");
  btn_red.position(100, 50)
  btn_red.mousePressed(red_bg);
  

  btn_green = createButton("green");
  btn_green.position(300, 50)
  btn_green.mousePressed(green_bg);


  btn_blue = createButton("blue");
  btn_blue.position(200, 100)
  btn_blue.mousePressed(blue_bg);

  


  btn_reset = createButton("reset");
  btn_reset.position(200, 300)
  btn_reset.mousePressed(reset);
}

function draw() {
  background(r1,g1,b1);
  drawSprites()
}

function red_bg() {
  background("#E32227")
}
function green_bg(){
  background("#567d46")
}
function blue_bg(){
  background("#89cff0")
}

function reset(){
  background(0)
}
