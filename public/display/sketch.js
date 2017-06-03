var SCM = new SocketClientManager();
var STYLE;
var PARAMETER;
var CHANGE = false;

function setup() {

  // PARAMETER

  PARAMETER = {
      slider : 1
  };


  // CONNECTION
  SCM.connect();
  SCM.room = "kittens";
  SCM.test("Hello World");
  SCM.enterRoom();

  SCM.socket.on('Message', function(msg){
    console.log(msg);
  });

  SCM.socket.on('Display', function(data){
    CHANGE = true;
    console.log(data);
    PARAMETER.slider = data;
  });


  // SCREEN
  STYLE = new Style();
  createCanvas(windowWidth, windowHeight);
  background(STYLE.colors.lila.full);
}

function draw() {
  STYLE.RandomColorCircle(PARAMETER.slider);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(STYLE.colors.lila.full);
}
