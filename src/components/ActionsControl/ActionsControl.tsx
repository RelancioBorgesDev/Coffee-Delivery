import { Minus, Plus } from "phosphor-react";
import { CoffeeActionsControl } from "./ActionsControl.style";

interface ActionsControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function ActionsControl({
  quantity,
  onIncrease,
  onDecrease,
}: ActionsControlProps) {
  return (
    <CoffeeActionsControl>
      <button onClick={onDecrease}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus size={14} />
      </button>
    </CoffeeActionsControl>
  );
}
