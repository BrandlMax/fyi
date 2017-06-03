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

  STYLE.background();
}

function draw() {

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
