const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mail.controller");
const { body } = require("express-validator");
const { authUser, authCaptain } = require("../middlewares/auth.middleware");

router.get("/verify-user-email", mailController.sendVerificationEmail);
router.get("/verify-captain-email", mailController.sendVerificationEmail);

router.post("/:userType/reset-password",  mailController.forgotPassword);


module.exports = router;
