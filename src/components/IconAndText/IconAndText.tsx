import { ElementType } from "react";
import { Container } from "./IconAndText.style";
import Icon from "../Icon/Icon";

export interface IconAndTextProps {
  isRounded: boolean;
  "icon-color": "white" | "yellow-dark" | "purple";
  "text-color": "base-text" | "purple";
  bgColor:
    | "purple"
    | "purple-dark"
    | "yellow-dark"
    | "yellow"
    | "base-text"
    | "yellow-light"
    | "purple-light"
    | "none";
  "bgColor-icon":
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
  bgColor: bgColor,
  "bgColor-icon": bgColorIcon,
  "text-color": textColor,
  text,
}: IconAndTextProps) {
  return (
    <Container bgColor={bgColor} text-color={textColor}>
      <Icon
        icon-color={iconColor}
        icon={icon}
        isRounded={isRounded}
        bgColor={bgColorIcon}
      />
      <p>{text}</p>
    </Container>
  );
}
