import { ReactElement } from 'react';

import { InputAttributePoint } from '../InputAttributePoint';

import { useAttributesPoints } from '../../hooks/AttributePointsContext';

import { Container, Content } from './styles';

export function AttributePointsContainer(): ReactElement {
  const {
    appearance,
    constitution,
    dexterity,
    education,
    intelligence,
    luck,
    movement,
    power,
    strength,
    extra1,
    extra2,
    extra3,
    setAppearance,
    setConstitution,
    setDexterity,
    setEducation,
    setExtra1,
    setExtra2,
    setExtra3,
    setIntelligence,
    setLuck,
    setMovement,
    setPower,
    setStrength,
  } = useAttributesPoints();
  return (
    <Container>
      <h3>Atributos</h3>
      <Content>
        <InputAttributePoint
          type="number"
          name="appearance"
          onChange={e => setAppearance(Number(e.target.value))}
          abilityValue={appearance}
        />
        <InputAttributePoint
          type="number"
          name="constitution"
          onChange={e => setConstitution(Number(e.target.value))}
          abilityValue={constitution}
        />
        <InputAttributePoint
          type="number"
          name="dexterity"
          onChange={e => setDexterity(Number(e.target.value))}
          abilityValue={dexterity}
        />
        <InputAttributePoint
          type="number"
          name="education"
          onChange={e => setEducation(Number(e.target.value))}
          abilityValue={education}
        />
        <InputAttributePoint
          type="number"
          name="strength"
          onChange={e => setStrength(Number(e.target.value))}
          abilityValue={strength}
        />
        <InputAttributePoint
          type="number"
          name="intelligence"
          onChange={e => setIntelligence(Number(e.target.value))}
          abilityValue={intelligence}
        />
        <InputAttributePoint
          type="number"
          name="power"
          onChange={e => setPower(Number(e.target.value))}
          abilityValue={power}
        />
        <InputAttributePoint
          type="number"
          name="luck"
          onChange={e => setLuck(Number(e.target.value))}
          abilityValue={luck}
        />
        <InputAttributePoint
          type="number"
          name="movement"
          onChange={e => setMovement(Number(e.target.value))}
          abilityValue={movement}
        />
        <InputAttributePoint
          type="number"
          name="?"
          onChange={e => setExtra1(Number(e.target.value))}
          abilityValue={extra1}
          defaultValue={2}
        />
        <InputAttributePoint
          type="number"
          name="?"
          onChange={e => setExtra2(Number(e.target.value))}
          abilityValue={extra2}
        />
        <InputAttributePoint
          type="number"
          name="?"
          onChange={e => setExtra3(Number(e.target.value))}
          abilityValue={extra3}
        />
      </Content>
    </Container>
  );
}
