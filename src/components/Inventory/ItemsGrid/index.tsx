import { ReactElement, ReactNode } from 'react';
import { BsPlusSquare } from 'react-icons/bs';

import { Container, GridContent } from './styles';

interface ItensGridProps {
  handleAddItem(): void;
  children: ReactNode;
}

export function ItemsGrid({
  children,
  handleAddItem,
}: ItensGridProps): ReactElement {
  return (
    <Container>
      <GridContent>{children}</GridContent>
      <button type="button" onClick={handleAddItem}>
        <BsPlusSquare color="#797D9A" size={20} />
      </button>
    </Container>
  );
}
