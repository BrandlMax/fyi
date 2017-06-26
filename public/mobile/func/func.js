// FUNC MOBILE
class Func{
  constructor(){
    // Elements: Only for the EventsHandler
    this.start00 = select('#start00');
    this.input00 = select('#input00');
    this.input01 = select('#input01');
    this.input02 = select('#input02');
    this.input03a = select('#input03a');
    this.input03b = select('#input03b');
    this.input04 = select('#input04');
    this.input05 = select('#input05');

    this.slide01 = select('#slide01');
    this.slide02 = select('#slide02');
    this.slide03 = select('#slide03');
    this.slide04 = select('#slide04');

    // SAVE DATA FOR function
    this.swipeXstart = null;
    this.swipeYstart = null;

    // EDIT fix
    this.lastCur = null;
  }

  eventHandler(){

    // For closing Keyboard
    /* http://uihacker.blogspot.de/2011/10/javascript-hide-ios-soft-keyboard.html */
    var hideKeyboard = function() {
       document.activeElement.blur();
       var inputs = document.querySelectorAll('input');
       for(var i=0; i < inputs.length; i++) {
        inputs[i].blur();
       }
       console.log("Hide Keyboard");
    };

    console.log("eventHandler Listens");
    $("#code").bind('keyup keydown keypress DOMAttrModified propertychange oninput',function(){

      if($(this).val() == SCM.room){
        SCM.enterRoom();
        SCM.DATA.room = SCM.room;
        hideKeyboard();
        SLIDES.toSlide('Input00');
      }
    });

    // DONE BUTTON IOS FIX

    $('#amountSongs').focusout(function(e) {
        FUNC.amount();
    });

    $('#dataVolume').focusout(function(e) {
        FUNC.volume();
    });

    $('#tarif').focusout(function(e) {
        FUNC.tarif();
    });

    $('#mobileStorage').focusout(function(e) {
        FUNC.storage();
    });

    $('#howOften').focusout(function(e) {
        FUNC.howoften();
    });

    // EDIT MODE

    $("#e_amountSongs").bind('keyup keydown keypress DOMAttrModified propertychange oninput',function(){
      SCM.DATA.userData.SongsInPlaylist = $("#e_amountSongs").val();
      SCM.DATA.change = true;
      SCM.sendToServer();
    });

    $("#e_quality").change(function(){
      SCM.DATA.userData.Quality = $("#e_quality").val();
      SCM.DATA.change = true;
      SCM.sendToServer();
    });

    $("#e_dataVolume").bind('keyup keydown keypress DOMAttrModified propertychange oninput',function(){
      SCM.DATA.userData.MobileTarifVolume = $("#e_dataVolume").val();
      SCM.DATA.change = true;
      SCM.sendToServer();
    });

    $("#e_tarif").bind('keyup keydown keypress DOMAttrModified propertychange oninput',function(){
      SCM.DATA.userData.MobileTarifPrice = $("#e_tarif").val();
      SCM.DATA.change = true;
      SCM.sendToServer();
    });

    $("#e_mobileStorage").bind('keyup keydown keypress DOMAttrModified propertychange oninput',function(){
      SCM.DATA.userData.DeviceStorage = $("#e_mobileStorage").val();
      SCM.DATA.change = true;
      SCM.sendToServer();
    });

    $("#e_howOften").bind('keyup keydown keypress DOMAttrModified propertychange oninput',function(){
      SCM.DATA.userData.HowOften = $("#e_howOften").val();
      SCM.DATA.change = true;
      SCM.sendToServer();
    });

    // SWIPES

    /*
    var tolerance = 100;

    // Slide01
    this.slide01.touchStarted(function(){
      this.swipeXstart = mouseX;
      console.log("S: Touch Started: " + this.swipeXstart);
      console.log("S: TouchXEnd: " + swipeXend);
    });

    this.slide01.touchEnded(function(){
      var swipeXend = mouseX;
      console.log((this.swipeXstart-swipeXend));

      if(this.swipeXstart > swipeXend && (this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide02');
        this.swipeXstart = null;

      }else if(this.swipeXstart < swipeXend && -1*(this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide04');
        this.swipeXstart = null;

      }else{
        this.swipeXstart = null;
      }
      this.swipeXstart = null;
      swipeXend = null;
      console.log("E: Touch Started: " + this.swipeXstart);
      console.log("E: TouchXEnd: " + swipeXend);

    });

    // Slide02
    this.slide02.touchStarted(function(){
      this.swipeXstart = mouseX;
      console.log("S: Touch Started: " + this.swipeXstart);
      console.log("S: TouchXEnd: " + swipeXend);
    });

    this.slide02.touchEnded(function(){
      var swipeXend = mouseX;
      console.log((this.swipeXstart-swipeXend));

      if(this.swipeXstart > swipeXend && (this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide03');
        this.swipeXstart = null;

      }else if(this.swipeXstart < swipeXend && -1*(this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide01');
        this.swipeXstart = null;
      }else{
        this.swipeXstart = null;
      }
      this.swipeXstart = null;
      swipeXend = null;
      console.log("E: Touch Started: " + this.swipeXstart);
      console.log("E: TouchXEnd: " + swipeXend);

    });

    // Slide03
    this.slide03.touchStarted(function(){
      this.swipeXstart = mouseX;
      console.log("S: Touch Started: " + this.swipeXstart);
      console.log("S: TouchXEnd: " + swipeXend);
    });

    this.slide03.touchEnded(function(){
      var swipeXend = mouseX;
      console.log((this.swipeXstart-swipeXend));

      if(this.swipeXstart > swipeXend && (this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide04');
        this.swipeXstart = null;

      }else if(this.swipeXstart < swipeXend && -1*(this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide02');
        this.swipeXstart = null;
      }else{
        this.swipeXstart = null;
      }
      this.swipeXstart = null;
      swipeXend = null;
      console.log("E: Touch Started: " + this.swipeXstart);
      console.log("E: TouchXEnd: " + swipeXend);

    });

    // Slide04
    this.slide04.touchStarted(function(){
      this.swipeXstart = mouseX;
      console.log("S: Touch Started: " + this.swipeXstart);
      console.log("S: TouchXEnd: " + swipeXend);
    });

    this.slide04.touchEnded(function(){

      var swipeXend = mouseX;

      console.log((this.swipeXstart-swipeXend));

      if(this.swipeXstart > swipeXend && (this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide01');
        this.swipeXstart = null;

      }else if(this.swipeXstart < swipeXend && -1*(this.swipeXstart-swipeXend) > tolerance){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide03');
        this.swipeXstart = null;
      }else{
        this.swipeXstart = null;
      }
      this.swipeXstart = null;
      swipeXend = null;
      console.log("E: Touch Started: " + this.swipeXstart);
      console.log("E: TouchXEnd: " + swipeXend);
    });

    */

  }

