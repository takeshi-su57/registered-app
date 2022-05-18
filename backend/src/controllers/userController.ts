import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAll = async (req: Request, res: Response) => {
  const { page } = req.params;

  if (page && page !== '0' && typeof Number(page) === 'number') {
    let skip = (Number(page) * 10) - 10;

    const users = await userService.getAllUsers(skip); 

    res.status(200).json(users);
  }

  res.status(400).json({ error: 'Invalid request' });
}
