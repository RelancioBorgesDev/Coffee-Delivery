import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button.styles.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "bg-color": "yellow" | "yellow-dark";
  text: string;
}

export default function Button({
  text,
  "bg-color": bgColor,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer bg-color={bgColor} {...rest}>
      {text}
    </ButtonContainer>
  );
}
