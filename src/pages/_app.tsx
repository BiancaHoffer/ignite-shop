import type { AppProps } from 'next/app';
import Image from 'next/image';
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header href='/'>
        <img src="/Logo.svg" alt="Logo Ignite Shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
