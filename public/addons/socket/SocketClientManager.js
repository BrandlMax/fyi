// SOCKET FRAMEWORK

class SocketClientManager{
  constructor(){
    this.socket = null;
    this.room = null;

    this.DATA = {
       x: 0, // Delete!
       y: 0, // Delete!
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
       playlistData: null,
       currentStateMobile: 'Start00',
       currentStateDisplay: 'Start00'
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
    console.log(this.DATA);
    this.socket.emit('fromMobile', this.DATA);
  }


}
