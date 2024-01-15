import styled from "styled-components";

export const SelectedCoffesContainer = styled.section`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5rem;
  width: 28rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;
  border-bottom-right-radius: 0.375rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  .btn-checkout {
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
`;

export const CartTotalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-weight: bold;
`;
