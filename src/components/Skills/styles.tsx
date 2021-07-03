import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      color: var(--purple-400);
      text-transform: uppercase;
    }

    button {
      background: transparent;
      color: var(--gray-50);
      border: 0;
      border-radius: 8px;
      padding: 5px;
      transition: filter 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

export const GridContent = styled.div`
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
