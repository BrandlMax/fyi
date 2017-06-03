// SOCKET FRAMEWORK

class SocketClientManager{
  constructor(){
    this.socket;
    this.room;
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

  sendToServer(inputValue){
    console.log(inputValue);
    this.socket.emit('fromMobile', inputValue);
  }


}
