const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [userGames] = await models.userGame.findAll();
    if (!userGames.length)
      return res.status(404).send("No existing users-games");
    return res.json(userGames);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when retrieving users-games from database"
      );
  }
};

const getById = async (req, res) => {
  try {
    const [[userGame]] = await models.userGame.find(req.params.id);
    if (!userGame) return res.status(404).send("User-game not found");
    return res.json(userGame);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving user-game from database");
  }
};

const create = async (req, res) => {
  try {
    const [result] = await models.userGame.add(req.body);
    if (result.affectedRows === 0) {
      throw new Error("User-game not added to database");
    }
    return res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when adding user-game to database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.userGame.update(req.body, req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send(`User-game not found`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating user-game from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.userGame.delete(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send(`user-game not found...`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when deleting user-game from database");
  }
};

module.exports = { getAll, getById, create, editById, remove };
