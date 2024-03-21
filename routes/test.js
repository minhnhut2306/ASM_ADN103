// test.js
const User = require('../models/User');

class SiteController {
  index(req, res, next) {
    User.find({}, function(err, users) {
      if (!err) {
        res.json(users);
      } else {
        res.status(400).json({ error: "Lỗi" });
      }
    });
  }
}

module.exports = SiteController;
