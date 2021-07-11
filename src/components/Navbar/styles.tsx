import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;

    a {
      img {
        width: 200px;
        height: 100px;
      }
    }

    div {
      margin-left: 10px;
      a {
        color: var(--gray-400);

        & + a {
          margin-left: 8px;
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  > div {
    a {
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
        border: 2px solid var(--pink-500);
        color: var(--pink-500);
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
  }
`;
