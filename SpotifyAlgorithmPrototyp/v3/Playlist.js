class Playlist{
  constructor(){
    this.duration = null;
    this.size = null;
    this.quality = null;
    this.songs = [];
  }

  addSong(d){
    this.songs.push(
      new Song(d, this.quality)
    );
  }
}

class Song{
  constructor(d, q){
    this.duration = d;
    this.size = d * q;
  }
}
