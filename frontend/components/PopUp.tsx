import React from 'react';
import styles from '../styles/styles.module.scss';

type Props = {
  message: string;
}

const PopUp: React.FC<Props> = ({ message }) => {
  return (
    <div className={ styles.containerFloat }>
      <div className={ styles.popup }>
        <span>{ message }</span>
      </div>
    </div>
  )
}

export default PopUp;
