const express = require("express");

const gameController = require("../controllers/gameController");
const validateGameInfo = require("../middlewares/gameValidator");
const checkForExistingGame = require("../middlewares/gameMiddleware");

const router = express.Router();

router.get("/", gameController.getAll);
router.get("/:id", gameController.getById);
router.post("/", validateGameInfo, checkForExistingGame, gameController.create);
router.put("/:id", validateGameInfo, gameController.editById);
router.delete("/:id", gameController.remove);

module.exports = router;
