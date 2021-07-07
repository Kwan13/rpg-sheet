import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
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

  > a {
    color: var(--purple-400);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    transition: border 0.2s, color 0.2s;
    border: 2px solid var(--purple-400);
    border-radius: 8px;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      /* filter: brightness(0.8); */
      border: 2px solid var(--pink-500);
      color: var(--pink-500);
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
`;
