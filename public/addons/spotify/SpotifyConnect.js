class SpotifyConnect{

  constructor(){
      this.params = {};
  }

  getParams(){
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        this.params = hashParams;

        this.getMainData();
  }

  getMainData(){
    var access_token = this.params.access_token,
        refresh_token = this.params.refresh_token,
        error = this.params.error;

    if (error) {
      alert('There was an error during the authentication');
    } else {
        if (access_token) {
            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  console.log(response);
                  SCM.DATA.userData = response;
                  SCM.sendToServer();
                }
            });
        }
    }
  }

  getPlaylistData(){
    var access_token = this.params.access_token,
        refresh_token = this.params.refresh_token,
        error = this.params.error;

    if (error) {
      alert('There was an error during the authentication');
    } else {
        if (access_token) {
            $.ajax({
                url: 'https://api.spotify.com/v1/me/playlists',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  console.log(response);
                  SCM.DATA.playlistData = response;
                  SCM.sendToServer();
                }
            });
        }
    }
  }



  test(){
    console.log("Spotify Connect Runs")
  }

}
