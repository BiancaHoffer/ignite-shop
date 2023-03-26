'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface Cart {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cart: Cart[];
  addCart: (product: Cart) => void;
  removeCart: (product: Cart) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>(() => {
    return []
  });

  function addCart(product: Cart) {
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

  function removeCart(product: Cart) {
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