import styled from "styled-components";

export const CoffeeActionsControl = styled.div`
  width: 72px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 0.375rem;

  button {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.L};
    color: ${({ theme }) => theme.colors["purple"]};
    font-weight: bold;
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.M};
  }
`;
