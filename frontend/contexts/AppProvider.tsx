import { useState, createContext, useEffect } from 'react';
import { AppContextType, DEFAULT_VALUE, propsProvider, User } from '../interfaces/context';
import { UserFindBy } from '../interfaces/user';
import { findUser, getQuantityUsers, getQuantityUsersFind, getUsers } from '../services/api';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export const AppProvider = ({ children }: propsProvider) => {
  const [users, setUsers] = useState(DEFAULT_VALUE.users);
  const [userEdit, setUserEdit] = useState(DEFAULT_VALUE.userEdit);
  const [filter, setFilter] = useState(DEFAULT_VALUE.filter);
  const [quantityUsers, setQuantity] = useState(DEFAULT_VALUE.quantityUsers);

  const loadUsers = async () => {
    setTimeout(async () => {
      const quantity = await getQuantityUsers();

      setQuantity(quantity);

      const data = await getUsers(1);
      setUsers(data);
    }, 2000)
  }

  const loadUsersForPage = async (page: number) => {
    setUsers([]);
    setTimeout(async () => {
      const data = await getUsers(page);
      setUsers(data);
    }, 2000)
  }

  const loadUsersFind = async (findWhere: UserFindBy, page: number) => {
    setQuantity(1);
    setUsers([]);
    setTimeout(async () => {
      if (findWhere.name || findWhere.email ) {
        setFilter(findWhere);
        const dataFind = await findUser(findWhere, page);
        const quantityFind = await getQuantityUsersFind(findWhere);

        setQuantity(quantityFind);
        setUsers(dataFind);
      } else {
        setFilter({});
        const data = await getUsers(1);
        const quantity = await getQuantityUsers();

        setQuantity(quantity);
        setUsers(data);
      }
    }, 2000)
  }

  const editUser = (user: User) => {
    setUserEdit(user);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <AppContext.Provider value={{
      users,
      quantityUsers,
      filter,
      userEdit,
      loadUsersForPage,
      loadUsersFind,
      editUser
    }}>
      { children }
    </AppContext.Provider>
  );
};
