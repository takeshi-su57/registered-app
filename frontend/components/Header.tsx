import type { NextComponentType } from 'next';
import Router from 'next/router';
import styles from '../styles/styles.module.scss';

const Header: NextComponentType = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <h1 className={ styles.title } onClick={ () => Router.push('/') }>
          Registrado
        </h1>
      </div>
    </header>
  )
}

export default Header;
