/**
 * @desc automated method for server-side data validation (prior to database entry)
 */
const Joi = require("joi");

const userSchema = Joi.object({
  pseudo: Joi.string().max(150).required(),
  email: Joi.string().email().max(150).required(),
  password: Joi.string().max(255).required(),
  preferenceId: [Joi.number().integer(), Joi.allow(null)],
  roleId: [Joi.number().integer().required(), Joi.allow(null)],
});

const validateUserInfo = (req, res, next) => {
  const {
    pseudo,
    email,
    password,
    preference_id: preferenceId,
    role_id: roleId,
  } = req.body;

  const { error } = userSchema.validate(
    { pseudo, email, password, preferenceId, roleId },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateUserInfo;
