import { UserBody, UserFindBy } from '../interfaces';
import {
  getAll,
  create,
  update,
  deleteUser,
  getUser,
  getByName,
  getByEmail,
  getCount,
  getCountByFindName,
  getCountByFindEmail
} from '../models/User';

export const getCountUsers = async () => {
  const countUsers = await getCount();
  return countUsers;
}

export const getCountUsersFindName = async (name: string) => {
  const countUsers = await getCountByFindName(name);
  return countUsers;
}

export const getCountUsersFindEmail = async (email: string) => {
  const countUsers = await getCountByFindEmail(email);
  return countUsers;
}

export const getAllUsers = async (skip: number) => {
  const users = await getAll(skip);
  return users;
}

export const getOneUser = async (id: number) => {
  const user = await getUser(id);
  return user;
}

export const createUser = async (data: UserBody) => {
  const user = await create(data);
  return user;
}

export const updateUser = async (id: number, data: UserBody) => {
  const updateUser = await update(id, data);
  return updateUser;
}

export const deleteUserById = async (id: number) => {
  const deletedUser = await deleteUser(id);
  return deletedUser;
}

export const findUserByName = async (name: string, skip: number) => {
  const users = await getByName(name, skip);
  return users;
}

export const findUserByEmail = async (email: string, skip: number) => {
  const users = await getByEmail(email, skip);
  return users;
}
