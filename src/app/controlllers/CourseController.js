const { Mongoose } = require("mongoose");
const { MutiplyMongoose, MongoosetoObject } = require("../../util");
const Course = require("../models/Course");
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("./course/show", { course: MongoosetoObject(course) })
      )
      .catch(next);
  }
  create(req, res, next) {
    res.render("course/create");
  }
  store(req, res, next) {
    const dataForm = req.body;
    dataForm.image = `https://files.fullstack.edu.vn/${req.body.videoId}/f8-prod/courses/13/13.png`;
    const course = Course(dataForm);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("course/edit", {
          course: MongoosetoObject(course),
        })
      )
      .catch(next);
  }
}
module.exports = new CourseController();
