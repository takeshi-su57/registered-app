import type { NextComponentType } from 'next';
import Router from 'next/router';
import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppProvider';
import { User } from '../interfaces/context';
import styles from '../styles/styles.module.scss';
import Loading from './Loading';
import Warning from './Warning';

const TableUsers: NextComponentType = () => {
  const {
    users,
    loadUsersForPage,
    loadUsersFind,
    quantityUsers,
    filter,
    editUser,
    page,
    setPage,
    isMobile
  } = useContext(AppContext);
  const [warning, setWarning] = useState({ view: false, id: 0 });

  const nextPage = () => {
    setPage(page + 1);
    if (filter.name || filter.email) {
      loadUsersFind(filter, (page + 1));
    } else {
      loadUsersForPage(page + 1);
    }
  }

  const previousPage = () => {
    setPage(page - 1);
    if (filter.name || filter.email) {
      loadUsersFind(filter, (page - 1));
    } else {
      loadUsersForPage(page - 1);
    }
  }

  const redirectEditUser = (user: User) => {
    editUser(user);
    Router.push(`/user/${user.id}`);
  }

  if (quantityUsers === 0) {
    return (
      <div className={ styles.containerCenter }>
        <h1>Nenhum usuário foi encontrado</h1>
      </div>
    )
  }

  if (!users.length) {
    return (
      <div className={ styles.containerLoading }>
        <Loading />
      </div>
    )
  }

  if (isMobile) {
    return (
      <>
        <section className={ styles.containerCardsUsers }>
          {
            users.map((user, index) => (
              <div key={ index } className={ styles.cardUser }>
                <div className={ styles.cardContent }>
                  <span className={ styles.cardIndice }>
                    { (index + 1 + (page * 10 - 10)) < 10 ? `0${(index + 1 + (page * 10 - 10))}` : (index + 1 + (page * 10 - 10)) }
                  </span>
                  <div>
                    <h3>{ user.name  }</h3>
                    <h4>{ user.email }</h4>
                  </div>
                </div>
                
                <div className={ styles.cardUserBtns }>
                  <button onClick={ () => redirectEditUser(user) } >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                  </button>
                  <button onClick={ () => setWarning({ view: true, id: user.id }) }>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                  </button>
                </div>
              </div>
            ))
          }
        </section>

        <div className={ styles.controlPage }>
          <button onClick={ previousPage } disabled={ page === 1 ? true : false }>
            Anterior
          </button>
          <button 
            onClick={ nextPage }
            disabled={ quantityUsers <= 10 || users.length < 10 || (quantityUsers / 10) === page ? true : false }>
            Próximo
          </button>
        </div>

        { warning.view ? <Warning setPage={ setPage } setWarning={ setWarning } id={ warning.id } /> : '' }
      </>
    )
  }

  return (
    <>
      <table className={ styles.table }>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nome</th>
            <th colSpan={ 2 }>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={ index }>
                <td>{ index + 1 + (page * 10 - 10) }</td>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td className={ styles.options }>
                  <button onClick={ () => redirectEditUser(user) } >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                  </button>
                  <button onClick={ () => setWarning({ view: true, id: user.id }) }>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className={ styles.controlPage }>
        <button onClick={ previousPage } disabled={ page === 1 ? true : false }>
          Anterior
          </button>
        <button 
          onClick={ nextPage }
          disabled={ quantityUsers <= 10 || users.length < 10 || (quantityUsers / 10) === page ? true : false }>
          Próximo
        </button>
      </div>

      { warning.view ? <Warning setPage={ setPage } setWarning={ setWarning } id={ warning.id } /> : '' }
    </>
  )
}

export default TableUsers;
