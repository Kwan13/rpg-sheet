import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  label {
    color: var(--gray-100);
    margin-bottom: 8px;

    display: block;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 40px;
  border: 2px solid var(--purple-400);
  border-radius: 8px;
  background-color: var(--gray-50);
  padding: 10px;

  display: flex;
  align-items: center;

  input {
    width: 100%;
    outline: none;
    background: transparent;
    border: 0;
  }
`;
