import axios from "axios";
import { useCart } from "../hooks/useCart";
import { TotalContainer } from "../styles/components/totalCart";
import { formatPrice } from "../utils/formatPrice";
import { useState } from "react";

export function TotalCart() {
  const { total, cart, totalItens } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  async function handleBuyProduct() {
    try {
      setIsLoading(true);
      const response = await axios.post('/api/checkout', {
        products: cart,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert('Erro ao encaminhar para checkout, tente novamente mais tarde');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TotalContainer>
      <div>
        <p className="quantity">Quantidade</p>
        <span className="item">{totalItens}</span>

        <p className="total">Valor total</p>
        <span className="total-value">{formatPrice(total)}</span>
      </div>
      <button disabled={cart.length <= 0} onClick={() => handleBuyProduct()}>{isLoading === true ? "Carregando..." : "Finalizar compra"}</button>
    </TotalContainer>
  )
}