import styled from 'styled-components';

export const Container = styled.div`
  min-height: 300px;
  margin-top: 10px;

  display: flex;
  align-items: top;
  justify-content: center;

  > button {
    margin-left: auto;
    height: 30px;
    width: 30px;
    background: transparent;
    border: 0;
  }
`;

export const GridContent = styled.main`
  max-width: 1050px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 20px;
`;
