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
  setUsers: () => {}
};

export type AppContextType = {
  users: User[];
};

export type propsProvider = {
  children: JSX.Element;
};
