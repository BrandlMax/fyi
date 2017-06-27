// Mobile
class Slides{
  constructor(){
      this.start00 = select('#start00');
      this.input00 = select('#input00');
      this.input00a = select('#input00a');
      this.input01 = select('#input01');
      this.input02 = select('#input02');
      this.input03a = select('#input03a');
      this.input03b = select('#input03b');
      this.input04 = select('#input04');
      this.input05 = select('#input05');

      this.slide01 = select('#slide01');
      this.slide02 = select('#slide02');
      this.slide03 = select('#slide03');
      this.slide04 = select('#slide04');
      this.slide05 = select('#slide05');

      this.edit = select('#edit');
  }

  toSlide(Slide){

    if(Slide != SCM.DATA.currentStateMobile){
      SCM.DATA.oldState = SCM.DATA.currentStateMobile;
      SCM.DATA.currentStateMobile = Slide;

      // SCENE SWITCH
      switch(SCM.DATA.currentStateMobile) {

        case 'Start00':
            this.start00.show();
            this.start00.style("display", "flex");
            break;

        case 'Input00':
            this.start00.hide();
            this.input00.show();
            this.input00.style("display", "flex");
            break;

        case 'Input00a':
            this.input00.hide();
            this.input00a.show();
            this.input00a.style("display", "flex");
            break;

        case 'Input01':
            this.input00a.hide();
            this.input01.show();
            this.input01.style("display", "flex");
            break;

        case 'Input02':
            this.input00.hide();
            this.input01.hide();
            this.input02.show();
            this.input02.style("display", "flex");
            break;

        case 'Input03a':
            this.input02.hide();
            this.input03a.show();
            this.input03a.style("display", "flex");
            break;

        case 'Input03b':
            this.input03a.hide();
            this.input03b.show();
            this.input03b.style("display", "flex");
            break;


        case 'Input04':
            this.input03b.hide();
            this.input04.show();
            this.input04.style("display", "flex");
            break;

        case 'Input05':
            this.input04.hide();
            this.input05.show();
            this.input05.style("display", "flex");
            break;

        case 'Slide01':
            this.input05.hide();
            this.slide05.hide();
            this.slide04.hide();
            this.slide02.hide();
            this.slide01.show();
            this.slide01.style("display", "flex");
            break;

        case 'Slide02':
            this.slide01.hide();
            this.slide03.hide();
            this.slide02.show();
            this.slide02.style("display", "flex");
            break;

        case 'Slide03':
            this.slide02.hide();
            this.slide04.hide();
            this.slide03.show();
            this.slide03.style("display", "flex");
            break;

        case 'Slide04':
            this.slide05.hide();
            this.slide03.hide();
            this.slide01.hide();
            this.slide04.show();
            this.slide04.style("display", "flex");
            break;

        case 'Slide05':
            this.slide04.hide();
            this.slide01.hide();
            this.slide05.show();
            this.slide05.style("display", "flex");
            break;

        case 'editMode':
            this.edit.show();
            this.edit.style("display", "flex");
            break;

        case 'closeEdit':
            this.edit.hide();
            break;

        default:
            console.log('No Scene Found for ' + SCM.DATA.currentStateMobile + '!');
      }

    }

    // sendToServer
    SCM.sendToServer();

  }


  // CANVAS DESIGN

  Start00(){
    // Enter Code
    background(STYLE.colors.lila.full);
    //text('Enter Code',50,50,100,100);
  }

  Input00(){
    // Spotify oder Random?
    background(STYLE.colors.pink.full);
    //text('Spotify oder Random?',50,50,100,100);
  }

  Input00a(){
    // Spotify oder Random?
    background(STYLE.colors.pink.full);
    //text('Spotify oder Random?',50,50,100,100);
  }

  Input01(){
    // Songs in Playlist
    background(STYLE.colors.pink.full);
    //text('Songs in Playlist',50,50,100,100);
  }

  Input02(){
    // Quality
    background(STYLE.colors.pink.full);
    //text('Quality',50,50,100,100);
  }

  Input03a(){
    // Datenvolumen
    background(STYLE.colors.pink.full);
    //text('Datenvolumen & Tarif Preis',50,50,100,100);
  }

  Input03b(){
    // Tarif Preis
    background(STYLE.colors.pink.full);
    //text('Datenvolumen & Tarif Preis',50,50,100,100);
  }

  Input04(){
    // Speicher auf dem Smartphone
    background(STYLE.colors.pink.full);
    //text('Speicher auf dem Smartphone',50,50,100,100);
  }

  Input05(){
    // Wie oft die Playlist gehört wird
    background(STYLE.colors.pink.full);
    //text('Wie oft die Playlist gehört wird',50,50,100,100);
  }

  Slide01(){
    // Music Amount
    background(STYLE.colors.blue.full);
    fill(STYLE.colors.pink.full);
  }

  Slide02(){
    // Music Duration
    background(STYLE.colors.lila.full);
  }

  Slide03(){
    // Ads
    background(STYLE.colors.green.full);
  }

  Slide04(){
    // Artist
    background(STYLE.colors.pink.full);
  }

  Slide05(){
    // Pizza
    background(STYLE.colors.pink.full);
  }

  editMode(){
    // Artist
    background(STYLE.colors.pink.full);
  }

}
