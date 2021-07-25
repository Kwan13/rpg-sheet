import { ReactElement, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { AiOutlineUserDelete } from 'react-icons/ai';

import { StatusBar } from '../StatusBar';
import { Input } from '../Input';
import { Modal } from '../Modal';

import { useStatusBar } from '../../hooks/useStatusBar';

import {
  Container,
  Content,
  InputGroup,
  FormGroup,
  ProfileActionGroup,
} from './styles';
import avatarImg from '../../assets/avatar.jpeg';
import diceImg from '../../assets/dice.svg';
import { useCharacter } from '../../hooks/useCharacter';
import { useSaveProfile } from '../../hooks/useSaveProfile';
import { useDice } from '../../hooks/useDice';

export function Character(): ReactElement {
  const [openModal, setOpenModal] = useState(false);
  const {
    life,
    maxLife,
    occultism,
    maxOccultism,
    sanity,
    maxSanity,
    handleSetLife,
    handleSetMaxLife,
    handleSetSanity,
    handleSetMaxsanity,
    handleSetOccultism,
    handleSetMaxOccultism,
  } = useStatusBar();
  const {
    character,
    body,
    extraDamage,
    paranormal,
    handleSetBody,
    handleSetExtraDamage,
    handleSetParanormal,
  } = useCharacter();
  const { handleDice, dice } = useDice();
  const { handleExportProfile, handleDeleteProfile } = useSaveProfile();

  function handleToggleOpenModal() {
    setOpenModal(!openModal);

    if (openModal) handleDice();
  }
  return (
    <Container>
      <ProfileActionGroup>
        <div>
          <h3>Ações de perfil:</h3>
          <button
            className="exportButton"
            type="button"
            onClick={handleExportProfile}
          >
            <FaFileDownload />
            exportar
          </button>

          <button
            className="excludeButton"
            type="button"
            onClick={handleDeleteProfile}
          >
            <AiOutlineUserDelete />
            excluir
          </button>
        </div>
      </ProfileActionGroup>
      <header>
        <img src={character?.avatar || avatarImg} alt="avatar" />

        <button type="button" onClick={handleToggleOpenModal}>
          <img src={diceImg} alt="dice" />
        </button>
      </header>
      <Content>
        <StatusBar
          name="Vida"
          value={life}
          color="#38A169"
          maxValue={maxLife}
          setValue={handleSetLife}
          setMaxValue={handleSetMaxLife}
        />

        <InputGroup>
          <div>
            <input type="checkbox" />
            Lesão grave
          </div>
          <div>
            <input type="checkbox" />
            Lesionamento
          </div>
          <div>
            <input type="checkbox" />
            Morrendo
          </div>
        </InputGroup>

        <StatusBar
          name="Sanidade"
          value={sanity}
          color="#D53F8C"
          maxValue={maxSanity}
          setValue={handleSetSanity}
          setMaxValue={handleSetMaxsanity}
        />

        <InputGroup>
          <div>
            <input type="checkbox" />
            Traumatizado
          </div>
          <div>
            <input type="checkbox" />
            Enlouquecido
          </div>
        </InputGroup>

        <StatusBar
          name="Ocultismo"
          value={occultism}
          color="#9F7AEA"
          maxValue={maxOccultism}
          setValue={handleSetOccultism}
          setMaxValue={handleSetMaxOccultism}
        />

        <FormGroup>
          <div>
            <label htmlFor="extra_damage">Dano extra</label>
            <Input
              type="number"
              name="extra_damage"
              id="extra_damage"
              onChange={e => handleSetExtraDamage(Number(e.target.value))}
              defaultValue={extraDamage}
            />
          </div>
          <div>
            <label htmlFor="body">Corpo</label>
            <Input
              type="number"
              name="body"
              id="body"
              onChange={e => handleSetBody(Number(e.target.value))}
              defaultValue={body}
            />
          </div>
          <div>
            <label htmlFor="paranormal">Expo. paranormal</label>
            <Input
              type="number"
              name="paranormal"
              id="paranormal"
              onChange={e => handleSetParanormal(Number(e.target.value))}
              defaultValue={paranormal}
            />
          </div>
        </FormGroup>
      </Content>

      {openModal && (
        <Modal modalTitle="Jogar dado" closeModal={handleToggleOpenModal}>
          <h2>Dado: {dice}</h2>
        </Modal>
      )}
    </Container>
  );
}
