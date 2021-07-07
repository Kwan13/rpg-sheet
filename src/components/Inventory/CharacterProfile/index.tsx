import { ReactElement } from 'react';

import { useCharacter } from '../../../hooks/useCharacter';

import { Container, ProfileDescription, ProfileData } from './styles';

export function CharacterProfile(): ReactElement {
  const { character } = useCharacter();
  return (
    <Container>
      <ProfileData>
        <div>
          <h3>Sobre</h3>
          <ul>
            <li>
              <p>Nome: {character.name}</p>
            </li>
            <li>
              <p>Ocupação: {character.occupation}</p>
            </li>
            <li>
              <p>Idade: {character.age}</p>
            </li>
            <li>
              <p>Sexo: {character.sex}</p>
            </li>
            <li>
              <p>Local de nascimento: {character.birthplace}</p>
            </li>
            <li>
              <p>Residência: {character.residence}</p>
            </li>
          </ul>
        </div>
      </ProfileData>
      <ProfileDescription>
        <img src={character.fullBody} alt="zelda" />
        <div>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </div>
      </ProfileDescription>
    </Container>
  );
}
