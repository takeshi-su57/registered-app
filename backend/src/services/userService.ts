import { getAll } from '../models/User';

export const getAllUsers = async (skip: number) => {
  const users = await getAll(skip);
  return users;
}
