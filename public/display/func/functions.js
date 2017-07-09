class Functions{
  constructor(){
    this.msg;
  }

  test(){
    console.log("Test");
  }

  checkRefresh(){
    console.log("Refresh");
    if(SCM.DATA.refresh){
      SCM.DATA.refresh = false;
      location.reload();
    }
  }

  refresh(){

    SCM.DATA.refresh = true;
    SCM.sendToServer();
    SCM.sendToServer();
    location.reload();

  }

}
