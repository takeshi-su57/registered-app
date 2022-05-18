import { UserBody } from '../interfaces';
import { getAll, create, update } from '../models/User';

export const getAllUsers = async (skip: number) => {
  const users = await getAll(skip);
  return users;
}

export const createUser = async (data: UserBody) => {
  const user = await create(data);
  return user;
}

export const updateUser = async (id: number, data: UserBody) => {
  const updateUser = await update(id, data);
  return updateUser;
}
