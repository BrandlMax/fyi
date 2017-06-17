// SOCKET FRAMEWORK

class SocketClientManager{
  constructor(){
    this.socket;
    this.room;

    this.DATA = {
       x: 0, // Delete!
       y: 0, // Delete!
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
       currentStateMobile: null,
       currentStateDesktop: null
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
