var axios = require('axios');

var id  = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;
function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos (username) {
  //fetch username repos
}

function getTotalStars (stars) {
  //calculate all the stars that the user has
}

function getPlayersData (player) {
  //
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
       return info.map(function (user) {
         return user.data;
       })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err)

    })
  },
  battle: function (players) {

  }
};

module.exports = helpers;
