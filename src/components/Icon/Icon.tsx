import { ElementType } from "react";
import { IconContainer } from "./Icon.styles.ts";

interface IconProps {
  "icon-color": "white" | "yellow-dark" | "purple";
  bgColor:
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
  bgColor: bgColor,
  "icon-color": iconColor,
  isRounded,
  icon: Icon,
}: IconProps) {
  return (
    <IconContainer
      bgColor={bgColor}
      icon-color={iconColor}
      isRounded={isRounded}
    >
      <Icon size={22} />
    </IconContainer>
  );
}
