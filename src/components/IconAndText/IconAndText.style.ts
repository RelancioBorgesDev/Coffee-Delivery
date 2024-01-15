import styled from "styled-components";

interface ContainerProps {
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
}

export const Container = styled.span<ContainerProps>`
  width: fit-content;
  height: 2.375rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1.25rem;
  background-color: ${({ theme, bgColor: bgColor }) => theme.colors[bgColor]};

  p {
    color: ${({ theme, "text-color": textColor }) => theme.colors[textColor]};
  }
`;
