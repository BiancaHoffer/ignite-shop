import { useCart } from "../hooks/useCart";
import { TotalContainer } from "../styles/components/totalCart";

export function TotalCart() {
  return (
    <TotalContainer>
      <div>
        <p className="quantity">Quandidade</p>
        <span className="item">3</span>

        <p className="total">Valor total</p>
        <span className="total-value">R$ 100,00</span>
      </div>
      <button>Finalizar compra</button>
    </TotalContainer>
  )
}