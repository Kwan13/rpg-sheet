import { ReactElement, useState } from 'react';
import { FaFileDownload, FaFileImport } from 'react-icons/fa';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

import { StatusBar } from '../StatusBar';
import { useStatusBar } from '../../hooks/useStatusBar';
import { useCharacter } from '../../hooks/useCharacter';
import { useSaveProfile } from '../../hooks/useSaveProfile';
import { Modal } from '../Modal';
import { TextArea } from '../TextArea';

import { Container, InputGroup, FormGroup, ProfileActionGroup } from './styles';
import avatar from '../../assets/avatar.jpeg';
import { Input } from '../Input';

type formData = {
  profile: string;
};

export function Character(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleSetSanity,
    handleSetMaxsanity,
    handleSetOccultism,
    handleSetMaxOccultism,
    handleSetLife,
    handleSetMaxLife,
    life,
    maxLife,
    occultism,
    maxOccultism,
    sanity,
    maxSanity,
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
  const { handleExportProfile, handleImportProfile, handleDeleteProfile } =
    useSaveProfile();

  const { handleSubmit, register } = useForm();

  function onSubmit(data: formData) {
    handleImportProfile(data);
  }

  function handleToggleOpenModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <header>
        <img src={character?.avatar || avatar} alt="avatar" />
        <h3>{character?.name}</h3>
      </header>
      <main>
        <StatusBar
          name="Vida"
          color="#38A169"
          value={life}
          maxValue={maxLife}
          setValue={handleSetLife}
          setMaxValue={handleSetMaxLife}
        />
        <InputGroup>
          <div className="checkboxContainer">
            <input type="checkbox" name="serious_damage" id="serious_damage" />
            <label htmlFor="serious_damage">Lesão grave</label>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" name="damage" id="damage" />
            <label htmlFor="damage">Lesionamento</label>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" name="dying" id="dying" />
            <label htmlFor="dying">Morrendo</label>
          </div>
        </InputGroup>
        <StatusBar
          name="Sanidade"
          color="#D53F8C"
          value={sanity}
          maxValue={maxSanity}
          setValue={handleSetSanity}
          setMaxValue={handleSetMaxsanity}
        />
        <InputGroup>
          <div className="checkboxContainer">
            <input type="checkbox" name="traumatized" id="traumatized" />
            <label htmlFor="traumatized">Traumatizado</label>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" name="maddened" id="maddened" />
            <label htmlFor="maddened">Enlouquecido</label>
          </div>
        </InputGroup>
        <StatusBar
          name="Ocultismo"
          color="#9F7AEA"
          value={occultism}
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
        <ProfileActionGroup>
          <h3>Ações de perfil:</h3>
          <div>
            <button type="button" onClick={handleExportProfile}>
              <FaFileDownload />
              exportar
            </button>
            <button type="button" onClick={handleToggleOpenModal}>
              <FaFileImport />
              importar
            </button>
            <button
              className="deleteButton"
              type="button"
              onClick={handleDeleteProfile}
            >
              <AiOutlineUserDelete />
              excluir
            </button>
          </div>
        </ProfileActionGroup>
      </main>
      {isOpen && (
        <Modal modalTitle="Importar perfil" closeModal={handleToggleOpenModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextArea
              {...register('profile')}
              name="profile"
              placeholder="cole os dados aqui"
            />
            <button type="submit" className="submitButton">
              importar
            </button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
