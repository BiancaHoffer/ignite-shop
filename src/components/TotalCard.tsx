import axios from "axios";
import { useCart } from "../hooks/useCart";
import { TotalContainer } from "../styles/components/totalCart";
import { formatPrice } from "../utils/formatPrice";

export function TotalCart() {
  const { total, cart, totalItens } = useCart();

  async function handleBuyProduct() {
    try {
      const response = await axios.post('/api/checkout', {
        products: cart,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert('Erro ao encaminhar para checkout, tente novamente mais tarde')
      console.log(err)
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
      <button disabled={cart.length <= 0} onClick={() => handleBuyProduct()} >Finalizar compra</button>
    </TotalContainer>
  )
}