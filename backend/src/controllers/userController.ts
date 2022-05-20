import { Request, Response, NextFunction } from 'express';
import { UserBody, UserFindBy } from '../interfaces';
import * as userService from '../services/userService';
import * as Joi from '../auth/validation';

export const getCountUsers = async (req: Request, res: Response, next: NextFunction) => {
  const { email, name } = req.query;
  let usersQuantity = 0;

  try {
    if (name) {
      usersQuantity = await userService.getCountUsersFindName(`${name}`);
      return res.status(200).json(usersQuantity);
    }

    if (email) {
      usersQuantity = await userService.getCountUsersFindEmail(`${email}`);
      return res.status(200).json(usersQuantity);
    }

    usersQuantity = await userService.getCountUsers(); 

    return res.status(200).json(usersQuantity);
  } catch (err) {
    return next(err);
  }
}

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

export const getUsersFind = async (req: Request, res: Response, next: NextFunction) => {
  const { email, name, skip } = req.query;
  let skipPage = (Number(skip) * 10) - 10;

  try {
    if (name) {
      const users = await userService.findUserByName(`${name}`, skipPage);
      return res.status(200).json(users);
    }

    if (email) {
      const users = await userService.findUserByEmail(`${email}`, skipPage);
      return res.status(200).json(users);
    }

    return res.status(404).json({ error: 'Not Found' });
  } catch (err) {
    return next(err);
  }
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

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  try {
    const deletedUser = await userService.deleteUserById(Number(id));

    return res.status(200).json(deletedUser);
  } catch (err) {
    return next(err);
  }
}
