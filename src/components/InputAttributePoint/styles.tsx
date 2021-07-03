import styled from 'styled-components';

export const Container = styled.div`
  max-width: 150px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  background: var(--gray-700);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    margin-bottom: 8px;
  }

  > button {
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: 0;
    margin-bottom: 10px;
    transition: transform 0.8s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: rotate(360deg);
    }
  }

  input {
    padding-left: 15px;
    width: 100%;
    text-align: center;
    background-color: transparent;
    outline: none;
    color: var(--gray-200);
    border: 1px solid var(--gray-600);
    border-radius: 8px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 70px;
    height: 70px;
    margin-top: 10px;
  }

  p {
    margin: 10px 0;
    font-size: 25px;
  }
`;
