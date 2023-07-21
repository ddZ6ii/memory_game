const express = require("express");

const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const gameRouter = require("./gameRouter");
const userGameRouter = require("./userGameRouter");

const router = express.Router();

router.use("/", authRouter);
router.use("/users", userRouter);
router.use("/games", gameRouter);
router.use("/users-games", userGameRouter);

module.exports = router;
