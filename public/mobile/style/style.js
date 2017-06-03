// FYI
// DISPLAY STYLE

class Style{
  constructor(){
    this.colors = {

      "blue" : {
        "full" : color('rgba(157, 193, 210, 1)'),
        "transparent" : color('rgba(157, 193, 210, 0.5)')
      },

      "lila" : {
        "full" : color('rgba(177, 38, 149, 1)'),
        "transparent" : color('rgba(177, 38, 149, 0.5)')
      },

      "pink" : {
        "full" : color('rgba(233, 63, 153, 1)'),
        "transparent" : color('rgba(233, 63, 153, 0.1)')
      }
    };

    this.center ={
      x : windowWidth/2,
      y : windowHeight/2
    };

  }

  // ELEMENTE

  background(){
      background(STYLE.colors.lila.full);
  }

}
