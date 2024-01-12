import styled from "styled-components";

interface IconProps {
  "icon-color": "white" | "yellow-dark" | "purple" | "none";
  "bg-color":
    | "purple"
    | "purple-dark"
    | "yellow-dark"
    | "yellow"
    | "base-text"
    | "yellow-light"
    | "none";
  isRounded: boolean;
}

export const IconContainer = styled.button<IconProps>`
  background-color: ${({ theme, "bg-color": bgColor }) =>
    theme.colors[bgColor]};
  color: ${({ theme, "icon-color": iconColor }) => theme.colors[iconColor]};
  border: 0;
  border-radius: ${({ isRounded }) => (isRounded ? "50%" : "0.375rem")};
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
