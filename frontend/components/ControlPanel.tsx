import type { NextComponentType } from 'next';
import Router from 'next/router';
import { useState, MouseEvent, useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import styles from '../styles/styles.module.scss';

const ControlPanel: NextComponentType = () => {
  const [search, setSearch] = useState('');
  const [findBy, setFindBy] = useState('name');
  const { loadUsersFind, setPage } = useContext(AppContext);

  const sendSearch = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setPage(1);
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
      <button className={ styles.btnNewUser } onClick={ () => Router.push('/create') }>
        Registrar novo usuário
      </button>

      <div className={ styles.containerBtnMobile }>
        <button className={ styles.btnNewUserMobile } onClick={ () => Router.push('/create') }>
          <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default ControlPanel;
