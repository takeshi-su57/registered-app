import prisma from '../database/connection';

export const getAll = async () => {
  const users = await prisma.user.findMany({});
  return users;
}
