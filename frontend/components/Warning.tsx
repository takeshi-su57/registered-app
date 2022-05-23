import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import { deleteUser } from '../services/api';
import styles from '../styles/styles.module.scss';

type Props = {
  id: number;
  setWarning: Function;
  setPage: Function;
}

const Warning: React.FC<Props> = ({ id, setWarning, setPage }) => {
  const { loadUsersForPage } = useContext(AppContext);

  const userDelete = async () => {
    try {
      await deleteUser(id);
      setPage(1);
      loadUsersForPage(1);
      setWarning({ view: false, id: 0 });
    } catch (error) {
      setWarning({ view: false, id: 0 });
    }
  }

  return (
    <div className={ styles.warningContainer }>
      <div className={ styles.warning }>
        <p>Deletar usuário?</p>
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
