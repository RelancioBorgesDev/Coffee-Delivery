import { Minus, Plus } from "phosphor-react";
import { CoffeeActionsControl } from "./ActionsControl.style";

export default function ActionsControl({
  coffee_quantity,
  increaseCoffeQuantity,
  decreaseCoffeeQuantity,
}: {
  coffee_quantity: number;
  increaseCoffeQuantity: () => void;
  decreaseCoffeeQuantity: (coffeeQuantity: number) => void;
}) {
  return (
    <CoffeeActionsControl>
      <button onClick={() => decreaseCoffeeQuantity(coffee_quantity)}>
        <Minus size={14} />
      </button>
      <span>{coffee_quantity}</span>
      <button onClick={() => increaseCoffeQuantity()}>
        <Plus size={14} />
      </button>
    </CoffeeActionsControl>
  );
}
