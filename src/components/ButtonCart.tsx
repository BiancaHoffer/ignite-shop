import Image from "next/image";
import { useCart } from "../hooks/useCart";

import { ContainerButtonCart } from "../styles/components/buttonCart";

interface ButtonCartProps {
  onClick: () => void;
}

export function ButtonCart({ onClick }: ButtonCartProps) {
  const { cart } = useCart()
  const cartLength = cart.length;

  return (
    <ContainerButtonCart onClick={onClick}>
      <Image src='/cart.svg' alt='Icone carrinho' width={24} height={24} />
      {cartLength <= 0 ? <></> : <span>{cartLength}</span>}
    </ContainerButtonCart>
  )
}