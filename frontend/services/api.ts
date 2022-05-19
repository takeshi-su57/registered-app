import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const getUsers = async () => {
  const { data } = await api.get('/users/1');
  return data;
};
