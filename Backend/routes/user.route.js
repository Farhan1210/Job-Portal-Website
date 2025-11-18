// user.route.js

const express = require("express");
const {
  createUser,
  getUser,
  softDeleteUser,
} = require("../controller/user.controller");
const { upload } = require("../middleware/middleware");
const router = express.Router();

router.get("/user", getUser);

router.post("/user", upload.single("file"), createUser);

router.delete("/user/:id", softDeleteUser);

module.exports = router;
