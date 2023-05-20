import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ButtonCart } from '../components/ButtonCart';
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app';
import { MenuCart } from '../components/MenuCart';
import { CartProvider } from '../hooks/useCart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = openMenu ? 'hidden' : 'auto';
    document.body.style.overflowX = openMenu ? 'hidden' : 'auto';
  }, [openMenu])

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <CartProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src="/Logo.svg" alt="Logo Ignite Shop" width={129.74} height={52} />
          </Link>

          <ButtonCart onClick={() => handleOpenMenu()} />

          {openMenu === true ? (
            <MenuCart setCloseMenu={setOpenMenu} />
          ) : (
            <></>
          )}
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
