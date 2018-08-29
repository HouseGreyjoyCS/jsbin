const path = require('path');
const fs = require('fs');

const sessionController = {};

sessionController.startSession = (req, res) => {
  res.status(200);
  // console.log(res);
  res.sendFile(path.resolve(__dirname, '../../build/admin/index.html'));
}

module.exports = sessionController;