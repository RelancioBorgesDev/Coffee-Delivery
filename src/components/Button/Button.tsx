import { ButtonContainer } from "./Button.styles.ts";

interface ButtonProps {
  "bg-color": "yellow" | "yellow-dark";
  text: string;
}

export default function Button({ text, "bg-color": bgColor }: ButtonProps) {
  return <ButtonContainer bg-color={bgColor}>{text}</ButtonContainer>;
}
