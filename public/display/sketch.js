// DISPLAY

var SCM = new SocketClientManager();
var FUNC = new Functions();
var GRID;
var SLIDES;
var STYLE;


function setup() {

  // CONNECTION
  SCM.connect();
  SCM.room = "kittens";
  SCM.test("Hello World");
  SCM.enterRoom();

  // SOCKETS
  SCM.socket.on('Message', function(msg){
    console.log(msg);
  });

  SCM.socket.on('Display', function(data){
    console.log(data);
    SCM.DATA = data;
  });


  // SCREEN
  GRID = new Grid();
  SLIDES = new Slides();
  STYLE = new Style();
  createCanvas(windowWidth, windowHeight);
  noStroke();

}

function draw() {
  clear();
  SLIDES.checkOverlay();
  // SCENE SWITCH
  switch(SCM.DATA.currentStateDisplay) {

    case 'Start00':
        SLIDES.Start00();
        break;

    case 'Input00':
        SLIDES.Input00();
        break;

    case 'Slide01':
        SLIDES.Slide01();
        break;

    case 'Slide02':
        SLIDES.Slide02();
        break;

    case 'Slide03':
        SLIDES.Slide03();
        break;

    case 'Slide04':
        SLIDES.Slide04();
        break;

    case 'editMode':
        SLIDES.editMode();
        break;

    default:
        console.log('No Scene Found for ' + SCM.DATA.currentStateDisplay + '!');
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(STYLE.colors.lila.full);
}
