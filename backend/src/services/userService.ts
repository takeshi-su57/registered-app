import { UserBody, UserFindBy } from '../interfaces';
import { getAll, create, update, deleteUser, getBy, getCount } from '../models/User';

export const getCountUsers = async () => {
  const countUsers = await getCount();
  return countUsers;
}

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

export const deleteUserById = async (id: number) => {
  const deletedUser = await deleteUser(id);
  return deletedUser;
}

export const findUserBy = async (findWhere: UserFindBy) => {
  const users = await getBy(findWhere);
  return users;
}
