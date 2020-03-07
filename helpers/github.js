const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {

  let options = {
    url: `http://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
  })

}

module.exports.getReposByUsername = getReposByUsername;