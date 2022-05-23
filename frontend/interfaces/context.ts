import React from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export const DEFAULT_VALUE = {
  users: [],
  quantityUsers: 1,
  filter: {},
  userEdit: { id: 0, name: '', email: '', password: '', createdAt: new Date() }, 
  editUser: () => {},
  setUsers: () => {},
  setQuantity: () => {},
  loadUsersForPage: () => {},
  loadUsersFind: () => {}
};

export type AppContextType = {
  users: User[];
  quantityUsers: number;
  filter: { name?: string, email?: string };
  userEdit: User;
  loadUsersForPage: Function;
  loadUsersFind: Function;
  editUser: Function;
};

export type propsProvider = {
  children: JSX.Element;
};
