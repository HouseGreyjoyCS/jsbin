const bcrypt = require('bcryptjs');
const db = require('../db.js');
const SALT_WORK_FACTOR = 10;


const userController = {};

userController.createUser = (req, res, next) => {

  //first check whether user already exists
  bcrypt.genSalt(SALT_WORK_FACTOR)
  .then(salt => {
    return bcrypt.hash(req.body.password, salt);
  })
  .then(hash => {
    return db.one('INSERT INTO users(username, password) VALUES ($1, $2) RETURNING _id', [req.body.username, hash]);
    //.then below passes the '_id' that we are returning from the above insert insert
    //'RETURNING _id'. it is this id we have specified to be the foreign key for our session table
  })
  .then(data => { 
    res.locals.data = data;
    db.query('INSERT INTO sessions(session_id) VALUES($1)', [data._id])
    .catch(err => {
      res.send(err);
    })
    next();
  })
  .catch(err => {
    res.send(err);
  })
}

userController.loginUser = (req, res, next) => {
  //get the password that they sent, 
  //run it through bcrypt and then compare that to what is saved in the db
  db.query('SELECT * from users WHERE username = $1', [req.body.username])
  .then(data => {
    if (data[0].username) {
      bcrypt.compare(req.body.password, data[0].password, (err, res) => {
        if (err) {
          console.log('error with loggin password: ', err);
          return res.send(err);
        } 
      })
      res.locals.data = {};
      res.locals.data._id = data[0]._id;
      res.locals.data.created_bins = data[0].created_bins;
      res.locals.data.accessed_bins = data[0].accessed_bins;
      next();   
    }
  })
}


module.exports = userController;