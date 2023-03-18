import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { ItemCart } from "./ItemCard";
import { TotalCart } from "./TotalCard";

import { Close, ContainerMenuCart, ContainerItems } from "../styles/components/MenuCart";

interface MenuCartProps {
  setCloseMenu: Dispatch<SetStateAction<boolean>>;
}

export function MenuCart({ setCloseMenu }: MenuCartProps) {
  function handleCloseMenu() {
    setCloseMenu(false);
  }

  return (
    <ContainerMenuCart>
      <Close onClick={() => handleCloseMenu()}>
        <Image src='/close.svg' width={24} height={24} alt='Botão fechar' />
      </Close>

      <h2>Sacola de Comprar</h2>

      <ContainerItems>
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </ContainerItems>

      <TotalCart />

    </ContainerMenuCart>
  )
}