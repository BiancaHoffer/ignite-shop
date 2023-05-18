import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { ContainerImage, ContainerInfos, ContainerItem } from "../styles/components/itemCart";
import { MdAdd } from 'react-icons/md';
import { HiMinus } from 'react-icons/hi'
import { formatPrice } from "../utils/formatPrice";

interface ItemCartProps {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    defaultPriceId: string;
    amount: number;
  }
}

export function ItemCart({ item }: ItemCartProps) {
  const { removeCart, updateAmount } = useCart();

  return (
    <ContainerItem>
      <ContainerImage>
        <Image src={item.imageUrl} alt={item.name} width={93} height={93} />
      </ContainerImage>

      <ContainerInfos>
        <h3>{item.name}</h3>
        <span>{formatPrice(item.price)}</span>
        <p>{item.defaultPriceId}aa</p>
        <span>
          Quantidade: {item.amount}
          <button
            onClick={() => updateAmount(item.id, "decrement")}
            disabled={item.amount <= 1}
          >
            <HiMinus size={18} />
          </button>
          <button
            onClick={() => updateAmount(item.id, "increment")}
          >
            <MdAdd size={20} />
          </button>
        </span>
        {/*@ts-ignore*/}
        <button type="button" onClick={() => removeCart(item)}>Remover</button>
      </ContainerInfos >
    </ContainerItem>

  )
}