import type { NextComponentType } from 'next';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppProvider';
import styles from '../styles/styles.module.scss';
import Loading from './Loading';

const TableUsers: NextComponentType = () => {
  const { users, loadUsersForPage } = useContext(AppContext);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
    loadUsersForPage(page + 1);
  }

  const previousPage = () => {
    setPage(page - 1);
    loadUsersForPage(page - 1);
  }

  if (!users.length) {
    return (
      <div className={ styles.containerLoading }>
        <Loading />
      </div>
    )
  }

  return (
    <>
      <table className={ styles.table }>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={ index }>
                <td>{ index + 1 + (page * 10 - 10) }</td>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td><button>Editar</button></td>
                <td><button>Apagar</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button onClick={ previousPage } disabled={ page === 1 ? true : false }>
        Anterior
        </button>
      <button onClick={ nextPage }>
        Próximo
      </button>
    </>
  )
}

export default TableUsers;
