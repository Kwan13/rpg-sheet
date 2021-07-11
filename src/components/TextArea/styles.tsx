import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  div {
    margin-left: 8px;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 5px;
    border: 1px solid var(--purple-400);
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.4);
    resize: vertical;
    color: var(--gray-50);
    font-size: 16px;
  }
`;
