import { UserBody } from '../interfaces';
import prisma from '../database/connection';

export const getAll = async (skip: number) => {
  const users = await prisma.user.findMany({
    skip: skip,
    take: 10,
  });
  return users;
}

export const create = async (data: UserBody) => {
  const user = await prisma.user.create({ data });
  return user;
}
