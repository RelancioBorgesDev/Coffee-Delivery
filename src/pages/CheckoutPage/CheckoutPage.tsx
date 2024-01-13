import React from "react";
import {
  Areas,
  CheckoutPageContainer,
  Container,
  Description,
  FormEndereco,
  SelectedCoffesContainer,
} from "./CheckoutPage.styles";
import Title from "../../components/Title/Title";
import Icon from "../../components/Icon/Icon";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import SubTitle from "../../components/SubTitle/SubTitle";
import { PaymentMethodOptions } from "./_components/PaymentMethodOptions/PaymentMethodOptions";

export default function CheckoutPage() {
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
            
        </SelectedCoffesContainer>
      </Areas>
    </CheckoutPageContainer>
  );
}
