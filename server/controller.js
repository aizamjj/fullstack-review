const Model = require('./model.js')
const Git = require('../helpers/github.js')

//GET REQUEST for getting all the repos from the database
const get = (req, res) => {
  Model.get((err, repos) => {
    if (err) {
      console.log(err, 'error from server')
      res.status(400).send([])
    } else {
      res.send(repos);
    }
  });
}

// GET REQUEST to GIT API for getting all the repos for specific user and initiate Model.post

const makeAPIRequest = (req, res) => {
  let username = req.body.term
  Git.getReposByUsername(username, (err, repos) => {
    if (err) {
      console.log(err, 'error from server')
      res.status(400).send([])
    } else {
      post(repos);
      res.send(repos);
    }
  });
}

// POST REQUEST to MODEL

const post = (repos) => {
  let repositories = repos.body;
  Model.post(repositories, (err, repos) => {
    if (err) {
      console.log(err, 'error from server');
      res.status(400).send([]);
    } else {
      console.log('I am modeling')
      res.send(repos);
    }
  });
}

module.exports = { get, makeAPIRequest, post }