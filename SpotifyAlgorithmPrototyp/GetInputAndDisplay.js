var SA = new SpotifyAlgorithm();

function Simulate(){
    GetInputs();
    SA.calculate();
    Outputs();
}

function GetInputs(){


  SA.Playlist.Songs = document.getElementById("playlistLength").value;
  SA.selectedQuali = document.getElementById("SoundQuali").value;
  SA.selectedMobileTarif = document.getElementById("MobileTarif").value;
  SA.selectedDevice = document.getElementById("Device").value;
  SA.DeviceFreeStorage = document.getElementById("freeStorage").value;
  SA.Playlist.TimesPlaylistWillBePlayed = document.getElementById("timesPlayed").value;

}

function Outputs(){

  document.getElementById("FreePrice").innerHTML =  SA.Result.FreePrice;
  document.getElementById("StudentPrice").innerHTML =  SA.Result.StudentPrice;
  document.getElementById("PremiumPrice").innerHTML =  SA.Result.PremiumPrice;
  document.getElementById("FairPrice").innerHTML =  SA.Result.FairPrice;

  document.getElementById("SongsPlayed").innerHTML =  SA.Result.SongsPlayed;
  document.getElementById("AdsPlayed").innerHTML =  SA.Result.AdsPlayed;

  document.getElementById("ArtistMoney").innerHTML =  SA.Result.ArtistMoney;
  document.getElementById("LabelMoney").innerHTML =  SA.Result.LabelMoney;
  document.getElementById("SpotifyMoney").innerHTML =  SA.Result.SpotifyMoney;

}
