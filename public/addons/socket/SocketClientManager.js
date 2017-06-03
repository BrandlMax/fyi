// SOCKET FRAMEWORK

class SocketClientManager{
  constructor(){
    this.socket;
    this.room;

    this.DATA = {
       x: 0,
       y: 0,
       userData: 0,
       playlistData: 0
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
