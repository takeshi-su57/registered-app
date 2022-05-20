import type { NextComponentType } from 'next';
import { useState, MouseEvent, useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import styles from '../styles/styles.module.scss';

const ControlPanel: NextComponentType = () => {
  const [search, setSearch] = useState('');
  const [findBy, setFindBy] = useState('name');
  const { loadUsersFind } = useContext(AppContext);

  const sendSearch = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    loadUsersFind({ [findBy]: search }, 1);
  }

  return (
    <div className={ styles.controlPanel }>
      <form>
        <input
          type="text"
          placeholder="Pesquisar por..."
          onChange={ ({ target }) => setSearch(target.value) }
        />
        <select onChange={ 
          ({ target }) => setFindBy(target.options[target.selectedIndex].value)
        }>
          <option value="name">Nome</option>
          <option value="email">Email</option>
        </select>
        <button type="submit" onClick={ sendSearch }>
          Pesquisar
        </button>
      </form>
      <button className={ styles.btnNewUser }>
        Registrar novo usuário
      </button>
    </div>
  )
}

export default ControlPanel;
