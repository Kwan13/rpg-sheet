import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  h3 {
    text-transform: uppercase;
    color: var(--purple-400);
  }

  div {
    width: 400px;
    margin-top: 20px;
    border-bottom: 1px solid var(--gray-600);

    button {
      background: transparent;
      border: 0;
      margin-bottom: 8px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      & + button {
        margin-left: 10px;
      }

      svg {
        width: 40px;
        height: 40px;
        color: var(--gray-400);
      }
    }

    .button-active {
      border-bottom: 2px solid var(--purple-400);
    }
  }
`;
