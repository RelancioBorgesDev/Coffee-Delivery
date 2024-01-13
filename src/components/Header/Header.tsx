import {
  CartCheckoutContainer,
  CartCheckoutQuantity,
  HeaderContainer,
} from "./Header.style";
import logo from "../../assets/Logo.png";
import Icon from "../Icon/Icon";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <span>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </span>

      <div>
        <span>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </span>
        <CartCheckoutContainer>
          <Link to={"/checkout"}>
            <Icon
              bg-color="yellow-light"
              icon-color="yellow-dark"
              isRounded={false}
              icon={ShoppingCartSimple}
            />
          </Link>
          <CartCheckoutQuantity>1</CartCheckoutQuantity>
        </CartCheckoutContainer>
      </div>
    </HeaderContainer>
  );
}
