import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ButtonCart } from '../components/ButtonCart';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app';
import { MenuCart } from '../components/MenuCart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
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
  )
}
