import {
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

export default function CoffeeCard({
  id,
  coffe_title,
  coffee_image,
  coffee_quantity,
  coffee_subtitle,
  tags,
  price,
}: Coffee) {
  return (
    <CoffeeCardContainer>
      <img src={coffee_image} alt="coffee" />
      <CoffeeTags>
        {tags.map((tag) => (
          <CoffeeTag key={id + tag}>{tag}</CoffeeTag>
        ))}
      </CoffeeTags>
      <CoffeeDescription>
        <Title color="base-title" size="SS" text={coffe_title} />
        <SubTitle color="base-label" size="Ss" text={coffee_subtitle} />
      </CoffeeDescription>
      <CoffeeAction>
        <span>
          R$ <Title color="base-title" size="M" text={price} />
        </span>
        <CoffeeActions>
          <ActionsControl coffee_quantity={coffee_quantity} />
          <Icon
            bg-color="purple-dark"
            icon={ShoppingCart}
            icon-color="white"
            isRounded={false}
          />
        </CoffeeActions>
      </CoffeeAction>
    </CoffeeCardContainer>
  );
}
