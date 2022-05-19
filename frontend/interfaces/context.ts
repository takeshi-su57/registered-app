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
  quantityUsers: 0,
  pages: [],
  setUsers: () => {},
  setQuantity: () => {},
  setPages: () => {},
  loadUsersForPage: (page: number) => {}
};

export type AppContextType = {
  users: User[];
  quantityUsers: number;
  pages: number[];
  loadUsersForPage: Function;
};

export type propsProvider = {
  children: JSX.Element;
};
