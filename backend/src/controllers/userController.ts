import { Request, Response, NextFunction } from 'express';
import { UserBody } from '../interfaces';
import * as userService from '../services/userService';
import * as Joi from '../auth/validation';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  const { page } = req.params;

  if (page && page !== '0' && typeof Number(page) === 'number') {
    let skip = (Number(page) * 10) - 10;

    try {
      const users = await userService.getAllUsers(skip); 

      return res.status(200).json(users);
    } catch (err) {
      return next(err);
    }
  }

  return res.status(400).json({ error: 'Invalid request' });
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password }: UserBody = req.body;
  const userRegister = { name, email, password };

  const { error } = Joi.registerNewUser.validate(userRegister);

  if (error) return next(error);

  try {
    const newUser = await userService.createUser(userRegister);

    return res.status(200).json(newUser);
  } catch (err) {
    return next(err);
  }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const data: UserBody = req.body;

  const { error } = Joi.updateUser.validate(data);

  if (error) return next(error);
  
  try {
    const updateUser = await userService.updateUser(Number(id), data);

    return res.status(200).json(updateUser);
  } catch (err) {
    return next(err);
  }
}
