import { ReactElement } from 'react';
import { Container } from './styles';

import diceImg from '../../assets/dice.svg';

export function Navbar(): ReactElement {
  return (
    <Container>
      <div>
        <img src={diceImg} alt="logo" />
        <h1>
          Rpg Sheet
          <span>.</span>
        </h1>
      </div>
    </Container>
  );
}
