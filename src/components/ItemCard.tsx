import Image from "next/image";
import { ContainerImage, ContainerInfos, ContainerItem } from "../styles/components/itemCart";

export function ItemCart() {
  return (
    <ContainerItem>
      <ContainerImage>
        <Image src='/Shirt.png' alt='' width={93} height={93} />
      </ContainerImage>

      <ContainerInfos>
        <h3>Camiseta</h3>
        <span>R$ 79,30</span>
        <button type="button">Remover</button>
      </ContainerInfos >
    </ContainerItem>

  )
}