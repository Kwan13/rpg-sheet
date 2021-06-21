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

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    h3 {
      text-transform: uppercase;
      margin-left: 10px;
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
