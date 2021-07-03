import { ReactElement } from 'react';

import { InputAttributePoint } from '../InputAttributePoint';

import { useAttribute } from '../../hooks/useAttribute';

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
  } = useAttribute();
  return (
    <Container>
      <h3>Atributos</h3>
      <Content>
        <InputAttributePoint
          type="number"
          name="Aparência"
          onChange={e => setAppearance(Number(e.target.value))}
          abilityValue={appearance}
        />
        <InputAttributePoint
          type="number"
          name="Constituição"
          onChange={e => setConstitution(Number(e.target.value))}
          abilityValue={constitution}
        />
        <InputAttributePoint
          type="number"
          name="Destreza"
          onChange={e => setDexterity(Number(e.target.value))}
          abilityValue={dexterity}
        />
        <InputAttributePoint
          type="number"
          name="Educação"
          onChange={e => setEducation(Number(e.target.value))}
          abilityValue={education}
        />
        <InputAttributePoint
          type="number"
          name="Força"
          onChange={e => setStrength(Number(e.target.value))}
          abilityValue={strength}
        />
        <InputAttributePoint
          type="number"
          name="Inteligência"
          onChange={e => setIntelligence(Number(e.target.value))}
          abilityValue={intelligence}
        />
        <InputAttributePoint
          type="number"
          name="Poder"
          onChange={e => setPower(Number(e.target.value))}
          abilityValue={power}
        />
        <InputAttributePoint
          type="number"
          name="Sorte"
          onChange={e => setLuck(Number(e.target.value))}
          abilityValue={luck}
        />
        <InputAttributePoint
          type="number"
          name="Movimento"
          onChange={e => setMovement(Number(e.target.value))}
          abilityValue={movement}
        />
        <InputAttributePoint
          type="number"
          name="?"
          onChange={e => setExtra1(Number(e.target.value))}
          abilityValue={extra1}
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
