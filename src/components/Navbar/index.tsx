import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CgBox } from 'react-icons/cg';
import { FaInstagram, FaTwitch } from 'react-icons/fa';

import { useCharacter } from '../../hooks/useCharacter';

import { Container } from './styles';

import diceImg from '../../assets/logo.svg';

export function Navbar(): ReactElement {
  const { character } = useCharacter();

  return (
    <Container>
      <header>
        <Link to="/sheet">
          <img src={diceImg} alt="logo" />
        </Link>

        <div>
          <a
            href="https://www.instagram.com/alfaiatede_historias/"
            target="blank"
          >
            <FaInstagram />
          </a>
          <a href="https://www.twitch.tv/tetsuro__" target="blank">
            <FaTwitch />
          </a>
        </div>
      </header>

      <div>
        {character && (
          <Link to="/inventory">
            <CgBox />
            Inventário
          </Link>
        )}
      </div>
    </Container>
  );
}
