import { Request, Response } from 'express';
import { UserBody } from '../interfaces';
import * as userService from '../services/userService';
import * as Joi from '../auth/validation';

export const getAll = async (req: Request, res: Response) => {
  const { page } = req.params;

  if (page && page !== '0' && typeof Number(page) === 'number') {
    let skip = (Number(page) * 10) - 10;

    const users = await userService.getAllUsers(skip); 

    res.status(200).json(users);
  }

  res.status(400).json({ error: 'Invalid request' });
}

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password }: UserBody = req.body;
  const userRegister = { name, email, password };

  const { error } = Joi.registerNewUser.validate(userRegister);

  if (error) return res.status(400).json({ error: error.details[0].message });

  const newUser = await userService.createUser(userRegister);

  res.status(200).json(newUser);
}
