import styled from "styled-components";

export const AddressFormContainer = styled.div`
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
