import axios from 'axios';
import { UserCreate, UserFindBy } from '../interfaces/user';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001',
});

export const getUsers = async (page: number) => {
  const { data } = await api.get(`/users/page/${page}`);
  return data;
};

export const getQuantityUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};

export const findUser = async (findWhere: UserFindBy, page: number) => {
  const objFind = Object.entries(findWhere)[0];

  const { data } = await api.get(`/users/find?${objFind[0]}=${objFind[1]}&skip=${page}`);
  return data;
};

export const getQuantityUsersFind = async (findWhere: UserFindBy) => {
  const objFind = Object.entries(findWhere)[0];

  const { data } = await api.get(`/users?${objFind[0]}=${objFind[1]}`);
  return data;
};

export const createUser = async (newUser: UserCreate) => {
  const { data } = await api.post('/users/create', newUser);
  return data;
}
