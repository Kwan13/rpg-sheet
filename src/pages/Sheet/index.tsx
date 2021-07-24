import { ReactElement } from 'react';

import { Navbar } from '../../components/Navbar';
import { CharacterForm } from '../../components/CharacterForm';
import { Combat } from '../../components/Combat';
import { Character } from '../../components/Character';
import { AttributePoints } from '../../components/AttributePoints';
import { Skills } from '../../components/Skills';

import { Container, PersonalDataSession, AttributesSession } from './styles';

export default function Sheet(): ReactElement {
  return (
    <Container>
      <Navbar />
      <PersonalDataSession>
        <CharacterForm />
        <Character />
      </PersonalDataSession>
      <AttributesSession>
        <AttributePoints />
      </AttributesSession>
      <Combat />
      <Skills />
    </Container>
  );
}