  randomPlaylist(){
    console.log('randomPlaylist');
    SCM.DATA.api = false;
    SCM.DATA.change = true;
    SLIDES.toSlide('Input01');
  }

  spotifyPlaylist(){
    console.log('spotifyPlaylist');
    window.open(SCM.DATA.url+"/login","_blank");
    this.getUserPlaylists();
    SCM.DATA.change = true;
    SLIDES.toSlide('Input02');
  }

  getUserPlaylists(){
    // Get All Playlists of User
    setTimeout(function(){
      SCM.sendToServer();
      $.ajax({
          url: 'https://api.spotify.com/v1/me',
          headers: {
            'Authorization': 'Bearer ' + SCM.DATA.access_token
          },
          success: function(response) {
            console.log(SCM.DATA.access_token);
            console.log(response);
          }
      });
      SCM.DATA.api = true;
    }, 3000 );

  }

  getPlaylistData(PlaylistID){
    // All Data from Playlist
  }

  amount(){
      SCM.DATA.userData.SongsInPlaylist = $("#amountSongs").val();
      SCM.DATA.change = true;
      SLIDES.toSlide('Input02');
  }

  quality(quality){
    SCM.DATA.userData.Quality = quality;
    SCM.DATA.change = true;
    SLIDES.toSlide('Input03a');
  }

  volume(){
    SCM.DATA.userData.MobileTarifVolume = $("#dataVolume").val();
    SCM.DATA.change = true;
    SLIDES.toSlide('Input03b');
  }

  tarif(){
    SCM.DATA.userData.MobileTarifPrice = $("#tarif").val();
    SCM.DATA.change = true;
    SLIDES.toSlide('Input04');
  }

  storage(){
    SCM.DATA.userData.DeviceStorage = $("#mobileStorage").val();
    SCM.DATA.change = true;
    SLIDES.toSlide('Input05');
  }

  howoften(){
    SCM.DATA.userData.HowOften = $("#howOften").val();
    SCM.DATA.change = true;
    SCM.DATA.ready = true;
    SLIDES.toSlide('Slide01');
  }

  editMode(cur){
    console.log(cur);
    this.lastCur = cur;

    $("#e_amountSongs").attr("placeholder", SCM.DATA.userData.SongsInPlaylist);
    $("#e_amountSongs").val(SCM.DATA.userData.SongsInPlaylist);

    $("#e_quality").val(SCM.DATA.userData.Quality);

    $("#e_dataVolume").attr("placeholder", SCM.DATA.userData.MobileTarifVolume);
    $("#e_dataVolume").val(SCM.DATA.userData.MobileTarifVolume);

    $("#e_tarif").attr("placeholder", SCM.DATA.userData.MobileTarifPrice);
    $("#e_tarif").val(SCM.DATA.userData.MobileTarifPrice);

    $("#e_mobileStorage").attr("placeholder", SCM.DATA.userData.DeviceStorage);
    $("#e_mobileStorage").val(SCM.DATA.userData.DeviceStorage);

    $("#e_howOften").attr("placeholder", SCM.DATA.userData.HowOften);
    $("#e_howOften").val(SCM.DATA.userData.HowOften);

    SLIDES.toSlide('editMode');
  }

  closeEdit(cur){
    SLIDES.toSlide('closeEdit');
    SLIDES.toSlide(this.lastCur);
  }

}
