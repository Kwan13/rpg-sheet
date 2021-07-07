import styled from 'styled-components';

export const Container = styled.form`
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: var(--purple-400);
      padding-bottom: 20px;
      text-transform: uppercase;
    }

    button {
      background: transparent;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  label {
    margin: 10px 0 5px;
    display: block;
  }

  .selectionBox {
    display: flex;
    align-items: center;

    select {
      margin-left: 8px;
      background-color: transparent;
      border: 0;
      color: var(--pink-500);
      outline: none;
    }
  }
`;
