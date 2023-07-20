const express = require("express");

const userGameController = require("../controllers/userGameController");
const validateUserGameInfo = require("../middlewares/userGameValidator");

const router = express.Router();

router.get("/", userGameController.getAll);
router.get("/:id", userGameController.getById);
router.post("/", validateUserGameInfo, userGameController.create);
router.put("/:id", validateUserGameInfo, userGameController.editById);
router.delete("/:id", userGameController.remove);

module.exports = router;
