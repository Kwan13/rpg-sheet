import { ReactElement } from 'react';

import { useCharacter } from '../../hooks/useCharacter';

import { Navbar } from '../../components/Navbar';
import { CharacterProfile } from '../../components/Inventory/CharacterProfile';
import { InventoryItems } from '../../components/Inventory';

import { Container, Content, ItemsSession } from './styles';

export default function Inventory(): ReactElement {
  const { character } = useCharacter();
  return (
    <Container>
      <Navbar />
      {character ? (
        <Content>
          <CharacterProfile />
          <ItemsSession>
            <InventoryItems />
          </ItemsSession>
        </Content>
      ) : (
        <h3>Preencha o formulário inicial para visualizar seu inventário!</h3>
      )}
    </Container>
  );
}
