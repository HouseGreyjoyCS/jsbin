
const cookieController = {};

cookieController.setSsidCookie = (req, res, next) => {
  // res.cookie('ssid', res.locals.data._id, { httpOnly: true });
    console.log('cookie',res)

  next();
}

module.exports = cookieController;