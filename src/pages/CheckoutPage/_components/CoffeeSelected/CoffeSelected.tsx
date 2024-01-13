import { CoffeeSelectedContainer } from "./styles";
import ActionsControl from "../../../../components/ActionsControl/ActionsControl";
import { Trash } from "phosphor-react";

export default function CoffeSelected() {
  return (
    <CoffeeSelectedContainer>
      <img src="/coffees/Type=Americano.png" />
      <header>
        <h1>Expresso Tradicional</h1>
        <h1>R$ 9,90</h1>
      </header>
      <div>
        <ActionsControl coffee_quantity={1} />
        <button>
          <Trash size={22} />
          <span>Remover</span>
        </button>
      </div>
    </CoffeeSelectedContainer>
  );
}
