import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { ContainerImage, ContainerInfos, ContainerItem } from "../styles/components/itemCart";

interface ItemCartProps {
  item: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
    amount: number;
  }
}

export function ItemCart({ item }: ItemCartProps) {
  const { removeCart } = useCart();

  return (
    <ContainerItem>
      <ContainerImage>
        <Image src={item.imageUrl} alt={item.name} width={93} height={93} />
      </ContainerImage>

      <ContainerInfos>
        <h3>{item.name}</h3>
        <span>{item.price}</span>
        <span>
          Quantidade: {item.amount}
          <button>+</button>
          <button>-</button>
        </span>
        <button type="button" onClick={() => removeCart(item)}>Remover</button>
      </ContainerInfos >
    </ContainerItem>

  )
}