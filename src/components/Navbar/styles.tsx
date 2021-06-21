import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    max-width: 1480px;
    width: 100%;

    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 8px;
    }

    h1 {
      font-size: 30px;

      span {
        color: var(--purple-400);
        margin-left: 3px;
      }
    }
  }
`;
