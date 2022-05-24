import type { NextComponentType } from 'next';
import Router from 'next/router';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import styles from '../styles/styles.module.scss';

const Header: NextComponentType = () => {
  const { loadUsersForPage, setPage } = useContext(AppContext);

  const loadHome = () => {
    setPage(1);
    loadUsersForPage(1);
    Router.push('/');
  }

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <h1 className={ styles.title } onClick={ () => loadHome() }>
          Registrado
        </h1>
      </div>
    </header>
  )
}

export default Header;
