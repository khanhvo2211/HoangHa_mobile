const { MutiplyMongoose, MongoosetoObject } = require("../../util");
const Course = require("../models/Course");
class MeController {
  index(req, res, next) {
    Course.find({})
      .then((course) =>
        res.render("me/index", { course: MutiplyMongoose(course) })
      )
      .catch(next);
  }
}
module.exports = new MeController();
