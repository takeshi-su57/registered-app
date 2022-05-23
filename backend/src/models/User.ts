import { UserBody, UserFindBy } from '../interfaces';
import prisma from '../database/connection';

export const getCount = async () => {
  const count = await prisma.user.count();
  return count;
}

export const getCountByFindName = async (name: string) => {
  const count = await prisma.user.count({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });
  return count;
}

export const getCountByFindEmail = async (email: string) => {
  const count = await prisma.user.count({
    where: {
      email: {
        contains: email,
        mode: 'insensitive',
      },
    },
  });
  return count;
}

export const getAll = async (skip: number) => {
  const users = await prisma.user.findMany({
    skip: skip,
    take: 10,
  });
  return users;
}

export const getByName = async (name: string, skip: number) => {
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
    skip: skip,
    take: 10,
  });
  return users;
}

export const getByEmail = async (email: string, skip: number) => {
  const users = await prisma.user.findMany({
    where: {
      email: {
        contains: email,
        mode: 'insensitive',
      },
    },
    skip: skip,
    take: 10,
  });
  return users;
}

export const getUser = async (id: number) => {
  const user = await prisma.user.findFirst({ where: { id } });
  return user;
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
