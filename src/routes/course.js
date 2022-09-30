const express = require("express");
const router = express.Router();

const courseController = require("../app/controlllers/CourseController");

router.use("/create", courseController.create);
router.use("/:id/edit", courseController.edit);

router.post("/store", courseController.store);

router.use("/:slug", courseController.show);

module.exports = router;
