// SOCKET FRAMEWORK

class SocketClientManager{
  constructor(){
    this.socket = null;
    this.room = null;
    this.change = true;
    this.oldState = null;

    this.DATA = {
       url: null,
       room: null,
       userData: {
         SongsInPlaylist: null,
         Quality: null,
         MobileTarifPrice: null,
         MobileTarifVolume: null, //GB
         MobileTarifFreeStreaming: false,
         DeviceStorage: null, // MB
         HowOften: null
       },
       ready: false,
       access_token:  null,
       refresh_token: null,
       api: null,
       SpotifyPlaylistData: null,
       currentStateMobile: 'Start00',
       currentStateDisplay: 'Start00',
       results: null
    };
  }

  connect(){
    this.socket = io();
  }

  test(t){
    console.log(t);
  }

  enterRoom(room){
    this.socket.emit('room', this.room);
  }

  sendToServer(){
    console.log("Send Data");
    console.log(this.DATA);
    this.socket.emit('fromMobile', this.DATA);
  }

}
