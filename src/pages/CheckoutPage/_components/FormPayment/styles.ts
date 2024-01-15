import styled from "styled-components";
import { Areas } from "../../CheckoutPage.styles";

export const AreasForm = styled(Areas).attrs(() => ({ as: "form" }))``;
export const Container = styled.section`
  padding: 2.5rem;
  width: 40rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors["base-card"]};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.span`
  display: flex;
  align-items: baseline;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
`;
