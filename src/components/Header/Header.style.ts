import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.75rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.465rem;
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    color: ${({ theme }) => theme.colors["purple"]};
    border-radius: 0.375rem;
    height: 2.375rem;
    padding: 0.5rem;
  }
`;
