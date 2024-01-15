import SubTitle from "../../components/SubTitle/SubTitle";
import Title from "../../components/Title/Title";
import illustration from "../../assets/Illustration.png";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import Icon from "../../components/Icon/Icon";
import {
  ContainerDetails,
  Description,
  Details,
  SuccessPageContainer,
} from "./SuccessPage.style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { paymentMethods } from "../CheckoutPage/_components/FormPayment/PaymentMethodOptions/PaymentMethodOptions";
import { OrderData } from "../CheckoutPage/CheckoutPage";

interface LocationType {
  state: OrderData;
}

export default function SuccessPage() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <SuccessPageContainer>
      <section>
        <Title color="yellow-dark" size="LL" text="Uhu! Pedido confirmado" />
        <SubTitle
          color="base-title"
          size="L"
          text="Agora é só aguardar que logo o café chegará até você"
        />
        <ContainerDetails>
          <Details>
            <Icon
              bgColor="purple"
              icon={MapPin}
              icon-color="white"
              isRounded={true}
            />
            <Description>
              <p>
                Entrega em Entrega em <strong>{state.street}</strong>,{" "}
                {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </Description>
          </Details>
          <Details>
            <Icon
              bgColor="yellow"
              icon={Clock}
              icon-color="white"
              isRounded={true}
            />
            <Description>
              <p>Previsão de entrega</p>
              <p className="data">20 min - 30 min </p>
            </Description>
          </Details>
          <Details>
            <Icon
              bgColor="yellow-dark"
              icon={CurrencyDollar}
              icon-color="white"
              isRounded={true}
            />
            <Description>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethods[state.paymentMethod].label}</strong>
            </Description>
          </Details>
        </ContainerDetails>
      </section>
      <section>
        <img src={illustration} alt="" />
      </section>
    </SuccessPageContainer>
  );
}
