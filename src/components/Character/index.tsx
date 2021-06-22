import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { AttributeBar } from '../AttributeBar';
import { useCharacterForm } from '../../hook/CharacterFormContext';
import { useAttributesBar } from '../../hook/AttributeBarContext';

import { Container, InputGroup, FormGroup } from './styles';
import avatar from '../../assets/avatar.jpeg';
import { Input } from '../Input';

type FormData = {
  extra_damage: string;
  body: string;
  paranormal: string;
};

export function Character(): ReactElement {
  const { handleSubmit, register } = useForm();
  const { character } = useCharacterForm();
  const { addLife, addOccultism, addSanity, life, occultism, sanity } =
    useAttributesBar();

  function onSubmit(data: FormData) {
    console.log(data);
  }
  return (
    <Container>
      <header>
        <img src={character?.avatar || avatar} alt="avatar" />
        <h3>{character?.name}</h3>
      </header>
      <main>
        <AttributeBar
          name="Vida"
          color="#38A169"
          value={life}
          setValue={addLife}
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
        <AttributeBar
          name="Sanidade"
          color="#D53F8C"
          value={sanity}
          setValue={addSanity}
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
        <AttributeBar
          name="Ocultismo"
          color="#9F7AEA"
          value={occultism}
          setValue={addOccultism}
        />
        <FormGroup onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="extra_damage">Dano extra</label>
            <Input
              {...register('extra_damage')}
              type="text"
              name="extra_damage"
              id="extra_damage"
            />
          </div>
          <div>
            <label htmlFor="body">Corpo</label>
            <Input {...register('body')} type="text" name="body" id="body" />
          </div>
          <div>
            <label htmlFor="paranormal">Expo. paranormal</label>
            <Input
              {...register('paranormal')}
              type="text"
              name="paranormal"
              id="paranormal"
            />
          </div>
        </FormGroup>
      </main>
    </Container>
  );
}
