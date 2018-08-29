const cookieController = {};

cookieController.setSsidCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.data._id, { httpOnly: true });
  next();
}

// cookieController.setBins = (req, res, next) => {
//   res.locals.data.accessed_bins = '123';

//   res.cookie('accessed_bins', res.locals.data.accessed_bins,
//       'created_bins', res.locals.data.created_bins);
//   next();
// }

module.exports = cookieController;