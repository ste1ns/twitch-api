var TwitchApi = require('twitch-api');
var twitch = new TwitchApi({
    clientId: 'your client id',
    clientSecret: 'your client secret',
    redirectUri: 'same redirectUri that you have configured on your app'
     /*scopes: [array of scopes you want access to]*/
  });

twitch.getAccessToken(code, function(err, body){
    if (err){
      console.log(err);
    } else {
      /*
      * body = {
      *   access_token: 'your authenticated user access token',
      *   scopes: [array of granted scopes]
      * }
      */
    }
});
