import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CgBox } from 'react-icons/cg';

import { useCharacter } from '../../hooks/useCharacter';

import { Container } from './styles';

import diceImg from '../../assets/dice.svg';

export function Navbar(): ReactElement {
  const { character } = useCharacter();

  return (
    <Container>
      <div>
        <Link to="/">
          <img src={diceImg} alt="logo" />
        </Link>
        <h1>
          Rpg Sheet
          <span>.</span>
        </h1>
      </div>

      {character && (
        <Link to="/inventory">
          <CgBox />
          Inventário
        </Link>
      )}
    </Container>
  );
}
