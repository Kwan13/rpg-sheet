import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid red; */
  margin: 0 auto;
  width: 300px;

  button {
    width: 100%;
    height: 30px;
    border-radius: 8px;
    text-transform: uppercase;
    background: transparent;
    border: 0;
    color: var(--gray-50);
    font-size: 18px;
    font-weight: 700;
    transition: background 0.5s, border-color 0.5s;
    border: 1px solid var(--pink-500);

    &:hover {
      background: var(--purple-400);
      border-color: transparent;
    }
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  background: var(--gray-700);
  border-radius: 8px;
  padding: 10px;

  div {
    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }
  }
`;
