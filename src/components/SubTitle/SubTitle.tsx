import { SubTitleContainer } from "./SubTitle.styles";

interface SubTitleProps {
  size: "XS" | "L" | "SS" | "Ss" | "M";
  color: "base-title" | "yellow-dark" | "base-subtitle";
  text: string;
}
export default function SubTitle({ color, size, text }: SubTitleProps) {
  return (
    <SubTitleContainer color={color} size={size}>
      {text}
    </SubTitleContainer>
  );
}
