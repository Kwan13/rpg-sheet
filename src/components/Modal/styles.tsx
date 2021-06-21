import styled from 'styled-components';

export const Container = styled.main`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: var(--gray-800);
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 5px;
  /* text-align: center; */
  position: relative;

  header {
    /* margin-bottom: 20px; */
    display: flex;

    button {
      margin-left: auto;
      background-color: transparent;
      border: 0;
      color: var(--white);
    }
  }

  /* .closeButton {
    position: relative;
    top: -20px;
    left: 180px;
    background-color: transparent;
    border: 0;
    color: var(--white);
  } */

  h3 {
    text-transform: uppercase;
    margin-bottom: 20px;
    color: var(--purple-400);
    /* text-align: center; */
  }

  form {
    label {
      margin: 8px 0;

      display: block;
    }

    div + div {
      margin-top: 10px;
    }

    .submitButton {
      width: 100%;
      height: 30px;
      margin-top: 20px;
      background-color: var(--purple-400);
      color: var(--white);
      border-radius: 3px;
      border: 0;
    }
  }
`;
