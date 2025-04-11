const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();
const validateUser = require("../middlewares/userValidation");

router.get("/new", userController.createUsernameGet);

router.post("/new", validateUser, userController.createUsernamePost);

router.get("/", userController.getUsernames);

router.get("/delete", userController.deleteAllUsernames);

module.exports = router;
