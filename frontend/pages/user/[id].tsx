import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../../components/Header';
import styles from '../../styles/styles.module.scss';

const UpdateUser: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { id } = router.query;

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
            
            <button>
              Atualizar
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default UpdateUser;
