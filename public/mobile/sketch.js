// MOBILE

var SCM = new SocketClientManager();
var SPOTIFY = new SpotifyConnect();
var FUNC;
var STYLE;
var SLIDES;

function setup() {

  // CONNECTION
  SCM.connect();
  SCM.room = "kittens";
  SCM.DATA.room = SCM.room;
  SCM.test("Hello World");
  SCM.enterRoom();

  // SOCKETS
  SCM.socket.on('Message', function(msg){
    console.log(msg);
  });

  SCM.socket.on('Mobile', function(data){
    console.log(data);
    SCM.DATA = data;
  });

  // SPOTIFY
  SPOTIFY.getParams();
  SPOTIFY.getPlaylistData();

  // FUNCTION
  FUNC = new Func();
  FUNC.eventHandler();
  // SCREEN
  STYLE = new Style();
  SLIDES = new Slides();
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();
  // SCENE SWITCH
  switch(SCM.DATA.currentStateMobile) {

    case 'Start00':
        SLIDES.Start00();
        break;

    case 'Input00':
        SLIDES.Input00();
        break;

    case 'Input01':
        SLIDES.Input01();
        break;

    case 'Input02':
        SLIDES.Input02();
        break;

    case 'Input03a':
        SLIDES.Input03a();
        break;

    case 'Input03b':
        SLIDES.Input03b();
        break;

    case 'Input04':
        SLIDES.Input04();
        break;

    case 'Input05':
        SLIDES.Input05();
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

    case 'closeEdit':
        SLIDES.editMode();
        break;


    default:
        console.log('No Scene Found for ' + SCM.DATA.currentStateMobile + '!');
  }

  // TESTING
  fill(STYLE.colors.blue.full);
  ellipse(mouseX, mouseY, 100,100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
