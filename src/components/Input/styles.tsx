import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid var(--gray-600);
  width: 100%;
  padding: 3px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    outline: none;
    color: var(--gray-200);
  }
`;
