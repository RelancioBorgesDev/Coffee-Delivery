import styled from "styled-components";

interface SubTitleProps {
  size: "XS" | "L" | "SS" | "Ss" | "M";
  color: "base-title" | "yellow-dark";
}

export const SubTitleContainer = styled.h1<SubTitleProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: regular;
`;
