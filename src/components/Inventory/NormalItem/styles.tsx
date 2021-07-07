import styled from 'styled-components';

export const Container = styled.div`
  width: 90px;
  height: 100px;
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  background: var(--gray-800);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    border-radius: 8px;
  }

  button {
    position: relative;
    top: -30px;
    background: transparent;
    border: 0;

    svg {
      width: 20px;
      height: 20px;
      color: var(--gray-400);
    }
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
`;
