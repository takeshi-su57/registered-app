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
  setUsers: () => {},
  setQuantity: () => {},
  loadUsersForPage: () => {},
  loadUsersFind: () => {}
};

export type AppContextType = {
  users: User[];
  quantityUsers: number;
  filter: { name?: string, email?: string };
  loadUsersForPage: Function;
  loadUsersFind: Function;
};

export type propsProvider = {
  children: JSX.Element;
};
