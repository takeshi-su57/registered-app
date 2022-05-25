import type { NextPage } from 'next';
import Router from 'next/router';
import styles from '../../styles/styles.module.scss';
import Header from '../../components/Header';

const CreateSucessPage: NextPage = () => {
  return (
    <div className={ styles.container }>
      <Header />
      <main className={ styles.main }>
        <section className={ styles.content }>
          <div className={ styles.containerSucess }>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M6,8c0,1.178,0.822,2,2,2s2-0.822,2-2S9.178,6,8,6S6,6.822,6,8z"></path><path d="M20.294 8.292L15.994 12.584 14.702 11.292 13.288 12.706 15.994 15.41 21.706 9.708zM4 8c0 2.28 1.72 4 4 4s4-1.72 4-4-1.72-4-4-4S4 5.72 4 8zM10 8c0 1.178-.822 2-2 2S6 9.178 6 8s.822-2 2-2S10 6.822 10 8zM4 18c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2V18z"></path></svg>
            <h1>Usuário registrado com sucesso!</h1>
            <div className={ styles.containerBtnsSucess }>
              <button onClick={ () => Router.push('/') }>
                Voltar para página principal
                </button>
              <button onClick={ () => Router.push('/create') }>
                Registrar um novo usuário
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CreateSucessPage;
