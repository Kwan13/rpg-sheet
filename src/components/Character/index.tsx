import { ReactElement } from 'react';

import { AttributeBar } from '../AttributeBar';
import { useCharacterForm } from '../../hooks/CharacterFormContext';
import { useAttributesBar } from '../../hooks/AttributeBarContext';
import { useCharacter } from '../../hooks/CharacterContext';

import { Container, InputGroup, FormGroup } from './styles';
import avatar from '../../assets/avatar.jpeg';
import { Input } from '../Input';

export function Character(): ReactElement {
  const { character } = useCharacterForm();
  const { setLife, setOccultism, setSanity, life, occultism, sanity } =
    useAttributesBar();
  const {
    setBody,
    setExtraDamage,
    setParanormal,
    body,
    extraDamage,
    paranormal,
  } = useCharacter();

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
          setValue={setLife}
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
          setValue={setSanity}
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
          setValue={setOccultism}
        />
        <FormGroup>
          <div>
            <label htmlFor="extra_damage">Dano extra</label>
            <Input
              type="number"
              name="extra_damage"
              id="extra_damage"
              onChange={e => setExtraDamage(Number(e.target.value))}
              defaultValue={extraDamage}
            />
          </div>
          <div>
            <label htmlFor="body">Corpo</label>
            <Input
              type="number"
              name="body"
              id="body"
              onChange={e => setBody(Number(e.target.value))}
              defaultValue={body}
            />
          </div>
          <div>
            <label htmlFor="paranormal">Expo. paranormal</label>
            <Input
              type="number"
              name="paranormal"
              id="paranormal"
              onChange={e => setParanormal(Number(e.target.value))}
              defaultValue={paranormal}
            />
          </div>
        </FormGroup>
      </main>
    </Container>
  );
}
