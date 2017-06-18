var Playlist = require('./Playlist.js');
class SpotifyAlgorithm{

  constructor(randomPlaylistGenerator){

    this.API = false;
    this.APIdata = null;

    // Create Playlist Template
    this.Playlist = null;

    this.UserInput = {

      SongsInPlaylist: null,
      Quality: null,
      MobileTarifPrice: null,
      MobileTarifVolume: null, //GB
      MobileTarifFreeStreaming: false,
      DeviceStorage: null, // MB
      HowOften: null

    };

    // Quality
    this.Quality = [
      {
        id: "Normal",
        kbitsSec: 96,
      },
      {
        id: "Hoch",
        kbitsSec: 160
      },
      {
        id: "Extrem",
        kbitsSec: 320
      }
    ];

    // SPOTIFY TARIF
    this.SpotifyTarife = [
      {
        id: "Free",
        price: 0.00
      },
      {
        id: "Student",
        price: 4.99
      },
      {
        id: "Premium",
        price: 9.99
      }
    ];

    // RESULTS OBJECT
    // HERE WE SAVE OUR FINAL DATA
    this.Result = {
      FreePrice: null,
      SongsPlayedOnFree: null,
      FreeTimeMusicPlayed: null,
      AdsPlayed: null,
      TimeAdsPlayed: null,
      FreeStreamSize: null,

      StudentPrice: null,
      PremiumPrice:null,
      SongsPlayed: null,
      TimeMusicPlayed: null,
      SongsOffline: null,
      SongsStreamed: null,
      PremiumStreamedSize: null,
      PremiumOfflineSize: null,

      FairPrice: null,
      ArtistMoney: null,
      LabelMoney: null,
      SpotifyMoney: null
    };
  }

  //

  getRandomDuration(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min;
  }

  // CALCULATION STUFF

  calculate(){

    // 1. Generate Playlists
    if(!this.API){
      this.generatePlaylists();
    } else{
      this.generateAPIbasedPlaylist();
    }


    // 2. Play Playlist
    this.playPlaylist();

    // 3. Calculate FairTarif
    this.calculateFairTarif();

  }


  generatePlaylists(){

    this.Playlist = new Playlist();

    // SETTINGS
    this.Playlist.quality = this.Quality[this.UserInput.Quality].kbitsSec;


    // Generate PLAYLIST

    for(var i = 0; i < this.UserInput.SongsInPlaylist; i++){

      var n = "Catsong" + (i + 1);
      // Zufallslänge zwischen 2,45m und 4,30
      var d = this.getRandomDuration(165000, 270000);
      // var d = 180000; // Every Song 3min

      this.Playlist.addSong(n, d);
      this.Playlist.calcMetaData();
    }

    // console.log(this.Playlist);

  }


  generateAPIbasedPlaylist(){
    // DURATION IN MS!!!
    console.log("API BASED PLAYLIST");
  }


  playPlaylist(){
    console.log("Play Playlist");
      // OVERALL

      // Play with Free Account
      // WITH ADS AFTER 15min = 1min

      var lastAd = 0;
      var VolumneFull = false;

      // Mobile Volume in kbit
      this.UserInput.MobileTarifVolume = (this.UserInput.MobileTarifVolume*1000*1000*8);
      // Price Per Kbit Streaming
      var streamingCostPerKbits = this.UserInput.MobileTarifPrice / this.UserInput.MobileTarifVolume;

      this.Result.FreePrice = this.SpotifyTarife[0].price;
      this.Result.FreeStreamSize = 0;

      this.Result.SongsPlayedOnFree = 0;
      this.Result.AdsPlayed = 0;

      this.Result.FreeTimeMusicPlayed = 0;
      this.Result.TimeAdsPlayed = 0;

      // Premium Account
      this.UserInput.DeviceStorage = this.UserInput.DeviceStorage * 1000 * 8;

      this.Result.StudentPrice = this.SpotifyTarife[1].price;
      this.Result.PremiumPrice = this.SpotifyTarife[2].price;

      this.Result.SongsPlayed = 0;
      this.Result.TimeMusicPlayed = 0;
      this.Result.SongsOffline = 0;
      this.Result.SongsStreamed = 0;

      this.Result.PremiumOfflineSize = 0;
      this.Result.PremiumStreamedSize = 0;

      // PLAY

      for(var times = 0; times < this.UserInput.HowOften; times++){

        for(var i = 0; i < this.Playlist.songs.length; i++){

          if(this.Result.FreeStreamSize + this.Playlist.songs[i].size < this.UserInput.MobileTarifVolume){

            // AD? Every 15min (in ms) Music
            if(lastAd >= 900000){

              // PLAY AD
              var d = 60000; //ms -> 1min
              var s = (d/1000) * this.Playlist.quality; // Size of Ad: ms to sec and mal quality per sec

              this.Result.TimeAdsPlayed += d;
              this.Result.FreeStreamSize += s;
              this.Result.AdsPlayed++;

              this.Result.FreePrice += s * streamingCostPerKbits;

              lastAd = 0;
              i -= 1

            }else{

              // PLAY SONG

              this.Result.FreeStreamSize += this.Playlist.songs[i].size;
              this.Result.FreeTimeMusicPlayed += this.Playlist.songs[i].duration;
              this.Result.SongsPlayedOnFree++;

              var priceSong = this.Playlist.songs[i].size * streamingCostPerKbits;
              this.Result.FreePrice += priceSong;

              lastAd += this.Playlist.songs[i].duration;

            }

          }

        }

      // Play with Premium Account

        for(var i = 0; i < this.Playlist.songs.length; i++){

          if(this.Result.PremiumOfflineSize + this.Playlist.songs[i].size < this.UserInput.DeviceStorage){

              // Make Song Offline

              this.Result.PremiumOfflineSize += this.Playlist.songs[i].size;
              this.Result.SongsOffline++;

              this.Result.TimeMusicPlayed += this.Playlist.songs[i].duration;
              this.Result.SongsPlayed++;


            }else if(this.Result.PremiumStreamedSize + this.Playlist.songs[i].size < this.UserInput.MobileTarifVolume){

              // Stream Song

              this.Result.PremiumStreamedSize += this.Playlist.songs[i].size;
              this.Result.TimeMusicPlayed += this.Playlist.songs[i].duration;
              this.Result.SongsStreamed++;
              this.Result.SongsPlayed++;

              var PremiumPriceSong = this.Playlist.songs[i].size * streamingCostPerKbits;
              this.Result.StudentPrice += PremiumPriceSong;
              this.Result.PremiumPrice += PremiumPriceSong;

              if(this.Result.PremiumStreamedSize + this.Playlist.songs[i].size > this.UserInput.MobileTarifVolume){
                VolumneFull = true;
                console.log("Overload");
              }
            }

        } // For Playlist



      } // For Times

      // IF DEVICE STORAGE IS FULL (AND STREAMING)
      if(VolumneFull){
        console.log("Listened");

        this.Result.SongsPlayed += (this.Result.SongsOffline * (this.UserInput.HowOften-1));
        this.Result.TimeMusicPlayed += ((this.Result.PremiumOfflineSize / this.Quality[this.UserInput.Quality].kbitsSec)*1000);

      }

  }

  calculateFairTarif(){

  }


}

module.exports = SpotifyAlgorithm;
