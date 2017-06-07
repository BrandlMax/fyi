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
  SA.UserInput.DeviceHowOften = document.getElementById("timesPlayed").value;

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
