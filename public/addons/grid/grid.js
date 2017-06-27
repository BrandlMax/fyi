class Grid{
  constructor(){
    this.amount = null;
    this.EmojiHeight = null;
    this.EmojiWidth = null;
    this.RepeatX = null;
    this.RepeatY = null;
    this.Count = 0;
    this.w = null;
    this.h = null;
    this.s = null;
    this.e = null;
  }

  drawIt(amount, e){
    //console.log("DrawIt");
    this.e = e;
    if(amount >= 10000){
      this.amount = 10000;
    }else{
      this.amount = amount;
    }

    this.calculateGrid();
    this.drawEmojis();
  }

  calculateGrid(){

    this.h = windowHeight;
    this.w = windowWidth;

    this.RepeatX = Math.ceil(Math.sqrt(this.amount));
    this.RepeatY = Math.ceil(Math.sqrt(this.amount));

    this.EmojiHeight = Math.ceil(this.h / this.RepeatY);
    this.EmojiWidth = Math.ceil(this.w / this.RepeatX);


    this.s = this.EmojiHeight/2;
    if(this.s > 120){
      this.s = 120;
    }

  }

  drawEmojis(){
    for(var y = 0; y <= this.RepeatY; y++){
       for (var x = 0; x < this.RepeatX; x++) {
         this.Count++;
         noStroke();
         /*
         fill(255);
         rect(0+x*this.EmojiWidth, 0+y*this.EmojiHeight, this.EmojiWidth, this.EmojiHeight);
         */
         if( this.Count <= this.amount){
           textSize(this.s);
           textAlign(CENTER, CENTER);
           text(this.e, 0+x*this.EmojiWidth, 0+y*this.EmojiHeight, this.EmojiWidth, this.EmojiHeight);
         }
      }
    }
    this.Count = 0;
  }

}
