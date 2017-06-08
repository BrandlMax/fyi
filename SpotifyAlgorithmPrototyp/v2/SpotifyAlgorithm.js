class SpotifyAlgorithm{

  constructor(){

    this.API = false;
    this.APIOBJ = null;

    this.UserInput = {
      SongsInPlaylist: null,
      Quality: null,
      MobileTarifPrice: null,
      MobileTarifVolume: null, //GB
      MobileTarifFreeStreaming: false,
      DeviceStorage: null, // MB
      DeviceHowOften: null

    };

    this.Playlist = {
      duration : null,
      size : null
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
      StudentPrice: null,
      PremiumPrice:null,
      FairPrice: null,

      SongsPlayed: null,
      SongsPlayedOnFree: null,
      AdsPlayed: null,

      ArtistMoney: null,
      LabelMoney: null,
      SpotifyMoney: null
    };
  }

  // CALCULATION STUFF

  calculate(){
    // 1. CalculatePlaylistData
    this.calculatePlaylist();
    // 2. Calculate Costs and Pricing
    this.calculatePricing();
    // 3. Calculate Fair & Fingerprint
    this.calculateFair();
  }

  calculatePlaylist(){

    if(this.API){
      // IF API CONNECT: WE GET DURATION & SONG AMOUNT
    }{
      // IF NOT:
      // HERE CALCULATION FROM PLAYLIST TIME & DURATION
      // GET INPUT VIA this.UserInput.SongsInPlaylist

      // SONG LENGTH IN SEC
      let timePerSong = 180;
      this.Playlist.duration = this.UserInput.SongsInPlaylist * timePerSong;

      // Size in Kbit
      this.Playlist.size = this.Playlist.duration * this.Quality[this.UserInput.Quality].kbitsSec;

      console.log(this.Playlist);

    }

  }

  calculatePricing(){
    // HERE WE USE THE DATA FROM PLAYLIST CALCULATION AND
    // CALCULATE THE NEW PRICES

    // Streaming Cost in kbit
    let MobileTarifVolumeKbit = this.UserInput.MobileTarifVolume * 1024 * 1024 * 8;
    let streamingCostPerKbit = this.UserInput.MobileTarifPrice / MobileTarifVolumeKbit;


    ///////// PREMIUM
    let Premium_dataToStream = (this.UserInput.DeviceStorage * 1024 * 8) - this.Playlist.size;

    // If Data to Stream größer gleich 0 dann no streaming
    if(Premium_dataToStream >= 0){
      Premium_dataToStream = 0;
    }else{
      Premium_dataToStream = Premium_dataToStream * -1;
    }

    // Premium Streaming Cost
    let Premium_streamingCost = Premium_dataToStream * streamingCostPerKbit;


    ///////// FREE
    let Free_dataToStream = (this.UserInput.DeviceStorage * 1024 * 8) - this.Playlist.size;

    // Premium Streaming Cost
    let Free_streamingCost = Free_dataToStream * streamingCostPerKbit;


    // SAVE FINAL RESULTS:
    // this.Result.FreePrice = 10;

    this.Result.FreePrice = this.SpotifyTarife[0].price + Free_streamingCost;
    this.Result.Student = this.SpotifyTarife[1].price + Premium_streamingCost;
    this.Result.Premium = this.SpotifyTarife[2].price + Premium_streamingCost;

  }

  calculateFair(){
    // HERE WE USE THE (EFFECTIVE) PLAYED SONGS
    // AND DECIDE IF WE "PAY PER HEAR"
    // PLUS WE CALCULATE WHICH AMOUNT OF OUR MONEY GOES TO
    // SPOTIFY OR LABEL
  }

}
