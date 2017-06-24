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

    console.log("eventHandler Listens");
    $("#code").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      if($(this).val() == SCM.DATA.room){
        SLIDES.toSlide('Input00');
      }
    });

    // EDIT MODE
    
    $("#e_amountSongs").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      SCM.DATA.userData.SongsInPlaylist = $("#e_amountSongs").val();
      SCM.sendToServer();
    });

    $("#e_quality").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      SCM.DATA.userData.Quality = $("#e_quality").val();
      SCM.sendToServer();
    });

    $("#e_dataVolume").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      SCM.DATA.userData.MobileTarifPrice = $("#e_dataVolume").val();
      SCM.sendToServer();
    });

    $("#e_tarif").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      SCM.DATA.userData.MobileTarifFreeStreaming = $("#e_tarif").val();
      SCM.sendToServer();
    });

    $("#e_mobileStorage").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      SCM.DATA.userData.DeviceStorage = $("#e_mobileStorage").val();
      SCM.sendToServer();
    });

    $("#e_howOften").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      SCM.DATA.userData.HowOften = $("#e_howOften").val();
      SCM.sendToServer();
    });

    // SWIPES
    // Slide01
    this.slide01.touchStarted(function(){
      this.swipeXstart = mouseX;
    });

    this.slide01.touchEnded(function(){
      var swipeXend = mouseX;

      if(this.swipeXstart > swipeXend){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide02');
        this.swipeXstart = null;
      }else if(this.swipeXstart < swipeXend){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide04');
        this.swipeXstart = null;
      }
    });

    // Slide02
    this.slide02.touchStarted(function(){
      this.swipeXstart = mouseX;
    });

    this.slide02.touchEnded(function(){
      var swipeXend = mouseX;

      if(this.swipeXstart > swipeXend){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide03');
        this.swipeXstart = null;
      }else if(this.swipeXstart < swipeXend){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide01');
        this.swipeXstart = null;
      }
    });

    // Slide03
    this.slide03.touchStarted(function(){
      this.swipeXstart = mouseX;
    });

    this.slide03.touchEnded(function(){
      var swipeXend = mouseX;

      if(this.swipeXstart > swipeXend){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide04');
        this.swipeXstart = null;
      }else if(this.swipeXstart < swipeXend){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide02');
        this.swipeXstart = null;
      }
    });

    // Slide04
    this.slide04.touchStarted(function(){
      this.swipeXstart = mouseX;
    });

    this.slide04.touchEnded(function(){
      var swipeXend = mouseX;

      if(this.swipeXstart > swipeXend){
        console.log("Swipe Left (next)");
        SLIDES.toSlide('Slide01');
        this.swipeXstart = null;
      }else if(this.swipeXstart < swipeXend){
        console.log("Swipe Right (before)");
        SLIDES.toSlide('Slide03');
        this.swipeXstart = null;
      }
    });

  }

  randomPlaylist(){
    console.log('randomPlaylist');
    SCM.DATA.api = false;
    SLIDES.toSlide('Input01');
  }

  spotifyPlaylist(){
    console.log('spotifyPlaylist');
    window.open(SCM.DATA.url+"/login","_blank");
    this.getUserPlaylists();
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
      SLIDES.toSlide('Input02');
  }

  quality(quality){
    SCM.DATA.userData.Quality = quality;
    SLIDES.toSlide('Input03a');
  }

  volume(){
    SCM.DATA.userData.MobileTarifVolume = $("#dataVolume").val();
    SLIDES.toSlide('Input03b');
  }

  tarif(){
    SCM.DATA.userData.MobileTarifPrice = $("#tarif").val();
    SLIDES.toSlide('Input04');
  }

  storage(){
    SCM.DATA.userData.DeviceStorage = $("#mobileStorage").val();
    SLIDES.toSlide('Input05');
  }

  howoften(){
    SCM.DATA.userData.HowOften = $("#howOften").val();
    SCM.DATA.ready = true;
    SLIDES.toSlide('Slide01');
  }

  editMode(cur){
    console.log(cur);
    this.lastCur = cur;
    SLIDES.toSlide('editMode');
  }

  closeEdit(cur){
    SLIDES.toSlide('closeEdit');
    SLIDES.toSlide(this.lastCur);
  }

}
