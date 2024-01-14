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
import { useCoffeeQuantity } from "../../../../hooks/useCoffeeQuantity";
import { useCart } from "../../../../hooks/useCart";

export default function CoffeeCard(coffee: Coffee) {
  const { coffeeQnt, increaseCoffeQuantity, decreaseCoffeeQuantity } =
    useCoffeeQuantity();
  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity: coffeeQnt,
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
            coffee_quantity={coffeeQnt}
            increaseCoffeQuantity={increaseCoffeQuantity}
            decreaseCoffeeQuantity={decreaseCoffeeQuantity}
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
