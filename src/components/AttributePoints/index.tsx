import { ReactElement } from 'react';

import { InputAttributeItem } from './AttributePointItem';

import { useAttribute } from '../../hooks/useAttribute';

import { Container, Content } from './styles';

export function AttributePoints(): ReactElement {
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
    handleSetAppearance,
    handleSetConstitution,
    handleSetDexterity,
    handleSetEducation,
    handleSetExtra1,
    handleSetExtra2,
    handleSetExtra3,
    handleSetIntelligence,
    handleSetLuck,
    handleSetMovement,
    handleSetPower,
    handleSetStrength,
  } = useAttribute();

  return (
    <Container>
      <h3>Atributos</h3>
      <Content>
        <InputAttributeItem
          type="number"
          name="Aparência"
          onChange={e => handleSetAppearance(Number(e.target.value))}
          abilityValue={appearance}
        />
        <InputAttributeItem
          type="number"
          name="Constituição"
          onChange={e => handleSetConstitution(Number(e.target.value))}
          abilityValue={constitution}
        />
        <InputAttributeItem
          type="number"
          name="Destreza"
          onChange={e => handleSetDexterity(Number(e.target.value))}
          abilityValue={dexterity}
        />
        <InputAttributeItem
          type="number"
          name="Educação"
          onChange={e => handleSetEducation(Number(e.target.value))}
          abilityValue={education}
        />
        <InputAttributeItem
          type="number"
          name="Força"
          onChange={e => handleSetStrength(Number(e.target.value))}
          abilityValue={strength}
        />
        <InputAttributeItem
          type="number"
          name="Inteligência"
          onChange={e => handleSetIntelligence(Number(e.target.value))}
          abilityValue={intelligence}
        />
        <InputAttributeItem
          type="number"
          name="Poder"
          onChange={e => handleSetPower(Number(e.target.value))}
          abilityValue={power}
        />
        <InputAttributeItem
          type="number"
          name="Sorte"
          onChange={e => handleSetLuck(Number(e.target.value))}
          abilityValue={luck}
        />
        <InputAttributeItem
          type="number"
          name="Movimento"
          onChange={e => handleSetMovement(Number(e.target.value))}
          abilityValue={movement}
        />
        <InputAttributeItem
          type="number"
          name="?"
          onChange={e => handleSetExtra1(Number(e.target.value))}
          abilityValue={extra1}
        />
        <InputAttributeItem
          type="number"
          name="?"
          onChange={e => handleSetExtra2(Number(e.target.value))}
          abilityValue={extra2}
        />
        <InputAttributeItem
          type="number"
          name="?"
          onChange={e => handleSetExtra3(Number(e.target.value))}
          abilityValue={extra3}
        />
      </Content>
    </Container>
  );
}
