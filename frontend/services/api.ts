import axios from 'axios';
import getConfig from 'next/config';
import { UserCreate, UserFindBy } from '../interfaces/user';

const { publicRuntimeConfig } = getConfig();

const api = axios.create({
  baseURL: publicRuntimeConfig.API_URL || 'https://registrado-backend.herokuapp.com/',
});

export const getUsers = async (page: number) => {
  const { data } = await api.get(`/users/page/${page}`);
  return data;
};

export const getUser = async (id: string) => {
  const { data } = await api.get(`/users/get/${id}`);
  return data;
}

export const getQuantityUsers = async () => {
  const { data } = await api.get('/users/count');
  return data;
};

export const findUser = async (findWhere: UserFindBy, page: number) => {
  const objFind = Object.entries(findWhere)[0];

  const { data } = await api.get(`/users/find?${objFind[0]}=${objFind[1]}&skip=${page}`);
  return data;
};

export const getQuantityUsersFind = async (findWhere: UserFindBy) => {
  const objFind = Object.entries(findWhere)[0];

  const { data } = await api.get(`/users/count?${objFind[0]}=${objFind[1]}`);
  return data;
};

export const createUser = async (newUser: UserCreate) => {
  const { data } = await api.post('/users/create', newUser);
  return data;
}

export const updateUser = async (user: UserCreate, id: number) => {
  const { data } = await api.put(`/users/update/${id}`, user);
  return data;
}

export const deleteUser = async (id: number) => {
  const { data } = await api.delete(`/users/delete/${id}`);
  return data;
}
