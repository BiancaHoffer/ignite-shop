import { TotalContainer } from "../styles/components/totalCart";

export function TotalCart() {
  return (
    <TotalContainer>
      <p>Quandidade</p>
      <span>3 itens</span>

      <p>Valor total</p>
      <span>R$ 270,00</span>

      <button>Finalizar compra</button>
    </TotalContainer>
  )
}