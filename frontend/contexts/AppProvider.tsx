import { useState, createContext, useEffect } from 'react';
import { AppContextType, DEFAULT_VALUE, propsProvider } from '../interfaces/context';
import { getQuantityUsers, getUsers } from '../services/api';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export const AppProvider = ({ children }: propsProvider) => {
  const [users, setUsers] = useState(DEFAULT_VALUE.users);
  const [quantityUsers, setQuantity] = useState(DEFAULT_VALUE.quantityUsers);
  const [pages, setPages] = useState([]);

  const loadUsers = async () => {
    setTimeout(async () => {
      const quantity = await getQuantityUsers();

      setQuantity(quantity);

      const data = await getUsers(1);
      setUsers(data);
    }, 5000)
  }

  const loadUsersForPage = async (page: number) => {
    setUsers([]);
    setTimeout(async () => {
      const data = await getUsers(page);
      setUsers(data);
    }, 2000)
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <AppContext.Provider value={{ users, quantityUsers, pages, loadUsersForPage }}>
      { children }
    </AppContext.Provider>
  );
};
