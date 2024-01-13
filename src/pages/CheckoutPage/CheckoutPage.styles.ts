import styled from "styled-components";

export const CheckoutPageContainer = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 2.5rem 10rem 0 10rem;
`;
export const Areas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const Container = styled.section`
  padding: 2.5rem;
  width: 40rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors["base-card"]};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

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

export const FormEndereco = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  grid-template-areas:
    "cep . ."
    "rua rua rua"
    "numero complemento complemento"
    "bairro cidade uf";

  gap: 0.5rem;

  input {
    background-color: ${({ theme }) => theme.colors["base-input"]};
    border-radius: 0.25rem;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors["base-label"]};
    outline: none;
    border: 0;
    width: 100%;
  }

  .cep {
    grid-area: cep;
  }

  .rua {
    grid-area: rua;
    grid-column: span 3;
  }

  .numero {
    grid-area: numero;
  }

  .complemento-container {
    grid-area: complemento;
    display: flex;
    column-gap: 0.5rem;
    position: relative;

    p {
      position: absolute;
      right: 0.75rem;
      bottom: 0;
      top: 0.813rem;
      font-style: italic;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }

  .complemento {
    width: 100%;
  }

  .bairro {
    grid-area: bairro;
  }

  .cidade {
    grid-area: cidade;
  }

  .uf {
    grid-area: uf;
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
