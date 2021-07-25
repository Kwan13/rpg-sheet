import { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { Combat } from '../../components/Combat';
import { Character } from '../../components/Character';
import { AttributePoints } from '../../components/AttributePoints';
import { Skills } from '../../components/Skills';

import { Container, PersonalDataSession, AttributesSession } from './styles';

export default function Sheet(): ReactElement {
  const history = useHistory();

  useEffect(() => {
    const characterData = localStorage.getItem('rpgSheet:Character');

    if (!characterData) {
      history.push('/');
    }
  }, [history]);

  return (
    <Container>
      <Navbar />
      <PersonalDataSession>
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
