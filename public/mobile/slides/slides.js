// Mobile
class Slides{
  constructor(){
      this.start00 = select('#start00');
      this.input00 = select('#input00');
      this.input01 = select('#input01');
      this.input02 = select('#input02');
      this.input03a = select('#input03a');
      this.input03b = select('#input03b');

  }

  toSlide(Slide){

    if(Slide != SCM.DATA.currentStateMobile){
      SCM.DATA.currentStateMobile = Slide;

      // SCENE SWITCH
      switch(SCM.DATA.currentStateMobile) {

        case 'Start00':
            this.start00.show();
            break;

        case 'Input00':
            this.start00.hide();
            this.input00.show();
            break;

        case 'Input01':
            this.input00.hide();
            this.input01.show();
            break;

        case 'Input02':
            this.input00.hide();
            this.input01.hide();
            this.input02.show();
            break;

        case 'Input03a':
            this.input02.hide();
            this.input03a.show();
            break;

        case 'Input03b':
            this.input03a.hide();
            this.input03b.show();
            break;


        case 'Input04':

            break;

        case 'Input05':

            break;

        case 'Slide01':
            SLIDES.Slide01();
            break;

        case 'Slide02':
            SLIDES.Slide02();
            break;

        case 'Slide03':
            SLIDES.Slide03();
            break;

        case 'Slide04':
            SLIDES.Slide04();
            break;

        default:
            console.log('No Scene Found for ' + SCM.DATA.currentStateMobile + '!');
      }

    }

  }

  Start00(){
    // Enter Code
    background(STYLE.colors.lila.full);
    text('Enter Code',50,50,100,100);
  }

  Input00(){
    // Spotify oder Random?
    background(STYLE.colors.pink.full);
    text('Spotify oder Random?',50,50,100,100);
  }

  Input01(){
    // Songs in Playlist
    background(STYLE.colors.pink.full);
    text('Songs in Playlist',50,50,100,100);
  }

  Input02(){
    // Quality
    background(STYLE.colors.pink.full);
    text('Quality',50,50,100,100);
  }

  Input03a(){
    // Datenvolumen
    background(STYLE.colors.pink.full);
    text('Datenvolumen & Tarif Preis',50,50,100,100);
  }

  input03b(){
    // Tarif Preis
    background(STYLE.colors.pink.full);
    text('Datenvolumen & Tarif Preis',50,50,100,100);
  }

  Input04(){
    // Speicher auf dem Smartphone
    background(STYLE.colors.pink.full);
    text('Speicher auf dem Smartphone',50,50,100,100);
  }

  Input05(){
    // Wie oft die Playlist gehört wird
    background(STYLE.colors.pink.full);
    text('Wie oft die Playlist gehört wird',50,50,100,100);
  }

  Slide01(){
    // Music Amount
    background(STYLE.colors.pink.full);
    text('Music Amount',50,50,100,100);
  }

  Slide02(){
    // Music Duration
    background(STYLE.colors.pink.full);
    text('Music Duration',50,50,100,100);
  }

  Slide03(){
    // Ads
    background(STYLE.colors.pink.full);
    text('Ads',50,50,100,100);
  }

  Slide04(){
    // Artist
    background(STYLE.colors.pink.full);
    text('Artist',50,50,100,100);
  }

}
