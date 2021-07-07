import { ReactElement } from 'react';
import { CgCloseO } from 'react-icons/cg';

import { Container } from './styles';

type MagicItem = {
  id: string;
  itemUrl: string;
  name: string;
  damage: number;
  range: number;
  magicEffect: string;
  description: string;
};

interface MagicItemProps {
  data: MagicItem;
  handleDeleteItem(id: string): void;
}

export function MagicItem({
  data,
  handleDeleteItem,
}: MagicItemProps): ReactElement {
  return (
    <Container>
      <img src={data.itemUrl} alt={data.name} />

      <button type="button" onClick={() => handleDeleteItem(data.id)}>
        <CgCloseO />
      </button>
      <div>
        <header>
          <h3>{data.name}</h3>
          <ul>
            <li>
              <p>
                <span className="attributes">Dano:</span>
                {data.damage}
              </p>
            </li>
            <li>
              <p>
                <span className="attributes">Alcance:</span>
                {data.range}
              </p>
            </li>
          </ul>
          <p>
            <span className="attributes">Efeito mágico:</span>
            {data.magicEffect}
          </p>
        </header>

        <p>
          <span>Descrição:</span>
          {data.description}
        </p>
      </div>
    </Container>
  );
}
