import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAll = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();

  res.status(200).json(users);
}
