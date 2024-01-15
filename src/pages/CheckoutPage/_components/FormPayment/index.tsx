import AddressForm from "./AddressForm/AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions/PaymentMethodOptions";
import Title from "../../../../components/Title/Title";
import Icon from "../../../../components/Icon/Icon";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Container, Description } from "./styles";
import { Areas } from "../../CheckoutPage.styles";

export default function FormPayment() {
  return (
    <Areas>
      <Title color="base-title" size="SS" text="Complete seu pedido" />
      <Container>
        <Description>
          <Icon
            bgColor="none"
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
        <AddressForm />
      </Container>
      <Container>
        <Description>
          <Icon
            bgColor="none"
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
  );
}
