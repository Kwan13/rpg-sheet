import { ReactElement } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

interface TooltipPros {
  errorMessage: string;
}

export function Tooltip({ errorMessage }: TooltipPros): ReactElement {
  return (
    <Container>
      <FiAlertCircle size={20} color="#FA5858" />
      <span>{errorMessage}</span>
    </Container>
  );
}
