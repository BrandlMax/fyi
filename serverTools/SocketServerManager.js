class SocketServerManager{
  constructor(){
      this.RoomSettings = {
          user: 0
      };

      this.InsideRoom = null;

      this.io = null;
      this.socket = null;

      this.room = null;

      this.api = 0;
  }


  newUser(){
    console.log("NEW USER:" + this.socket.id);
  }


  joinRoom(room){
      console.log("Entering Room: "+ room);
      // JOIN ROOM
      this.socket.join(room);
      this.room = room;
      // NUMBER USERS
      this.InsideRoom = this.io.sockets.adapter.rooms[room];
      var hellomsg = 'Hello ' + this.socket.id;


      if(this.InsideRoom.length > 2){

          // TOO MANY
          this.socket.leave(room);
          console.log("Error, too many User!");
          var msg = "ROOM FULL :(";
          this.io.sockets.to(this.socket.id).emit('RoomFull', msg);

      } else {

          this.RoomSettings.user = this.InsideRoom.length;
          console.log("NOW PEOPLE IN THE ROOM: " + this.RoomSettings.user);
          this.io.sockets.to(this.socket.id).emit('Message', hellomsg);
          this.io.sockets.in(room).emit('RoomSettings', this.RoomSettings);

      }

      // SEND CONTROL MESSAGE
      var msg = "Entered Room: " + room + " With Users: " +  this.InsideRoom.length;
      this.io.sockets.in(room).emit('Message', msg);

  }


  leftRoom(room){
      this.socket.leave(this.room);

      this.RoomSettings.user = this.InsideRoom.length;
      // this.io.sockets.in(this.room).emit('RoomSettings', this.RoomSettings);
      var msg = "alone";
      this.io.sockets.emit('Message', msg);
      console.log("DISCONNECTED: " + this.socket.id + " in Room: " + this.room);
      console.log("NOW PEOPLE IN THE ROOM: " + this.RoomSettings.user);
  }

  // PRODUCT SPECIFIC

  sendToDisplay(data){
    this.io.sockets.in(this.room).emit('Display', data);
  }

  sendToMobile(data){
    this.io.sockets.in(this.room).emit('Mobile', data);
  }

  sendRoomID(data){
    this.io.sockets.emit('roomID', data);
  }

}

module.exports = SocketServerManager;
