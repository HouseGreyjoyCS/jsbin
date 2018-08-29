
const cookieController = {};

cookieController.setSsidCookie = (req, res, next) => {
  console.log('cookie controller: ', res.locals)
  res.cookie('ssid', res.locals.data._id, { httpOnly: true });
  next();
}

module.exports = cookieController;