import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;

  > h3 {
    padding-bottom: 20px;
    text-transform: uppercase;
    color: var(--purple-400);
  }
`;

export const Content = styled.form`
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
