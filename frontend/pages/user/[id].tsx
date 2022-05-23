import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Router from 'next/router';
import { useContext, useState, MouseEvent } from 'react';
import Header from '../../components/Header';
import PopUp from '../../components/PopUp';
import { AppContext } from '../../contexts/AppProvider';
import { errorMessage } from '../../interfaces/error';
import { Message } from '../../interfaces/messages';
import { updateUser } from '../../services/api';
import styles from '../../styles/styles.module.scss';

const UpdateUser: NextPage = () => {
  const { userEdit, loadUsersForPage } = useContext(AppContext);
  const [name, setName] = useState(userEdit.name);
  const [email, setEmail] = useState(userEdit.email);
  const [password, setPassword] = useState(userEdit.password);
  const [popUp, setPopUp] = useState({ view: false, message: '' });

  const viewPopUpTimer = (message: string) => {
    setPopUp({ view: true, message });

    setTimeout(() => {
      setPopUp({ view: false, message });
    }, 5000)
  }

  const submitUpdateUser = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const newUser = await updateUser({ name, email, password }, userEdit.id);
      viewPopUpTimer(Message.SUCCESS_UPDATE);
      setTimeout(() => {
        loadUsersForPage(1);
        Router.push('/');
      }, 5000)
    } catch (error: any | AxiosError) {
      const err: errorMessage = error.response?.data;
      viewPopUpTimer(err.error.message);
      console.log(err.error.message);
    }
  }
  
  return (
    <div className={ styles.container }>
      <Header />

      <main className={ styles.main }>
        <section className={ styles.content }>
          <h1 className={ styles.titlePage }>Atualização de usuário</h1>

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
              <button onClick={ (e) => {
                e.preventDefault();
                Router.push('/');
              } } className={ styles.btnCancel }>
                Cancelar
              </button>
              
              <button className={ styles.btnAction } onClick={ submitUpdateUser }>
                Atualizar
              </button>
            </div>
          </form>
        </section>

        { popUp.view ? <PopUp message={ popUp.message } /> : '' }
      </main>
    </div>
  )
}

export default UpdateUser;
