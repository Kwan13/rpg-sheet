import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 130px;
      border-radius: 50%;
    }

    button {
      width: 100px;
      height: 100px;
      background: transparent;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 80px;
        height: 80px;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 10px;
  margin-top: 30px;
  max-width: 500px;
  width: 100%;
  border: 2px solid var(--purple-400);
  border-radius: 8px;
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    input {
      margin-right: 8px;
    }

    display: flex;
    align-items: center;
  }
`;

export const FormGroup = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    width: 100px;
  }
`;

export const ProfileActionGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;

  div {
    margin-left: auto;
    h3 {
      margin-right: 8px;
    }

    button {
      padding: 10px;
      height: 40px;
      border-radius: 8px;
      border: 0;
      color: var(--white);

      display: flex;
      align-items: center;
      justify-content: center;

      & + button {
        margin-left: 8px;
      }

      svg {
        margin-right: 8px;
      }
    }

    .exportButton {
      background: var(--purple-400);
    }

    .excludeButton {
      background: var(--red-500);
    }

    display: flex;
    align-items: center;
  }
`;
