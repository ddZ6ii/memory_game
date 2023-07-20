const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [games] = await models.game.findAll();
    if (!games.length) return res.status(404).send("No existing games");
    return res.json(games);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving games from database");
  }
};

const getById = async (req, res) => {
  try {
    const [[game]] = await models.game.find(req.params.id);
    if (!game) return res.status(404).send("Game not found");
    return res.json(game);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving game from database");
  }
};

const create = async (req, res) => {
  try {
    const [result] = await models.game.add(req.body);
    if (result.affectedRows === 0) {
      throw new Error("Game not added to database");
    }
    return res.status(201).json({ id_game: result.insertId });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when adding game to database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.game.update(req.body, req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send(`Game not found`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating game from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.game.delete(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send(`game not found...`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when deleting game from database");
  }
};

module.exports = { getAll, getById, create, editById, remove };
