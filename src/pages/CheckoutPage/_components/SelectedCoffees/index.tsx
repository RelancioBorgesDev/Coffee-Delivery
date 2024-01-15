import {
  CartTotalContainer,
  EmptyMessage,
  SelectedCoffesContainer,
  Separator,
} from "./styles";
import CoffeeSelected from "./CoffeeSelected/CoffeSelected";
import Title from "../../../../components/Title/Title";
import { Button } from "../../../../components/Button/Button";
import { useCart } from "../../../../hooks/useCart";
import { Areas } from "../../CheckoutPage.styles";

export default function SelectedCoffees() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const total = cartItemsTotal + 3.5;
  return (
    <Areas>
      <Title color="base-title" size="SS" text="Cafés selecionados" />
      <SelectedCoffesContainer>
        {cartItems.length === 0 ? (
          <EmptyMessage>Carrinho vazio, adicione um item</EmptyMessage>
        ) : (
          cartItems.map((coffee) => (
            <CoffeeSelected key={coffee.id} coffee={coffee} />
          ))
        )}
        <Separator />
        <CartTotalContainer>
          <div>
            <h4>Total de Itens</h4>
            <h4>R$ {cartItemsTotal.toFixed(2)}</h4>
          </div>
          <div>
            <h4>Entrega</h4>
            <h4>R$ 3,50</h4>
          </div>
          <div>
            <h1>Total</h1>
            <h4>R$ {total.toFixed(2)}</h4>
          </div>
        </CartTotalContainer>
        <Button
          text="Confirmar Pedido"
          disabled={cartQuantity <= 0}
          type="submit"
        />
      </SelectedCoffesContainer>
    </Areas>
  );
}
