var SA = new SpotifyAlgorithm();

function Simulate(){
    GetInputs();
    SA.calculate();
    Outputs();
}

function GetInputs(){
  /*
  this.UserInput = {
    SongsInPlaylist: 0,
    Quality: 0,
    MobileTarifPrice: 0,
    MobileTarifVolume: 0,
    MobileTarifFreeStreaming: false,
    Device: 0,
    DeviceStorage: 0,
    DeviceHowOften: 0
  }
  */

  SA.UserInput.SongsInPlaylist = document.getElementById("playlistLength").value;
  SA.UserInput.Quality = document.getElementById("SoundQuali").value;
  SA.UserInput.MobileTarifPrice = document.getElementById("MobileTarifPrice").value;
  SA.UserInput.MobileTarifVolume = document.getElementById("MobileTarifVolume").value;
  SA.UserInput.MobileTarifFreeStreaming = document.getElementById("MobileTarifFree").value;
  SA.UserInput.DeviceStorage = document.getElementById("freeStorage").value;
  SA.UserInput.HowOften = document.getElementById("timesPlayed").value;

}

function Outputs(){

  // Was bekomme ich für mein Geld?
  document.getElementById("FreePrice").innerHTML =  SA.Result.FreePrice;
  document.getElementById("SongsPlayedOnFree").innerHTML =  SA.Result.SongsPlayedOnFree;
  document.getElementById("AdsPlayed").innerHTML =  SA.Result.AdsPlayed;
  document.getElementById("TimeAdsPlayed").innerHTML =  SA.Result.TimeAdsPlayed;
  document.getElementById("FreeTimeMusicPlayed").innerHTML =  SA.Result.FreeTimeMusicPlayed;
  document.getElementById("FreeStreamSize").innerHTML =  SA.Result.FreeStreamSize;



  document.getElementById("StudentPrice").innerHTML =  SA.Result.StudentPrice;
  document.getElementById("PremiumPrice").innerHTML =  SA.Result.PremiumPrice;
  document.getElementById("SongsPlayed").innerHTML =  SA.Result.SongsPlayed;
  document.getElementById("SongsOffline").innerHTML =  SA.Result.SongsOffline;
  document.getElementById("SongsStreamed").innerHTML =  SA.Result.SongsStreamed;
  document.getElementById("TimeMusicPlayed").innerHTML =  SA.Result.TimeMusicPlayed;
  document.getElementById("PremiumStreamedSize").innerHTML =  SA.Result.PremiumStreamedSize;
  document.getElementById("PremiumOfflineSize").innerHTML =  SA.Result.PremiumOfflineSize;


  /*
  document.getElementById("PlaylistDuration").innerHTML =  SA.Playlist.duration;
  document.getElementById("PlaylistSize").innerHTML =  SA.Playlist.size;
  */



  // Was bekommen die Künstler von meinem Geld?
  document.getElementById("FairPrice").innerHTML =  SA.Result.FairPrice;
  document.getElementById("ArtistMoney").innerHTML =  SA.Result.ArtistMoney;
  document.getElementById("LabelMoney").innerHTML =  SA.Result.LabelMoney;
  document.getElementById("SpotifyMoney").innerHTML =  SA.Result.SpotifyMoney;

}
