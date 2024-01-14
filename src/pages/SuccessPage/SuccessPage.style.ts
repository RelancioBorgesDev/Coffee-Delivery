import styled from "styled-components";

export const SuccessPageContainer = styled.main`
  width: 100%;
  padding: 5rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }
`;

export const ContainerDetails = styled.div`
  border-top-right-radius: 2rem;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 0.375rem;
  box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.yellow},
    -1px -1px 0 ${({ theme }) => theme.colors.purple};

  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Details = styled.div`
  display: flex;
  gap: 1.25rem;

  .data {
    font-weight: bold;
  }
`;

export const Description = styled.div``;
