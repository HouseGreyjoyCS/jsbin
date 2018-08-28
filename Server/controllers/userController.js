const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const db = require('../db.js');
const userController = {};

function genPassword(pass) {
  //bcrypt function needs to be promise based
 return bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    return bcrypt.hash(pass, salt, (err, hash) => {
      return hash;
    })
  })
}


userController.createUser = (req, res, next) => {


  let userPC = bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    return bcrypt.hash(req.body.password, salt, (err, hash) => {
      return hash;
    })
  })

  db.query('INSERT INTO users(username, password) VALUES ($1, $2) RETURNING _id', [req.body.username, 'userPC'])
  // .then(data => res.send('done'))
  // .catch(error => console.log('error bitch:', error));
  next();
}

module.exports = userController;