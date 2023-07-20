/**
 * @desc automated method for server-side data validation (prior to database entry)
 */
const Joi = require("joi");

const userGameSchema = Joi.object({
  time: [Joi.number().integer(), Joi.allow(null)],
  move: [Joi.number().integer(), Joi.allow(null)],
  score: [Joi.number().integer(), Joi.allow(null)],
  gameId: Joi.number().integer().positive().greater(0).required(),
  userId: Joi.number().integer().positive().greater(0).required(),
});

const validateUserGameInfo = (req, res, next) => {
  const { time, move, score, game_id: gameId, user_id: userId } = req.body;

  const { error } = userGameSchema.validate(
    { time, move, score, gameId, userId },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateUserGameInfo;
