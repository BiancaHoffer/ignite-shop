import { createContext, ReactNode, useContext, useState } from 'react';
import { NewProduct } from '../@types/product';
import { formatPrice } from '../utils/formatPrice';

interface CartProviderProps {
  children: ReactNode;
}

interface CartFormatted extends NewProduct {
  priceFormatted: string;
  subTotal: string;
}

interface CartContextProps {
  cart: NewProduct[];
  addCart: (product: NewProduct) => void;
  removeCart: (product: NewProduct) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<NewProduct[]>(() => {
    return []
  });

  function addCart(product: NewProduct) {
    const copyCart = [...cart];

    const indexProduct = copyCart.findIndex(cartItem => cartItem.id === product.id);

    if (indexProduct < 0) {
      alert('Produto adicinado no carrinho');
      copyCart.push(product);
    } else {
      copyCart[indexProduct].amount += product.amount;
    }

    setCart(copyCart);
  }

  function removeCart(product: NewProduct) {
    const copyCart = [...cart];

    const indexProduct = copyCart.findIndex(cartItem => cartItem.id === product.id);

    if (indexProduct >= 0) {
      copyCart.splice(indexProduct, 1);
      setCart(copyCart);
    } else {
      throw Error();
    }
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}