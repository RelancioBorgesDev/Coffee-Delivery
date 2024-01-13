import styled from "styled-components";

export const CoffeeSelectedContainer = styled.div`
  position: relative;
  width: 368px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "image header header"
    "image control .";
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

  img {
    width: 64px;
    height: 64px;
    grid-area: image;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: header;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.M};
    }
  }

  div {
    grid-area: control;
    display: flex;
    gap: 0.5rem;

    button {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      padding: 0 0.5rem;
      gap: 0.25rem;
      font-size: ${({ theme }) => theme.fontSize.XS};
      color: ${({ theme }) => theme.colors.purple};
      border: 0;
      outline: none;
      cursor: pointer;
      border-radius: 0.375rem;

      span {
        color: ${({ theme }) => theme.colors["base-text"]};
      }
    }
  }
`;
