import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ControlPanel from '../components/ControlPanel';
import TableUsers from '../components/TableUsers';
import styles from '../styles/styles.module.scss';

const Home: NextPage = () => {
  return (
    <div className={ styles.container }>
      <main className={ styles.main }>
        <section className={ styles.content }>
          <ControlPanel />
          <TableUsers />
        </section>
      </main>
    </div>
  )
}

export default Home;
