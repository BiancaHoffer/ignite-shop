import Image from "next/image";

import { ContainerButtonCart } from "../styles/components/buttonCart";

interface ButtonCartProps {
  onClick: () => void;
}

export function ButtonCart({ onClick }: ButtonCartProps) {
  return (
    <ContainerButtonCart onClick={onClick}>
      <Image src='/cart.svg' alt='Icone carrinho' width={24} height={24} />
      <span>1</span>
    </ContainerButtonCart>
  )
}