var PouchDB = require("pouchdb");
var express = require("express");
var BodyParser = require("body-parser");

var app = express();

app.use(BodyParser.json());
//app.use(BodyParser.urlencoded({ extended: true }));

app.use("/db", require("express-pouchdb")(PouchDB));

let db = new PouchDB("follows");
let db_archive = new PouchDB("followsArchive");
let db_user = new PouchDB("user");

let addUser = async function(user, followers, following) {
  return new Promise(function(resolve, reject) {
    db_user
      .get(user)
      .then(doc => {
        return db_user.remove(doc);
      })
      .then(() => {
        return db_user.put({
          _id: user,
          added: new Date().getTime(),
          followers,
          following
        });
      })
      .then(() => {
        resolve(true);
      })
      .catch(e => reject(e));
  });
};

let addFollow = async function(username) {
  return db.put({ _id: username, added: new Date().getTime() });
};

let getFollows = async function() {
  return db.allDocs({ include_docs: true });
};

let unFollow = async function(username) {
  return new Promise(function(resolve, reject) {
    db.get(username)
      .then(doc => {
        return db.remove(doc);
      })
      .then(() => {
        return db_archive.put({ _id: username });
      })
      .then(() => {
        resolve(true);
      })
      .catch(e => reject(e));
  });
};

let inArchive = async function(username) {
  return db_archive.get(username);
};
module.exports.addUser = addUser;
module.exports.addFollow = addFollow;
module.exports.inArchive = inArchive;
module.exports.getFollows = getFollows;
module.exports.unFollow = unFollow;

app.get("/followers", (req, res) => {
  db.allDocs({ include_docs: true })
    .then(result => res.send(result.rows.map(item => item.doc)))
    .catch(err => res.statusCode(400));
});

app.get("/unfollow", (req, res) => {
  db_archive
    .allDocs({ include_docs: true })
    .then(result => res.send(result.rows.map(item => item.doc)))
    .catch(err => res.statusCode(400));
});
app.get("/users", (req, res) => {
  db_user
    .allDocs({ include_docs: true })
    .then(result => res.send(result.rows.map(item => item.doc)))
    .catch(err => res.statusCode(400));
});
app.listen(3001);
