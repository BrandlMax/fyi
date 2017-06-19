// EXPRESS SERVER & SOCKET
// & SPOTIFY API

// HTTP Server starten
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 1337);
var heroku = false;
var os = require('os');
var ifaces = os.networkInterfaces();

var API_access_token = null;
var API_refresh_token = null;

// ###########################################
// Get Local IP Adress
// Thanks to https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
// For Local Testing
// ###########################################
var curLocalIP = null;

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      // console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      curLocalIP = iface.address;
      // console.log(ifname, iface.address);
    }
    ++alias;
  });
});

// var url = curLocalIP+':1337';
var url = "http://localhost" + ":1337";
if(heroku){
  url = 'https://spotifyi.herokuapp.com'
}

console.log("Server Up and Running");
console.log('Current Adress:' + url);
console.log('Display Adress: ' + url + "/public/display");
console.log('Mobile Adress: ' + url + "/public/mobile");


// SOCKET
var io = require('socket.io')(server);
var SocketServerManager = require('./serverTools/SocketServerManager.js');
var SSM = new SocketServerManager();

// ALGORITHM
var SpotifyAlgorithm = require('./serverTools/SpotifyAlgorithm.js');
var RandomPlaylist = require('./serverTools/Playlist.js');
var SA = new SpotifyAlgorithm();

// SPOTIFY
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');


// Listen & auf den Public Ordner
app.use(express.static(__dirname + '/'))
   .use(cookieParser());

// Mobile oder Desktop?
// Thanks to https://stackoverflow.com/questions/40241878/mobile-device-detection-and-redirect-node-js
app.get('/', function(req, res) {

    //console.log('User-Agent: ' + req.headers['user-agent']);
    var ua = req.headers['user-agent'].toLowerCase();

    // Check the user-agent string to identify the device
      req.myAppPath = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4))) ?
          '/public/mobile/' :
          '/public/display/';

      console.log(req.myAppPath);
      // To Many Redirects?
      res.redirect(url + req.myAppPath);

});

// ###########################################
// SOCKET CONNECTION
// ###########################################

io.on('connect', function(socket) {

    SSM.io = io;
    SSM.socket = socket;
    SSM.newUser();

    // ROOM MANAGEMENT
    // ENTER ROOM
    socket.on('room', function(room) {
        SSM.joinRoom(room);


        socket.on('fromMobile', function (data) {
          console.log(data);

          data.url = url;

          if(API_access_token !== null){
            data.access_token = API_access_token;
            data.refresh_token = API_refresh_token;
          }

          // EDIT DATA
          if(data.ready){
            SA.API = data.api;
            if(SA.API){
              SA.APIdata = data.SpotifyPlaylistData;
            }
            console.log("ALG");
            SA.UserInput = data.userData;
            SA.calculate();
            console.log(SA.Results);
            data.results = SA.Result;
          }

          SSM.sendToDisplay(data);
          SSM.sendToMobile(data);
        });

        socket.on('disconnect', function (room) {
          SSM.leftRoom(room);
        });

    });

});



// ###########################################
// SPOTIFY CONNECTION
// From Spotify Web API Tutorial
// ###########################################

var client_id = '215a2b57827a45bfb7bd0826bbe207da'; // Your client id
var client_secret = '89794425f9f449a6a8a51328591b95f4'; // Your secret
var redirect_uri = url+'/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';


app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email playlist-read-private';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

            API_access_token = access_token;
            API_refresh_token = refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
          SSM.api = body;
        });

        // we can also pass the token to the browser to make requests from there

        res.redirect(url + '/public/callbackKiller');

      } else {
        /*
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
          */
          console.log('ivalid_token!');
      }
    });
  }
});
app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});
