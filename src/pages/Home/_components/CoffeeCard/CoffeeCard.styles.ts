import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-top-right-radius: 2rem;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 0.375rem;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  img {
    position: absolute;
    top: -1rem;
    width: 120px;
    height: 120px;
  }
`;

export const CoffeeTags = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 5rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const CoffeeTag = styled.li`
  background-color: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};
  font-size: ${({ theme }) => theme.fontSize.tag};
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
`;

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0rem 1.25rem;
  gap: 0.5rem;
`;
export const CoffeeAction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: flex-end;
  padding: 0 1.5rem;
  margin-top: 2rem;

  span {
    display: flex;
    gap: 0.2rem;
  }
`;

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;


