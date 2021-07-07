import { ReactElement } from 'react';
import { CgCloseO } from 'react-icons/cg';

import { Container } from './styles';

type Item = {
  id: string;
  itemUrl: string;
  name: string;
  description: string;
};

interface NormalItemProps {
  data: Item;
  handleDeleteItem(id: string): void;
}

export function NormalItem({
  data,
  handleDeleteItem,
}: NormalItemProps): ReactElement {
  return (
    <Container>
      <img src={data.itemUrl} alt={data.name} />

      <button type="button" onClick={() => handleDeleteItem(data.id)}>
        <CgCloseO />
      </button>
      <div>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
    </Container>
  );
}
