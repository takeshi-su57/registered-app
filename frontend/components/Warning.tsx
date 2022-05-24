import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppProvider';
import { deleteUser } from '../services/api';
import styles from '../styles/styles.module.scss';
import Loading from './Loading';

type Props = {
  id: number;
  setWarning: Function;
  setPage: Function;
}

const Warning: React.FC<Props> = ({ id, setWarning, setPage }) => {
  const { loadUsersForPage, page, users } = useContext(AppContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const userDelete = async () => {
    setError(false);
    setLoading(true);

    try {
      await deleteUser(id);

      if (users.length === 1) {
        setPage(page - 1);
        loadUsersForPage(page - 1);
      } else {
        loadUsersForPage(page);
      }

      setWarning({ view: false, id: 0 });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className={ styles.warningContainer }>
        <div className={ styles.warning }>
          <div className={ styles.loadWarning }>
            <Loading />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={ styles.warningContainer }>
      <div className={ styles.warning }>
        <h4>Deletar usuário?</h4>
        <p style={ { display: error ? 'block' : 'none' } }>
          Erro ao deletar usuário! Tente novamente.
        </p>
        <div className={ styles.warningBtns }>
          <button onClick={ () => setWarning({ view: false, id: 0 }) }>
            Cancelar
          </button>
          <button onClick={ userDelete }>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Warning;
