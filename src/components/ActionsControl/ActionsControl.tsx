import { CoffeeActionsControl } from "./ActionsControl.style";

export default function ActionsControl({
  coffee_quantity,
}: {
  coffee_quantity: number;
}) {
  return (
    <CoffeeActionsControl>
      <button>-</button>
      <span>{coffee_quantity}</span>
      <button>+</button>
    </CoffeeActionsControl>
  );
}
