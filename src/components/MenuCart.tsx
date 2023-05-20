import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { ItemCart } from "./ItemCard";
import { TotalCart } from "./TotalCard";
import { Close, ContainerMenuCart, ContainerItems, OutsideMenuCart, ContentMenuCart } from "../styles/components/MenuCart";
import { useCart } from "../hooks/useCart";

interface MenuCartProps {
  setCloseMenu: Dispatch<SetStateAction<boolean>>;
}

export function MenuCart({ setCloseMenu }: MenuCartProps) {
  const { cart } = useCart();
  const cartLength = cart.length;

  function handleCloseMenu() {
    setCloseMenu(false);
  }

  return (
    <>
      <ContainerMenuCart>
        <ContentMenuCart>
          <Close onClick={() => handleCloseMenu()}>
            <Image src='/close.svg' width={24} height={24} alt='Botão fechar' />
          </Close>

          <h2>Sacola de Compras</h2>

          {cartLength <= 0 ? (
            <p style={{ padding: 42 }}>
              Seu carrinho está vazio :(
            </p>)
            : (
              <ContainerItems>
                {cart.map(item => {
                  return (
                    <ItemCart item={item} key={item.id} />
                  )
                })}
              </ContainerItems>
            )}
          <TotalCart />

        </ContentMenuCart >
        <OutsideMenuCart onClick={() => handleCloseMenu()} />
      </ContainerMenuCart>
    </>
  )
}