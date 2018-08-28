const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
// const db = require('./db.js');
const userController = {};

function genPassword(pass) {
 return bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    return bcrypt.hash(pass, salt, (err, hash) => {
      return hash;
    })
  })
}


userController.createUser = (req, res, next) => {
  let userPC = genPassword(req.body.password);
  console.log("testing", userPC, req.body.password);
  // db.query('INSERT INTO users(username, password)') VALUES(req.body.username, userPC);
  res.send(userPC)
  next();
}

module.exports = userController;