import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1168px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  border-radius: 8px;
  padding: 20px;
  max-width: 1168px;
  width: 100%;
  height: 100vh;
  /* background-color: var(--gray-800); */
  margin: 0 auto;

  h1 {
    margin: 40px 0;
    color: var(--gray-400);
  }

  form {
    width: 600px;
    margin: 0 auto;

    h5 {
      margin: 10px 0;
      color: var(--purple-400);
    }

    .selectBox {
      display: flex;
      align-items: center;

      select {
        background: transparent;
        border: 0;
        color: var(--pink-400);
        margin-left: 8px;
      }
    }

    button {
      height: 40px;
      width: 100%;
      background: var(--pink-500);
      color: var(--white);
      border: 0;
      text-transform: uppercase;
      border-radius: 8px;
      margin: 20px 0;
    }
  }
`;

export const InputGroup = styled.div`
  /* border: 2px solid var(--gray-400); */
  border-radius: 8px;
  /* padding: 10px; */
  margin-bottom: 20px;

  display: flex;

  div + div {
    margin-left: 8px;
  }
`;
