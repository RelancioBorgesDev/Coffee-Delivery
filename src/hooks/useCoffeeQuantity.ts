import { useState, useEffect, useRef } from "react";

export function useCoffeeQuantity(initialQuantity = 1) {
  const [coffeeQnt, setCoffeeQnt] = useState<number>(initialQuantity);
  const coffeeQuantityRef = useRef(coffeeQnt);

  useEffect(() => {
    coffeeQuantityRef.current = coffeeQnt;
  }, [coffeeQnt]);

  const increaseCoffeQuantity = () => {
    setCoffeeQnt((prevQnt) => prevQnt + 1);
  };

  const decreaseCoffeeQuantity = () => {
    if (coffeeQnt >= 2) {
      setCoffeeQnt((prevQnt) => prevQnt - 1);
    } else {
      setCoffeeQnt(1);
    }
  };

  return {
    coffeeQnt,
    increaseCoffeQuantity,
    decreaseCoffeeQuantity,
  };
}
