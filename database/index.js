const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// var uniqueValidator = require('mongoose-unique-validator');


// db.on('error', console.error.bind(console.log, 'connection error:'));
// db.once('open', function() {console.log('connected')
// });

let repoSchema = mongoose.Schema({
  _id: Number,
  username: String,
  repoURL: String,
  forks: Number
});

// repoSchema.plugin(uniqueValidator);
let Repo = mongoose.model('Repo', repoSchema);


let save = (repos) => {
  for (var i = 0; i < repos.length; i++) {
    let objectID = repos[i];
    let repo = new Repo({
      _id: objectID.id,
      username: objectID.owner.login,
      repoURL: objectID.html_url,
      forks: objectID.forks
    })
    repo.save((err, repo) => {
      if (err) return console.log(err);
    })
  }
}

let findRepos = (callback) => {
  Repo.find({}, (err, repos) => {
    if (err) {
      console.log(err, null)
    } else {
      callback(null, repos);
    }
  })
  // .limit(30)
  // .sort({username: 1})
}

module.exports = { save, findRepos };
