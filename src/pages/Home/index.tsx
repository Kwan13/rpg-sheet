import { ReactElement } from 'react';

import { Navbar } from '../../components/Navbar';
import { CharacterForm } from '../../components/CharacterForm';
import { Combat } from '../../components/Combat';
import { Character } from '../../components/Character';
import { AttributePointsContainer } from '../../components/AttributePointsContainer';

import {
  Container,
  PersonalDataSession,
  CombateSession,
  AttributesSession,
} from './styles';

export default function Home(): ReactElement {
  return (
    <Container>
      <Navbar />
      <PersonalDataSession>
        <CharacterForm />
        <Character />
      </PersonalDataSession>
      <AttributesSession>
        <AttributePointsContainer />
      </AttributesSession>
      <CombateSession>
        <Combat />
      </CombateSession>
    </Container>
  );
}
