import type { NextComponentType } from 'next';
import styles from '../styles/styles.module.scss';

const PopUp: NextComponentType = () => {
  return (
    <div className={ styles.containerFloat }>
      <div className={ styles.popup }>
        <span>Algo deu errado!</span>
      </div>
    </div>
  )
}

export default PopUp;
