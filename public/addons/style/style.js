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
      },

      "green" : {
        "full" : color('rgba(63, 233, 131, 1)'),
        "transparent" : color('rgba(63, 233, 131, 0.1)')
      }
    };

    // 0 Green
    // 1 Blue
    // 2 DarkPurple
    // 3 Purple
    // 4 Pink
    // 5 yellow
    this.colorArray = [
      "#1ED760",
      "#3FBFE9",
      "#641ED8",
      "#B31D96",
      "#EB3A99",
      "#FED226"
    ];

    this.center ={
      x : windowWidth/2,
      y : windowHeight/2
    };

  }

}
