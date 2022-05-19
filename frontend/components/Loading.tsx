import type { NextComponentType } from 'next';
import styles from '../styles/styles.module.scss';

const Loading: NextComponentType = () => {
  return (
    <div className={ styles.ldsRipple }>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loading;
