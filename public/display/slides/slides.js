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

    // RESULTS
    this.amount = select("#amount");
    this.amount1 = select("#amount1");

    this.duration = select("#duration");
    this.duration1 = select("#duration1");

    this.ads = select("#ads");
    this.ads1 = select("#ads01");

    this.artist = select("#artist");
    this.artist1 = select("#artist1");
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
            this.amount1.html(floor(SCM.DATA.results.SongsPlayed/10));
            break;

        case 'Slide02':
            this.slide01.hide();
            this.slide03.hide();
            this.slide02.show();
            this.slide02.style("display", "flex");

            this.duration.html(floor(SCM.DATA.results.TimeMusicPlayed/1000/60));
            this.duration1.html(floor(SCM.DATA.results.TimeMusicPlayed/1000/60/15));
            break;

        case 'Slide03':
            this.slide02.hide();
            this.slide04.hide();
            this.slide03.show();
            this.slide03.style("display", "flex");

            this.ads.html(SCM.DATA.results.AdsPlayed);
            this.ads1.html(floor(SCM.DATA.results.TimeAdsPlayed/1000/60));
            break;

        case 'Slide04':
            this.slide03.hide();
            this.slide01.hide();
            this.slide04.show();
            this.slide04.style("display", "flex");

            this.artist.html("0");
            this.artist1.html(floor(0));
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
    text('Waiting / Code',50,50,100,100);
  }

  Input00(){
    // Inputs
    background(STYLE.colors.pink.full);
    fill(STYLE.colors.green.full);
    text('Inputs',50,50,100,100);
  }

  Slide01(){
    // Music Amount
    background(STYLE.colors.blue.full);
    fill(STYLE.colors.pink.full);
    text('Music Amount',50,50,100,100);
  }

  Slide02(){
    // Music Duration
    background(STYLE.colors.lila.full);
    fill(STYLE.colors.pink.full);
    text('Music Duration',50,50,100,100);
  }

  Slide03(){
    // Ads
    background(STYLE.colors.green.full);
    fill(STYLE.colors.blue.full);
    text('Ads',50,50,100,100);
  }

  Slide04(){
    // Artist
    background(STYLE.colors.pink.full);
    fill(STYLE.colors.blue.full);
    text('Artist',50,50,100,100);
  }

}
