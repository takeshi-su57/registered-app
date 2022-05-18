import prisma from '../database/connection';

export const getAll = async () => {
  const users = await prisma.user.findMany({
    take: 10,
  });
  return users;
}
