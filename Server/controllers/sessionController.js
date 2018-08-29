const path = require('path');
const fs = require('fs');
const db = require('../db.js');


const sessionController = {};

sessionController.startSession = (req, res) => {
  res.status(200).send()
  // res.sendFile(path.resolve(__dirname, '../../build/admin/index.html'));
}

sessionController.updateSession = (req, res) => {
  db.query('UPDATE sessions SET session_time_stamp = $1 WHERE session_id = $2', ['now()', res.locals.data._id])
  .then(() =>  next())
}

module.exports = sessionController;