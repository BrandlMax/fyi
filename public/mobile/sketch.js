// MOBILE

var SCM = new SocketClientManager();

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

  SCM.socket.on('APIMobile', function(data){
    console.log(data);
  });

  // SPOTIFY
  var SPOTIFY = new SpotifyConnect();
  SPOTIFY.getParams();
  SPOTIFY.getPlaylistData();

  // SCREEN
  STYLE = new Style();
  createCanvas(windowWidth, windowHeight);

  background(STYLE.colors.lila.full);
}

function draw() {
  /*
  switch(SCM.DATA.currentStateMobile) {
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

function touchMoved() {

  noStroke();
  console.log("X: " + mouseX +" Y: " + mouseY);

  var InputValueY = floor(map(mouseY, 0, windowHeight, 0, 100));
  var InputValueX = floor(map(mouseX, 0, windowWidth, 0, 100));

  SCM.DATA.x = InputValueX;
  SCM.DATA.y = InputValueY;

  SCM.sendToServer();
  // prevent default
  return false;

}
