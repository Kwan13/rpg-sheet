import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;

  h3 {
    color: var(--purple-400);
    text-transform: uppercase;
    margin: 0 auto;
  }
`;

export const GridContent = styled.div`
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
