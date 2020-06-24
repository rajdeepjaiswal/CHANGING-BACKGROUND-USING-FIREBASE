var ball,ball_c1;
function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  ball = createSprite(250, 250, 10, 10);
  ball.shapeColor = "red";
  
  var ball_c1 = database.ref('red');
  ball_c1.on("value", readRed, showError);

  var ball_c2 = database.ref('blue');
  ball_c2.on("value", readBlue, showError);

   var ball_c3 = database.ref('green');
   ball_c3.on("value", readGreen, showError);

   
  }


function draw() {
  background(red,blue,green);
  ball.x = mouseX;
  ball.y = mouseY;
 
  writeBlue();
  writeRed();
  writeGreen();
  drawSprites();
}
function readRed(data) {
  red = data.val();
  console.log(red);
 
}
function readBlue(data) {
  blue = data.val();
  console.log(blue);

}
function readGreen(data) {
  green = data.val();
  console.log(green);

}
function writeRed(){
  database.ref('/').update({
    'red': mouseX
  })
}
function writeBlue() {
  database.ref('/').update({
    'blue': mouseY
  })
}
function writeGreen() {
  database.ref('/').update({
    'green': mouseX-mouseY
  })
}

function showError() {
  console.log("Error in writing to the database");
}