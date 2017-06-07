class SpotifyAlgorithm{

  constructor(){

    // USER
    this.SpotifyAPI = false;
    this.selectedQuali = 0;
    this.selectedDevice = 0;
    this.selectedMobileTarif = 0;
    this.DeviceFreeStorage; // In MB

    // 1kb = 8kbit

    // PLAYLIST DATA WITH SPOTIFY CONNECT
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
    ]; // the quality choose in Spotify (kbits/s)

    this.Playlist = {
      Duration: 0, // calculates or API
      SizeInKb: 0, // in kb
      Songs: 0, // From User or API
      TimesPlaylistWillBePlayed: 0, // From User or API - Wie oft hörst du die Playlist
      OverallDuration: 0, // After Times
      OverallSizeInKb: 0, // After Times
      OverallSongs: 0 // After Times
    }; // in sec

    this.SongLength = 3; // or Random?

    // Ads
    this.AdsDurationInSec = 30;
    this.AllNSongsAd = 4;

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

    // DEVICE
    this.Devices = [
      {
        id: "Apple",
        priceperkb: 3.00,
      },
      {
        id: "Samsung",
        priceperkb: 2.00
      },
      {
        id: "Cheap Phone",
        priceperkb: 1.00
      },
      {
        id: "Expensive Phone",
        priceperkb: 1.00
      }
    ];

    this.DeviceStoragePrice;


    // MOBILE TARIF
    this.MobileTarife = [
      {
        id: "Telekom Magenta",
        volumeinGB: 2,
        priceperkb: 1.00
      },
      {
        id: "Vodaphone",
        volumeinGB: 3,
        priceperkb: 1.00
      },
      {
        id: "Aldi Talk",
        volumeinGB: 3,
        priceperkb: 1.00
      }
    ];

    this.MobileStreamingPriceFree;
    this.MobileStreamingPricePremium;


    // FAIR & ARTIST
    this.SpotifyPercentage = 0;
    this.LabelPercentage = 0;
    this.ArtistPercentage = 0;

    this.ArtistPerPlay = 0.007;

    // WHAT DO YOU WANT TO PAY PER SONG?
    this.ArtistFairPrice = 0.1;

    // RESULTS
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

  calculate(){

    // 1. Get Playlist Data
    this.CalculatePlaylist();
    // 2. Get Pricing
    this.CalculatePricing();
    // 3. Calculate Ethical Fingerprint
    this.CalculateFair();
    this.calculateEthnicalFingerprint();

  }

  CalculatePlaylist(){

    // 1. Playlist / Songtime / Size
    if(this.SpotifyAPI){
      // Wenn Spotify API verwendet wird
      /*
        this.Playlist.Songs = fromSpotifyAPI.Songs;
        this.Playlist.Duration = fromSpotifyAPI.Duration;

        this.Playlist.Size = this.PlaylistDuration * this.Quality[this.selectedQuali].kbitsSec;
        this.Playlist.Size = this.Playlist.Size / 8;

        // OverAll
        this.Playlist.OverallDuration = this.Playlist.Duration * this.TimesPlaylistWillBePlayed;
        this.Playlist.OverallSizeInKb = this.Playlist.Size * this.TimesPlaylistWillBePlayed;
        this.Playlist.OverallSongs = this.Playlist.Songs * this.TimesPlaylistWillBePlayed;
      */

    }else{
      // Wenn man die Playlist Manuell erstellt
      this.Playlist.Duration = this.Playlist.Songs * this.SongLength;
      // Size in kbit
      this.Playlist.Size = this.Playlist.Duration * this.Quality[this.selectedQuali].kbitsSec;
      // Size in kb
      this.Playlist.Size = this.Playlist.Size / 8;
      // OverAll
      this.Playlist.OverallDuration = this.Playlist.Duration * this.Playlist.TimesPlaylistWillBePlayed;
      this.Playlist.OverallSizeInKb = this.Playlist.Size * this.Playlist.TimesPlaylistWillBePlayed;
      this.Playlist.OverallSongs = this.Playlist.Songs * this.Playlist.TimesPlaylistWillBePlayed;

    }

  }

  CalculatePricing(){

    debugger
    // 1. Devices
      var RestKbToStream = this.Playlist.OverallSizeInKb - (this.DeviceFreeStorage * 1024 * 8);

      if(RestkbToStream > 0 || this.Playlist.OverallSizeInKb > this.MobileTarife[this.selectedMobileTarif].volumeinGB){
          // IF THERE IS ENOUGH SPACE ON PHONE
          this.DeviceStoragePrice =  this.Playlist.OverallSizeInKb * this.Devices[this.selectedDevice].priceperkb;
      } else{
          // THERE IS NOT ENOUGH SPACE ON PHONE
          RestKbToStream = RestKbToStream * -1;
      }

    // 2. Streaming

      // Premium
      var RestkbOnFlat = (this.MobileTarife[this.selectedMobileTarif].volumeinGB * 1024 * 1024 * 8 ) - RestKbToStream;

      if(RestkbOnFlat < 0 || this.Playlist.OverallSizeInKb > this.MobileTarife[this.selectedMobileTarif].volumeinGB){
        // Storage Aufgebraucht Meldung?
      }

      // Premium
      this.MobileStreamingPricePremium = RestKbToStream * this.MobileTarife[this.selectedMobileTarif].priceperkb;

      // Free
      this.MobileStreamingPriceFree = this.Playlist.OverallSizeInKb * this.MobileTarife[this.selectedMobileTarif].priceperkb

    // 3. Spotify Tarife

      // Free Price Full
      this.Result.FreePrice = this.SpotifyTarife[0].price + this.MobileStreamingPriceFree;

      // Student Price Full
      this.Result.StudentPrice = this.SpotifyTarife[1].price + this.MobileStreamingPricePremium + this.DeviceStoragePrice;

      // Premium Price Full
      this.Result.PremiumPrice = this.SpotifyTarife[2].price + this.MobileStreamingPricePremium + this.DeviceStoragePrice;

      // IN RESULTS CAUSE NO FILTER FOR HOW MUCH
      // WHAT YOU GET
      this.Result.SongsPlayed = this.Playlist.OverallSongs;
      // WERBUNG
      /*
      Amount Ads * Add Length 30sec
      */
      this.Result.AdsPlayed = this.Result.SongsPlayed / 4;
      this.Result.SongsPlayedFree = this.Result.SongsPlayed - this.Result.AdsPlayed;

  }

  CalculateFair(){
    // NO Idea What to do here, maybe pay per play?

    var perPlayPriceFull = this.ArtistFairPrice * this.Playlist.OverallSongs;
    // this.Results.FairPrice = (SPOTIFY PERCENTAGE + LABEL PERCENTAG + perPlayPriceFull)

  }

  calculateEthnicalFingerprint(){
    // What does the Artist get? What the Label? What Spotify?
    // Here we need some Percentages
  }

}
