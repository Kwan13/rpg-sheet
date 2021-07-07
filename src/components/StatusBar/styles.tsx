import styled, { css } from 'styled-components';

interface BarProps {
  color: string;
  percentage: string;
}

export const Container = styled.div`
  width: 100%;

  h5 {
    margin-bottom: 10px;
  }

  > div {
    background-color: var(--gray-600);
    border-radius: 4px;
  }

  & + div {
    margin-top: 10px;
  }
`;

export const Bar = styled.span<BarProps>`
  height: 30px;
  cursor: pointer;
  width: 100%;
  transition: width 1.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    css`
      background-color: ${props.color};
      width: ${props.percentage};
      border-radius: 4px;
    `}
`;
