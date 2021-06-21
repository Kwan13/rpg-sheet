import { ReactElement } from 'react';

import { Navbar } from '../../components/Navbar';
import { CharacterForm } from '../../components/CharacterForm';
import { Combat } from '../../components/Combat';
import { Character } from '../../components/Character';

import { Container, PersonalDataSession, CombateSession } from './styles';

export default function Home(): ReactElement {
  return (
    <Container>
      <Navbar />
      <PersonalDataSession>
        <CharacterForm />
        <Character />
      </PersonalDataSession>
      <CombateSession>
        <Combat />
      </CombateSession>
    </Container>
  );
}
