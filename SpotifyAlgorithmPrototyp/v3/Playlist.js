class Playlist{
  constructor(){
    this.duration = null; // ms
    this.size = null;
    this.quality = null;
    this.songs = [];
  }

  addSong(n, d){
    this.songs.push(
      new Song(n, d, this.quality)
    );
  }

  addAd(d){
    this.songs.push(
      new Ad(d, this.quality)
    );
  }

  calcMetaData(){
    this.duration = 0;
    this.size = 0;

    for(var i = 0; i < this.songs.length; i++){
      this.duration = this.duration + this.songs[i].duration;
      this.size = this.size + this.songs[i].size;
    }
  }
}

class Song{
  constructor(n, d, q){
    this.name = n;
    this.duration = d; // ms
    this.size = (d/1000) * q;
    this.offline = false;
    this.streamed = false;
  }
}

class Ad{
  constructor(d, q){
    this.duration = d; // ms
    this.size = (d/1000) * q;
    this.streamed = false;
  }
}
