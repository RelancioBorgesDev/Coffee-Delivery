import { TitleContainer } from "./Title.style";

interface TitleProps {
  size: "XL" | "XS" | "L" | "SS" | "LL" | "M";
  text: string;
  color: "base-title" | "yellow-dark";
}

export default function Title({ size, color, text }: TitleProps) {
  return (
    <TitleContainer size={size} color={color}>
      {text}
    </TitleContainer>
  );
}
