import { ElementType } from "react";
import { Container } from "./IconAndText.style";
import Icon from "../Icon/Icon";

export interface IconAndTextProps {
  isRounded: boolean;
  "icon-color": "white" | "yellow-dark" | "purple";
  "text-color": "base-text" | "purple";
  "bg-color":
    | "purple"
    | "purple-dark"
    | "yellow-dark"
    | "yellow"
    | "base-text"
    | "yellow-light"
    | "purple-light"
    | "none";
  "bg-color-icon":
    | "purple"
    | "purple-dark"
    | "yellow-dark"
    | "yellow"
    | "base-text"
    | "yellow-light"
    | "none";
  icon: ElementType;
  text: string;
}

export default function IconAndText({
  isRounded,
  icon,
  "icon-color": iconColor,
  "bg-color": bgColor,
  "bg-color-icon": bgColorIcon,
  "text-color": textColor,
  text,
}: IconAndTextProps) {
  return (
    <Container bg-color={bgColor} text-color={textColor}>
      <Icon
        icon-color={iconColor}
        icon={icon}
        isRounded={isRounded}
        bg-color={bgColorIcon}
      />
      <p>{text}</p>
    </Container>
  );
}
