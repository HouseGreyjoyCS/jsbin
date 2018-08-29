const path = require('path');
const fs = require('fs');
const db = require('../db.js');


const sessionController = {};

sessionController.startSession = (req, res) => {
  // res.locals.data.accessed_bins = '123';
  //   console.log(res.locals);
    res.status(200).send()
    // .json({
    //   accessed_bins: res.locals.data.accessed_bins,
    //   created_bins: res.locals.data.created_bins
    // })
  // res.sendFile(path.resolve(__dirname, '../../build/admin/index.html'));
}

sessionController.updateSession = (req, res, next) => {
  db.query('UPDATE sessions SET session_time_stamp = $1 WHERE session_id = $2', ['now()', res.locals.data._id])
  .then(() =>  next())
}

module.exports = sessionController;