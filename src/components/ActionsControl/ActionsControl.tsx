import { Minus, Plus } from "phosphor-react";
import { CoffeeActionsControl } from "./ActionsControl.style";

export default function ActionsControl({
  coffee_quantity,
}: {
  coffee_quantity: number;
}) {
  return (
    <CoffeeActionsControl>
      <button>
        <Minus size={14} />
      </button>
      <span>{coffee_quantity}</span>
      <button>
        <Plus size={14} />
      </button>
    </CoffeeActionsControl>
  );
}
