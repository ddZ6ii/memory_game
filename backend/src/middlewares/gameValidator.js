/**
 * @desc automated method for server-side data validation (prior to database entry)
 */
const Joi = require("joi");

const gameSchema = Joi.object({
  mode: Joi.number().integer().positive().min(1).max(3),
  isMultiplayer: Joi.number().integer().positive().min(1).max(4),
  gridSize: Joi.number().integer().positive().min(1).max(3),
});

const validateGameInfo = (req, res, next) => {
  const { mode, is_multiplayer: isMultiplayer, grid_size: gridSize } = req.body;

  const { error } = gameSchema.validate(
    { mode, isMultiplayer, gridSize },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateGameInfo;
