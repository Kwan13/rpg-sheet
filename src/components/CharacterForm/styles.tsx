import styled from 'styled-components';

export const Container = styled.form`
  /* max-width: 500px; */
  /* width: 100%; */
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;

  h3 {
    color: var(--purple-400);
    padding-bottom: 20px;
    text-transform: uppercase;
  }

  label {
    margin: 10px 0 5px;
    display: block;
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 40px;
    background-color: var(--purple-400);
    color: var(--white);
    border: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;

    svg {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.8);
    }
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
