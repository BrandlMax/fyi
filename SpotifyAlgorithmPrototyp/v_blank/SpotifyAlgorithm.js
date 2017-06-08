class SpotifyAlgorithm{

  constructor(){

    this.API = false;

    this.UserInput = {
      SongsInPlaylist: 0,
      Quality: 0,
      MobileTarifPrice: 0,
      MobileTarifVolume: 0, //GB
      MobileTarifFreeStreaming: false,
      DeviceStorage: 0, // MB
      DeviceHowOften: 0

    }

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
      FreePrice: 0,
      StudentPrice: 0,
      PremiumPrice:0,
      FairPrice: 0,

      SongsPlayed: 0,
      SongsPlayedFree: 0,
      AdsPlayed: 0,

      ArtistMoney: 0,
      LabelMoney: 0,
      SpotifyMoney: 0
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
    }

  }

  calculatePricing(){
    // HERE WE USE THE DATA FROM PLAYLIST CALCULATION AND
    // CALCULATE THE NEW PRICES

    // SAVE FINAL RESULTS:
    // this.Result.FreePrice = 10;
  }

  calculateFair(){
    // HERE WE USE THE (EFFECTIVE) PLAYED SONGS
    // AND DECIDE IF WE "PAY PER HEAR"
    // PLUS WE CALCULATE WHICH AMOUNT OF OUR MONEY GOES TO
    // SPOTIFY OR LABEL
  }

}
