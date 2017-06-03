class Functions{
  constructor(){
    this.msg;
  }

  test(){
    console.log("Test");
  }

  displayUserData(){
    if(SCM.DATA.userData !== 0){
      this.msg = document.getElementById('msg');
      this.msg.innerHTML = "Hey " + SCM.DATA.userData.id+ "<br/> du hast " + SCM.DATA.playlistData.items.length+ " Playlists.";
    }
  }

}
