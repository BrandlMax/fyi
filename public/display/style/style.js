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
        "transparent" : color('rgba(177, 38, 149, 0.1)')
      },

      "pink" : {
        "full" : color('rgba(233, 63, 153, 1)'),
        "transparent" : color('rgba(233, 63, 153, 0.1)')
      }
    };

    this.colorArray = [
      "#B12695",
      "#E93F99",
      "#F471A2",
      "#B39BC9",
      "#9EC1D2"
    ];

    this.center ={
      x : windowWidth/2,
      y : windowHeight/2
    };

  }

}
