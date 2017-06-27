// DESKTOP
class Slides{
  constructor(){
    // OVERLAY DIVS
    this.start00 = select('#start00');
    this.input00 = select('#input00');

    this.slide01 = select('#slide01');
    this.slide02 = select('#slide02');
    this.slide03 = select('#slide03');
    this.slide04 = select('#slide04');
    this.slide04 = select('#slide05');

    // CODE

    this.code = select("#code");

    // RESULTS AREAS
    this.amount = select("#amount");
    this.amount1 = select("#amount1");

    this.duration = select("#duration");
    this.duration1 = select("#duration1");

    this.ads = select("#ads");
    this.ads1 = select("#ads01");

    this.artist = select("#artist");
    this.artist1 = select("#artist1");

    this.sTarifArea = select("#sTarif");
    this.sPriceArea = select("#sPrice");
    this.beerArea = select("#beer");

    // RESULTS COMPAPRE

    this.cd = null;
    this.showers = null;
    this.traffic = null;

    this.fair = null;
    this.artistmoney = null;

    this.sTarif = null;
    this.sPrice = null;
    this.beer = null;
  }

  reCalc(){
    this.cd = floor(SCM.DATA.results.SongsPlayed/12); // 12 Songs per CD
    this.showers = floor(SCM.DATA.results.TimeMusicPlayed/1000/60/10); // 10 mins per Shower
    this.traffic = floor(SCM.DATA.results.TimeAdsPlayed/1000/60);

    // Fair Slide
    this.artistmoney = Math.round(0.0038456 * SCM.DATA.results.SongsPlayed * 100) / 100;
    this.fair = floor(this.artistmoney/(5/8)); //per Play 0.0038456

    // Tarif Slide Slide
    this.sTarif = SCM.DATA.userData.Tarif;

    if(this.sTarif == "Premium"){
      this.sPrice = SCM.DATA.results.PremiumPrice;
    } else if(this.sTarif == "Student"){
      this.sPrice = SCM.DATA.results.StudentPrice;
    } else{
      this.sPrice = SCM.DATA.results.FreePrice;
    }

    // Price Beer 4€
    this.beer = floor(this.sPrice / 4);


  }

  checkOverlay(){

    if(SCM.DATA.currentStateMobile != SCM.DATA.currentStateDisplay){

       SCM.DATA.currentStateDisplay = SCM.DATA.currentStateMobile;

      // SCENE SWITCH
      switch(SCM.DATA.currentStateDisplay) {

        case 'Start00':
            console.log("start");
            this.start00.show();
            this.start00.style("display", "flex");
            this.code.html(SCM.DATA.room);
            break;

        case 'Input00':
            console.log("input00");
            this.start00.hide();
            this.input00.show();
            this.input00.style("display", "flex");
            break;

        case 'Input01':
            SCM.DATA.currentStateDisplay = 'Input00';
            break;

        case 'Input01a':
            SCM.DATA.currentStateDisplay = 'Input00';
            break;

        case 'Input02':
            SCM.DATA.currentStateDisplay = 'Input00';
            break;

        case 'Input03a':
            SCM.DATA.currentStateDisplay = 'Input00';
            break;

        case 'Input03b':
            SCM.DATA.currentStateDisplay = 'Input00';
            break;


        case 'Input04':
            SCM.DATA.currentStateDisplay = 'Input00';
            break;

        case 'Input05':
            SCM.DATA.currentStateDisplay = 'Input00';
            break;

        case 'Slide01':
            this.input00.hide();
            this.slide04.hide();
            this.slide02.hide();
            this.slide01.show();
            this.slide01.style("display", "flex");

            this.amount.html(SCM.DATA.results.SongsPlayed);
            this.amount1.html(this.cd);
            break;

        case 'Slide02':
            this.slide01.hide();
            this.slide03.hide();
            this.slide02.show();
            this.slide02.style("display", "flex");

            this.duration.html(floor(SCM.DATA.results.TimeMusicPlayed/1000/60));
            this.duration1.html(this.showers);
            break;

        case 'Slide03':
            this.slide02.hide();
            this.slide04.hide();
            this.slide03.show();
            this.slide03.style("display", "flex");

            this.ads.html(SCM.DATA.results.AdsPlayed);
            this.ads1.html(this.traffic);
            break;

        case 'Slide04':
            this.slide03.hide();
            this.slide01.hide();
            this.slide04.show();
            this.slide04.style("display", "flex");

            this.artist.html(this.artistmoney);
            this.artist1.html(this.fair);
            break;

        case 'Slide05':
            this.slide04.hide();
            this.slide01.hide();
            this.slide05.show();
            this.slide05.style("display", "flex");

            this.sTarifArea.html(this.sTarif);
            this.sPriceArea.html(this.sPrice);
            this.beerArea.html(this.beer);
            break;

        case 'editMode':
            this.reCalc();
            this.amount.html(SCM.DATA.results.SongsPlayed);
            this.amount1.html(this.cd);

            this.duration.html(floor(SCM.DATA.results.TimeMusicPlayed/1000/60));
            this.duration1.html(this.showers);

            this.ads.html(SCM.DATA.results.AdsPlayed);
            this.ads1.html(this.traffic);

            this.artist.html(this.artistmoney);
            this.artist1.html(this.fair);
            break;

        default:
            console.log('No Scene Found for ' + SCM.DATA.currentStateMobile + '!');
      }

    }

  }

  // CANVAS DESIGN

  Start00(){
    // Waiting for Connection
    background(STYLE.colors.lila.full);
    fill(STYLE.colors.blue.full);
    // GRID.drawIt(100,"🎧");
    //text('Waiting / Code',50,50,100,100);
  }

  Input00(){
    // Inputs
    background(STYLE.colors.pink.full);
    fill(STYLE.colors.green.full);
    //text('Inputs',50,50,100,100);
  }

  Slide01(){
    // Music Amount
    background(STYLE.colors.blue.full);
    fill(STYLE.colors.pink.full);
    //text('Music Amount',50,50,100,100);
    this.reCalc();
    GRID.drawIt(this.cd,"💿");
  }

  Slide02(){
    // Music Duration
    background(STYLE.colors.lila.full);
    fill(STYLE.colors.pink.full);
    //text('Music Duration',50,50,100,100);
    this.reCalc();
    GRID.drawIt(this.showers,"🛀");
  }

  Slide03(){
    // Ads
    background(STYLE.colors.green.full);
    fill(STYLE.colors.blue.full);
    //text('Ads',50,50,100,100);
    this.reCalc();
    GRID.drawIt(this.traffic,"🚗");
  }

  Slide04(){
    // Artist
    background(STYLE.colors.pink.full);
    fill(STYLE.colors.blue.full);
    //text('Artist',50,50,100,100);
    this.reCalc();
    GRID.drawIt(this.fair,"🍕");
  }

  Slide05(){
    // Beer Tarif
    background(STYLE.colors.pink.full);
    fill(STYLE.colors.blue.full);
    //text('Artist',50,50,100,100);
    this.reCalc();
    GRID.drawIt(this.beer,"🍺");
  }

  editMode(){
    switch(SCM.DATA.oldState) {
      case 'Slide01':
      this.Slide01();
      break;

      case 'Slide02':
      this.Slide02();
      break;

      case 'Slide03':
      this.Slide03();
      break;

      case 'Slide04':
      this.Slide04();
      break;
    }
  }


}
