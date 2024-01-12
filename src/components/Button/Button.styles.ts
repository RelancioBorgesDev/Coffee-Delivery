import styled from "styled-components";

interface ButtonProps {
  "bg-color": "yellow" | "yellow-dark";
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 8.25rem;
  background-color: ${({ theme, "bg-color": bgColor }) =>
    theme.colors[bgColor]};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.375rem;
  font-weight: bold;
  padding: 0.75rem 0.5rem;
  border: 0;
`;
