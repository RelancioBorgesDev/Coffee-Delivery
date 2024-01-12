import { ElementType } from "react";
import { IconContainer } from "./Icon.styles.ts";

interface IconProps {
  "icon-color": "white" | "yellow-dark" | "purple";
  "bg-color":
    | "purple"
    | "purple-dark"
    | "yellow-dark"
    | "yellow"
    | "base-text"
    | "yellow-light"
    | "none";
  isRounded: boolean;
  icon: ElementType;
}
export default function Icon({
  "bg-color": bgColor,
  "icon-color": iconColor,
  isRounded,
  icon: Icon,
}: IconProps) {
  return (
    <IconContainer
      bg-color={bgColor}
      icon-color={iconColor}
      isRounded={isRounded}
    >
      <Icon size={22} />
    </IconContainer>
  );
}
