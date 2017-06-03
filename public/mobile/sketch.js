var SCM = new SocketClientManager();

function setup() {

  // CONNECTION
  SCM.connect();
  SCM.room = "kittens";
  SCM.test("Hello World");
  SCM.enterRoom();

  SCM.socket.on('Message', function(msg){
    console.log(msg);
  });

  // SCREEN
  STYLE = new Style();
  createCanvas(windowWidth, windowHeight);

  STYLE.background();
}

function draw() {

}

function touchMoved() {
  noStroke();
  console.log("X: " + mouseX +" Y: " + mouseY);
  var InputValueY = floor(map(mouseY, 0, windowHeight, 0, 100));
  var InputValueX = floor(map(mouseX, 0, windowWidth, 0, 100));

  var InputValue = {
     x: InputValueX,
     y: InputValueY
  }

  SCM.sendToServer(InputValue);
  // prevent default
  return false;
}
