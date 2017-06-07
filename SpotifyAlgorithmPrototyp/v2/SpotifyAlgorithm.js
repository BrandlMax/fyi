class SpotifyAlgorithm{

  constructor(){

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

    // DEVICES
    this.Devices = [
      {
        id: "Apple",
        priceperkbit: 3.00,
      },
      {
        id: "Android",
        priceperkbit: 2.00
      },
      {
        id: "Cheap Phone",
        priceperkbit: 1.00
      },
      {
        id: "Expensive Phone",
        priceperkbit: 1.00
      }
    ];

    // RESULTS OBJECT
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

  calucate(){
    // 1. CalculatePlaylistData
    this.calculatePlaylist();
    // 2. Calculate Costs and Pricing
    this.calculatePricing();
    // 3. Calculate Fair
    this.calculateFair();
  }

  calculatePlaylist(){

  }

  calculatePricing(){

  }

  calculateFair(){

  }

}
