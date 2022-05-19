import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001',
});

export const getUsers = async () => {
  const { data } = await api.get('/users/1');
  return data;
};
