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
  page: 1,
  isMobile: false,
  editUser: () => {},
  setUsers: () => {},
  setPage: () => {},
  setQuantity: () => {},
  loadUsersForPage: () => {},
  loadUsersFind: () => {}
};

export type AppContextType = {
  users: User[];
  quantityUsers: number;
  filter: { name?: string, email?: string };
  userEdit: User;
  page: number;
  isMobile: boolean;
  setPage: Function;
  loadUsersForPage: Function;
  loadUsersFind: Function;
  editUser: Function;
};

export type propsProvider = {
  children: JSX.Element;
};
