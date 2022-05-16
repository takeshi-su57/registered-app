import { getAll } from '../models/User';

export const getAllUsers = async () => {
  const users = await getAll();
  return users;
}
