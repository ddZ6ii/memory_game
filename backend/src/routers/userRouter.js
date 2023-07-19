const express = require("express");

const userController = require("../controllers/userController");
const validateUserInfo = require("../middlewares/userValidator");
const {
  verifyEmail,
  checkForExistingAccount,
  hashPassword,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post(
  "/",
  validateUserInfo,
  checkForExistingAccount,
  hashPassword,
  userController.create
);
router.put(
  "/:id",
  validateUserInfo,
  verifyEmail,
  hashPassword,
  userController.editById
);
router.delete("/:id", userController.remove);

module.exports = router;
