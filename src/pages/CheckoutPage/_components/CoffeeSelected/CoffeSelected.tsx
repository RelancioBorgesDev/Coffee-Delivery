import { CoffeeSelectedContainer } from "./styles";
import ActionsControl from "../../../../components/ActionsControl/ActionsControl";
import { Trash } from "phosphor-react";
import { useCart } from "../../../../hooks/useCart";
import { CartItem } from "../../../../contexts/CartContext";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export default function CoffeeSelected({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(Number.parseInt(coffee.id), "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(Number.parseInt(coffee.id), "decrease");
  }

  function handleRemove() {
    removeCartItem(Number.parseInt(coffee.id));
  }

  const coffeeTotal = Number.parseInt(coffee.price) * coffee.quantity;

  return (
    <CoffeeSelectedContainer>
      <img src={coffee.coffee_image} />
      <header>
        <h1>{coffee.coffe_title}</h1>
        <h1>R$ {coffeeTotal}</h1>
      </header>
      <div>
        <ActionsControl
          quantity={coffee.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        <button onClick={handleRemove}>
          <Trash size={22} />
          <span>Remover</span>
        </button>
      </div>
    </CoffeeSelectedContainer>
  );
}
