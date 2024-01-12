import { HeaderContainer } from "./Header.style";
import logo from "../../assets/Logo.png";
import Icon from "../Icon/Icon";
import { MapPin, ShoppingCartSimple } from "phosphor-react";

export default function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="sasasa" />
      </span>

      <div>
        <span>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </span>

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
