import { createContext, ReactNode, useContext, useState } from 'react';
import { NewProduct } from '../@types/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cart: NewProduct[];
  clearCart: () => void;
  addCart: (product: NewProduct) => void;
  removeCart: (product: NewProduct) => void;
  updateAmount: (id: number, type: "increment" | "decrement") => void;
  total: number;
  totalItens: number;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<NewProduct[]>(() => {
    return []
  });

  const total =
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)

  const totalItens =
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.amount;
    }, 0)

  function addCart(product: NewProduct) {
    const copyCart = [...cart];

    const indexProduct = copyCart.findIndex(cartItem => cartItem.id === product.id);

    if (indexProduct < 0) {
      toast.success('Produto adicinado no carrinho!', {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });

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

  function updateAmount(
    id: number,
    type: "increment" | "decrement"
  ) {
    const copyCart = [...cart];
    const productIndex = copyCart.findIndex(product => product.id === id);

    if (productIndex >= 0) {
      const item = copyCart[productIndex];
      copyCart[productIndex].amount =
        type === "increment" ? item.amount + 1 : item.amount - 1;
    } else {
      throw Error();
    }

    setCart(copyCart);
    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(copyCart));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addCart, removeCart, updateAmount, clearCart, total, totalItens }}>
        {children}
      </CartContext.Provider>
      <ToastContainer />
    </>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}