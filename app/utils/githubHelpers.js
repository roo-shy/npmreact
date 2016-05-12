var axios = require('axios');

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function () {

  }
};

module.exports = helpers;
