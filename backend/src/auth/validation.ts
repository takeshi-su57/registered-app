import * as Joi from 'joi';

export const registerNewUser = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const updateUser = Joi.object({
  name: Joi.string().min(6),
  email: Joi.string().email(),
  password: Joi.string().min(8),
});
