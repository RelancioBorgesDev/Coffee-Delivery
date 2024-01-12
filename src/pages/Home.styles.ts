import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
export const ContentContainer = styled.section`
  height: 544px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.875rem 10rem;
`;
export const LeftContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IconTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`;
