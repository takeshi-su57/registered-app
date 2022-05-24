import { AxiosError } from 'axios';
import type { NextPage } from 'next';
import { useState, MouseEvent } from 'react';
import Loading from '../components/Loading';
import PopUp from '../components/PopUp';
import { errorMessage } from '../interfaces/error';
import { createUser } from '../services/api';
import { Message } from '../interfaces/messages';
import styles from '../styles/styles.module.scss';
import Header from '../components/Header';
import Router from 'next/router';

const Create: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [popUp, setPopUp] = useState({ view: false, message: '' });

  const viewPopUpTimer = (message: string) => {
    setPopUp({ view: true, message });

    setTimeout(() => {
      setPopUp({ view: false, message });
    }, 5000)
  }

  const submitNewUser = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true); 

    try {
      await createUser({ name, email, password });
      viewPopUpTimer(Message.SUCCESS_REGISTER);
    } catch (error: any | AxiosError) {
      const err: errorMessage = error.response?.data;
      viewPopUpTimer(err.error.message);
      console.log(err.error.message);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className={ styles.containerLoading }>
          <Loading />
        </div>
      </>
    )
  }

  return (
    <div className={ styles.container }>
      <Header />
      <main className={ styles.main }>
        <section className={ styles.content }>
          <h1 className={ styles.titlePage }>Criação de usuário</h1>

          <form className={ styles.forms }>
            <label htmlFor="name">Nome</label>
            <input  
              type="text"
              id="name"
              placeholder="Digite o nome"
              value={ name }
              onChange={ ({ target }) => setName(target.value) }
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite o email"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite a senha"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
            
            <div className={ styles.containerBtns }>
              <button className={ styles.btnCancel } onClick={ (e) => {
                e.preventDefault();
                Router.push('/');
              } }>
                Cancelar
              </button>

              <button className={ styles.btnAction } onClick={ submitNewUser }>
                Salvar
              </button>
            </div>
          </form>
        </section>
        
        { popUp.view ? <PopUp message={ popUp.message } /> : '' }
      </main>
    </div>
  )
}

export default Create;
