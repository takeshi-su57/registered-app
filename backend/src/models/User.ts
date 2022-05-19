import { UserBody, UserFindBy } from '../interfaces';
import prisma from '../database/connection';

export const getAll = async (skip: number) => {
  const users = await prisma.user.findMany({
    skip: skip,
    take: 10,
  });
  return users;
}

export const getBy = async (findWhere: UserFindBy) => {
  const users = await prisma.user.findMany({ where: findWhere });
  return users;
}

export const create = async (data: UserBody) => {
  const user = await prisma.user.create({ data });
  return user;
}

export const update = async (id: number, data: UserBody) => {
  const updateUser = await prisma.user.update({ where: { id }, data });
  return updateUser;
}

export const deleteUser = async (id: number) => {
  const deletedUser = await prisma.user.delete({ where: { id } });
  return deletedUser;
}
