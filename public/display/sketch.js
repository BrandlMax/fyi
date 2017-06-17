// DISPLAY

var SCM = new SocketClientManager();
var FUNC = new Functions();
var STYLE;

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
  });


  // SCREEN
  STYLE = new Style();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(STYLE.colors.lila.full);

  /*
  switch(SCM.DATA.currentStateDesktop) {
    case scene01:
        // Here Code for Draw
        break;
    case scene01:
        // Here Code for Draw
        break;
    default:
        code block
  }
  */

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(STYLE.colors.lila.full);
}
