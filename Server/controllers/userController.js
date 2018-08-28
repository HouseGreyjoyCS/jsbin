const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const db = require('../db.js');
const userController = {};

userController.createUser = (req, res, next) => {


  bcrypt.genSalt(SALT_WORK_FACTOR)
  .then(salt => {
    return bcrypt.hash(req.body.password, salt)
  })
  .then(hash => {
    db.query('INSERT INTO users(username, password) VALUES ($1, $2) RETURNING _id', [req.body.username, hash])
  })
  .catch(err => {throw new Error('error bitch: ' + err)})

  next();
}

module.exports = userController;