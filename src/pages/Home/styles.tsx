import styled from 'styled-components';
import backgroundImg from '../../assets/bg22.jpg';

export const Container = styled.div`
  display: flex;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.main`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background-color: var(--gray-800);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 100px;
    margin-bottom: 30px;
  }

  a {
    height: 45px;
    width: 300px;
    text-decoration: none;
    border: 2px solid var(--purple-400);
    color: var(--white);
    border-radius: 8px;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background-color: var(--purple-400);
    }
  }

  .separator {
    width: 300px;
    font-size: 14px;
    color: var(--gray-400);

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--gray-400);
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--gray-400);
      margin-left: 16px;
    }
  }

  form {
    textarea {
      width: 300px;
    }

    button {
      margin-top: 20px;
      height: 45px;
      width: 300px;
      background-color: var(--pink-500);
      color: var(--white);
      padding: 10px 70px;
      border-radius: 8px;
      border: 0;
      transition: filter 0.2s;

      svg {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
