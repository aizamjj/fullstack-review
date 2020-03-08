const db = require('../database')

//GET top 25 repos
const get = (callback) => {
  db.findRepos((err, repos) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, repos);
    }
  });

}

//POST the repos of specific username to database
const post = (repos, callback) => {
  // console.log('repos', repos, typeof repos)
  db.save(JSON.parse(repos))

}

module.exports = { get, post }