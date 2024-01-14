import {
  Areas,
  CartTotalContainer,
  CheckoutPageContainer,
  Container,
  Description,
  FormEndereco,
  SelectedCoffesContainer,
  Separator,
} from "./CheckoutPage.styles";
import Title from "../../components/Title/Title";
import Icon from "../../components/Icon/Icon";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import SubTitle from "../../components/SubTitle/SubTitle";
import { PaymentMethodOptions } from "./_components/PaymentMethodOptions/PaymentMethodOptions";
import CoffeeSelected from "./_components/CoffeeSelected/CoffeSelected";
import Button from "../../components/Button/Button";
import { useCart } from "../../hooks/useCart";

export default function CheckoutPage() {
  const { cartItems, cartItemsTotal } = useCart();
  const total = cartItemsTotal + 3.5;
  return (
    <CheckoutPageContainer>
      <Areas>
        <Title color="base-title" size="SS" text="Complete seu pedido" />
        <Container>
          <Description>
            <Icon
              bg-color="none"
              icon={MapPinLine}
              icon-color="yellow-dark"
              isRounded={false}
            />
            <div>
              <SubTitle
                color="base-subtitle"
                size="M"
                text="Endereço de Entrega"
              />
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Description>
          <FormEndereco>
            <input className="cep" placeholder="CEP" type="text" />
            <input className="rua" placeholder="Rua" type="text" />
            <input className="numero" placeholder="Número" type="text" />
            <div className="complemento-container">
              <input
                className="complemento"
                placeholder="Complemento"
                type="text"
              />
              <p>Opcional</p>
            </div>
            <input className="bairro" placeholder="Bairro" type="text" />
            <input className="cidade" placeholder="Cidade" type="text" />
            <input className="uf" placeholder="UF" type="text" />
          </FormEndereco>
        </Container>
        <Container>
          <Description>
            <Icon
              bg-color="none"
              icon={CurrencyDollar}
              icon-color="purple"
              isRounded={false}
            />
            <div>
              <SubTitle color="base-subtitle" size="M" text="Pagamento" />
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Description>
          <div>
            <PaymentMethodOptions />
          </div>
        </Container>
      </Areas>
      <Areas>
        <Title color="base-title" size="SS" text="Cafés selecionados" />
        <SelectedCoffesContainer>
          {cartItems.map((coffee) => (
            <CoffeeSelected coffee={coffee} />
          ))}
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
            bg-color="yellow"
            text="Confirmar Pedido"
            className="btn-checkout"
          />
        </SelectedCoffesContainer>
      </Areas>
    </CheckoutPageContainer>
  );
}
