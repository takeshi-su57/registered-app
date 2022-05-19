import { useState, createContext, useEffect } from 'react';
import { AppContextType, DEFAULT_VALUE, propsProvider } from '../interfaces/context';
import { getUsers } from '../services/api';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export const AppProvider = ({ children }: propsProvider) => {
  const [users, setUsers] = useState(DEFAULT_VALUE.users);

  const loadUsers = async () => {
    setTimeout(async () => {
      const data = await getUsers();
      setUsers(data);
    }, 5000)
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <AppContext.Provider value={{ users }}>
      { children }
    </AppContext.Provider>
  );
};
