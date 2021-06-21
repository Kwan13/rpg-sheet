import styled from 'styled-components';

export const Container = styled.div`
  > div {
    width: 100%;
    margin-bottom: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: var(--purple-400);
    }

    button {
      background-color: transparent;
      border: 0;
      margin-left: auto;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  table {
    width: 1000px;
    margin: 0 auto;
    border-spacing: 0 8px;

    thead {
      td {
        border-bottom: 1px solid var(--gray-600);
        text-align: center;
        padding-bottom: 8px;
        text-transform: uppercase;
        color: var(--gray-200);
      }
    }

    tbody {
      td {
        text-align: center;

        button {
          background-color: transparent;
          border: 0;
          margin-right: 10px;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.7);
          }
        }
      }
    }
  }
`;
