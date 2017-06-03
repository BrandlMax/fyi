var SCM = new SocketClientManager();
var FUNC = new Functions();
var STYLE;
var update;

function setup() {

  // CONNECTION
  SCM.connect();
  SCM.room = "kittens";
  SCM.test("Hello World");
  SCM.enterRoom();

  SCM.socket.on('Message', function(msg){
    console.log(msg);
  });

  SCM.socket.on('Display', function(data){
    console.log(data);
    SCM.DATA = data;
    update = true;
  });

  update = true;

  // SCREEN
  STYLE = new Style();
  createCanvas(windowWidth, windowHeight);
  background(STYLE.colors.lila.full);
}

function draw() {
  STYLE.RandomColorCircle(SCM.DATA);
  if(update){
    FUNC.displayUserData();
    update = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(STYLE.colors.lila.full);
}
