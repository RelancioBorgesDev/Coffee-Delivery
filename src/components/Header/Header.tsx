import { HeaderContainer } from "./Header.style";
import logo from "../../assets/Logo.png";
import IconAndText from "../IconAndText/IconAndText";
import Icon from "../Icon/Icon";
import { MapPin, ShoppingCartSimple } from "phosphor-react";

export default function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="sasasa" />
      </span>

      <div>
        <IconAndText
          bg-color="purple-light"
          icon-color="purple"
          icon={MapPin}
          text="Porto Alegre, RS"
          isRounded={false}
          bg-color-icon="none"
          text-color="purple"
        />

        <Icon
          bg-color="yellow-light"
          icon-color="yellow-dark"
          isRounded={false}
          icon={ShoppingCartSimple}
        />
      </div>
    </HeaderContainer>
  );
}
