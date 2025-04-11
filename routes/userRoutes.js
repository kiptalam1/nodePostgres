const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();
const validateUser = require("../middlewares/userValidation");

router.get("/new", userController.getUser);

router.post("/new", validateUser, userController.postUser);

module.exports = router;
