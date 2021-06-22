import { ReactElement } from 'react';

import { InputAttributePoint } from '../InputAttributePoint';

import { useAttributesPoints } from '../../hooks/AttributePointsContext';

import { Container, Content } from './styles';

export function AttributePointsContainer(): ReactElement {
  const {
    handleSetAppearance,
    handleSetConstitution,
    handleSetStrength,
    handleSetMovement,
    handleSetPower,
    handleSetLuck,
    handleSetIntelligence,
    handleSetEducation,
    handleSetDexterity,
    handleSetExtra1,
    handleSetExtra2,
    handleSetExtra3,
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
  } = useAttributesPoints();
  return (
    <Container>
      <h3>Atributos</h3>
      <Content>
        <InputAttributePoint
          type="number"
          name="appearance"
          onChange={e => handleSetAppearance(Number(e.target.value))}
          statusNumberBase={appearance}
        />
        <InputAttributePoint
          type="number"
          name="constitution"
          onChange={e => handleSetConstitution(Number(e.target.value))}
          statusNumberBase={constitution}
        />
        <InputAttributePoint
          type="number"
          name="dexterity"
          onChange={e => handleSetDexterity(Number(e.target.value))}
          statusNumberBase={dexterity}
        />
        <InputAttributePoint
          type="number"
          name="education"
          onChange={e => handleSetEducation(Number(e.target.value))}
          statusNumberBase={education}
        />
        <InputAttributePoint
          type="number"
          name="strength"
          onChange={e => handleSetStrength(Number(e.target.value))}
          statusNumberBase={strength}
        />
        <InputAttributePoint
          type="number"
          name="intelligence"
          onChange={e => handleSetIntelligence(Number(e.target.value))}
          statusNumberBase={intelligence}
        />
        <InputAttributePoint
          type="number"
          name="power"
          onChange={e => handleSetPower(Number(e.target.value))}
          statusNumberBase={power}
        />
        <InputAttributePoint
          type="number"
          name="luck"
          onChange={e => handleSetLuck(Number(e.target.value))}
          statusNumberBase={luck}
        />
        <InputAttributePoint
          type="number"
          name="movement"
          onChange={e => handleSetMovement(Number(e.target.value))}
          statusNumberBase={movement}
        />
        <InputAttributePoint
          type="number"
          name="?"
          onChange={e => handleSetExtra1(Number(e.target.value))}
          statusNumberBase={extra1}
        />
        <InputAttributePoint
          type="number"
          name="?"
          onChange={e => handleSetExtra2(Number(e.target.value))}
          statusNumberBase={extra2}
        />
        <InputAttributePoint
          type="number"
          name="?"
          onChange={e => handleSetExtra3(Number(e.target.value))}
          statusNumberBase={extra3}
        />
      </Content>
    </Container>
  );
}
