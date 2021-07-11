import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;
  width: 100%;

  > header {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    h3 {
      text-transform: uppercase;
      margin-left: 10px;
    }

    button {
      background: transparent;
      border: 0;

      img {
        width: 80px;
        height: 80px;
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-around;

  .checkboxContainer {
    margin: 15px 0;
    display: flex;
    align-items: center;

    input {
      margin-right: 8px;
    }
  }
`;

export const FormGroup = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  div {
    max-width: 120px;
    width: 100%;

    label {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
`;

export const ProfileActionGroup = styled.div`
  margin-top: 40px;
  border: 1px solid var(--purple-400);
  border-radius: 8px;
  padding: 20px;

  h3 {
    color: var(--pink-500);
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: var(--purple-400);
      color: var(--white);
      border: 0;
      border-radius: 8px;
      padding: 10px;
      text-transform: uppercase;
      transition: filter 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 8px;
      }

      & + button {
        margin-left: 8px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }

    .deleteButton {
      background: var(--red-500);
    }
  }
`;
