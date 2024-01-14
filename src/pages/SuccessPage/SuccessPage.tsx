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

export default function SuccessPage() {
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
              bg-color="purple"
              icon={MapPin}
              icon-color="white"
              isRounded={true}
            />
            <Description>
              <p>
                Entrega em{" "}
                <span className="data"> Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </Description>
          </Details>
          <Details>
            <Icon
              bg-color="yellow"
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
              bg-color="yellow-dark"
              icon={CurrencyDollar}
              icon-color="white"
              isRounded={true}
            />
            <Description>
              <p>Pagamento na entrega</p>
              <p className="data">Cartão de Crédito</p>
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
