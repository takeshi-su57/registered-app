import { AppProvider } from '../contexts/AppProvider';
import Head from 'next/head';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Registrado</title>
        <meta name="description" content="Aplicação de registro de usuários" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp;
