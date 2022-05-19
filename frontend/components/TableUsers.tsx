import type { NextComponentType } from 'next';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import styles from '../styles/styles.module.scss';
import Loading from './Loading';

const TableUsers: NextComponentType = () => {
  const { users } = useContext(AppContext);

  if (!users.length) {
    return (
      <div className={ styles.containerLoading }>
        <Loading />
      </div>
    )
  }

  return (
    <table>
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
              <td>{ index + 1 }</td>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td><button>Editar</button></td>
              <td><button>Apagar</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TableUsers;
