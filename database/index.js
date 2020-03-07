const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// db.on('error', console.error.bind(console.log, 'connection error:'));
// db.once('open', function() {console.log('connected')
// });

let repoSchema = mongoose.Schema({
  username: String,
  id: Number,
  repoURL: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  for (var i = 0; i < repos.length; i++) {
    let objectID = repos[i];
    let repo = new Repo({
      id: objectID.id,
      repoURL: objectID.html_url,
      forks: objectID.forks
    })
    repo.save((err, repo) => {
      if (err) return console.log(err);
    })
  }
}

module.exports.save = save;
