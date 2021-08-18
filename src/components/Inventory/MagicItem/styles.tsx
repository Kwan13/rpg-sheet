import styled from 'styled-components';

export const Container = styled.div`
  width: 90px;
  height: 100px;
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  background: var(--gray-800);

  header {
    border-radius: 8px 8px 0 0;
    padding: 3px;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--gray-600);

    button {
      background: transparent;
      border: 0;

      svg {
        width: 17px;
        height: 17px;
        color: var(--gray-400);
        transition: color 0.5s;

        &:hover {
          color: var(--black);
        }
      }
    }
  }

  main {
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60px;
      height: 60px;
      object-fit: contain;
    }

    div {
      text-align: justify;
      background: var(--gray-800);
      padding: 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.875rem;
      font-weight: 500;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s;
      position: absolute;
      bottom: calc(100% + 12px);
      width: 400px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      border: 1px solid var(--gray-50);

      > p {
        margin-bottom: 10px;

        span {
          margin-right: 8px;
          color: var(--pink-500);
        }
      }

      ul {
        width: 400px;
        list-style: none;

        display: flex;

        li {
          margin-bottom: 8px;
          & + li {
            margin-left: 8px;
          }

          p {
            span {
              margin-right: 8px;
              color: var(--pink-500);
            }
          }
        }
      }

      span {
        color: var(--pink-500);
        margin-right: 8px;
      }

      &::before {
        content: '';
        border-style: solid;
        border-color: var(--gray-50) transparent;
        border-width: 0.375rem 0.375rem 0 0.375rem;
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      h3 {
        margin-bottom: 8px;
        color: var(--purple-400);
      }
    }

    &:hover div {
      opacity: 1;
      visibility: visible;
    }
  }
`;
