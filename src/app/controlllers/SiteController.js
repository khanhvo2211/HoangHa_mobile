const { MutiplyMongoose } = require("../../util");
const Course = require("../models/Course");
class SiteController {
  index(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     res.status(500).json({ error: "message" });
    //   }
    // });
    // res.render("home");
    Course.find({})
      .then((course) => {
        res.render("home", { course: MutiplyMongoose(course) });
      })
      .catch((err) => {
        next(err);
      });
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
