const express = require("express");
const router = express.Router();

const meController = require("../app/controlllers/MeController");
router.get("/stored/course", meController.index);

module.exports = router;
