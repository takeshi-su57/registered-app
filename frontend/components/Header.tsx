import type { NextComponentType } from 'next';
import styles from '../styles/styles.module.scss';

const Header: NextComponentType = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <h1 className={ styles.title }>
          Registrado
        </h1>
      </div>
    </header>
  )
}

export default Header;
