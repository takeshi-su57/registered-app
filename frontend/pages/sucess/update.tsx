import type { NextPage } from 'next';
import Router from 'next/router';
import styles from '../../styles/styles.module.scss';
import Header from '../../components/Header';
import { useEffect } from 'react';

const UpdateSucessPage: NextPage = () => {
  const redirect = () => {
    setTimeout(() => {
      Router.push('/');
    }, 3000)
  }

  useEffect(() => {
    redirect();
  }, [])

  return (
    <div className={ styles.container }>
      <Header />
      <main className={ styles.main }>
        <section className={ styles.content }>
          <div className={ styles.containerSucess }>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="rgb(143, 143, 250)" strokeWidth="2" d="M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002"></path></svg>
            <h1>Usuário atualizado com sucesso!</h1>
            <h2>Redirecionando para a página principal...</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default UpdateSucessPage;
