const models = require("../models");

/**
 * @desc checking if game (same config settings) exists prior adding it to the database
 */
const checkForExistingGame = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [[game]] = await models.game.findDuplicate(req.body);

    if (game) {
      return res.status(200).json(game); // a game with the same settings already exists
    }
    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when checking for already existing account..."
      );
  }
};

module.exports = checkForExistingGame;
