import styled from "styled-components";

interface TitleProps {
  size: "XL" | "XS" | "L" | "SS" | "LL" | "M";
  color: "base-title" | "yellow-dark";
}

export const TitleContainer = styled.h1<TitleProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: bold;
`;
