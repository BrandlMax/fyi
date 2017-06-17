// FUNC MOBILE
class Func{
  constructor(){

  }

  eventHandler(){

    console.log("eventHandler Listens");
    $("#code").bind('keyup keydown keypress DOMAttrModified propertychange',function(){
      if($(this).val() == SCM.DATA.room){
        SLIDES.toSlide('Input00');
      }
    });
  }

  randomPlaylist(){
    console.log('randomPlaylist');
    SLIDES.toSlide('Input01');
  }

  spotifyPlaylist(){
    console.log('spotifyPlaylist');
    window.open("http://localhost:1337/login","_self");
    // SLIDES.toSlide('Input02');
  }

  amount(){
      SCM.DATA.SongsInPlaylist = $("#amountSongs").val();
      SLIDES.toSlide('Input02');
  }

  quality(quality){
    SCM.DATA.Quality = quality;
    SLIDES.toSlide('Input03a');
  }

  volume(){
    SCM.DATA.MobileTarifVolume = $("#dataVolume").val();
    SLIDES.toSlide('Input03b');
  }

  tarif(){
    SCM.DATA.MobileTarifPrice = $(this).val("#tarif");
  }



}
