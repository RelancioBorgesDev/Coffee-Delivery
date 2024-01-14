import {
  CartBtn,
  CoffeeAction,
  CoffeeActions,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeTag,
  CoffeeTags,
} from "./CoffeeCard.styles";
import Title from "../../../../components/Title/Title";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Icon from "../../../../components/Icon/Icon";
import { ShoppingCart } from "phosphor-react";
import { Coffee } from "../../../../interfaces/coffee";
import ActionsControl from "../../../../components/ActionsControl/ActionsControl";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export default function CoffeeCard(coffee: Coffee) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => {
      if (state >= 2) {
        return state - 1; 
      } else {
        return 1; 
      }
    });
  }

  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }
  return (
    <CoffeeCardContainer>
      <img src={coffee.coffee_image} alt="coffee" />
      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <CoffeeTag key={coffee.id + tag}>{tag}</CoffeeTag>
        ))}
      </CoffeeTags>
      <CoffeeDescription>
        <Title color="base-title" size="SS" text={coffee.coffe_title} />
        <SubTitle color="base-label" size="Ss" text={coffee.coffee_subtitle} />
      </CoffeeDescription>
      <CoffeeAction>
        <span>
          R$ <Title color="base-title" size="M" text={coffee.price} />
        </span>
        <CoffeeActions>
          <ActionsControl
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <CartBtn onClick={handleAddToCart}>
            <Icon
              bg-color="purple-dark"
              icon={ShoppingCart}
              icon-color="white"
              isRounded={false}
            />
          </CartBtn>
        </CoffeeActions>
      </CoffeeAction>
    </CoffeeCardContainer>
  );
}
