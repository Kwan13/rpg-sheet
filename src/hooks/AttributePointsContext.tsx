import {
  createContext,
  useContext,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

type AttributePointsContextData = {
  appearance: number;
  constitution: number;
  dexterity: number;
  education: number;
  strength: number;
  intelligence: number;
  power: number;
  luck: number;
  movement: number;
  extra1: number;
  extra2: number;
  extra3: number;
  handleSetAppearance(value: number): void;
  handleSetConstitution(value: number): void;
  handleSetDexterity(value: number): void;
  handleSetEducation(value: number): void;
  handleSetStrength(value: number): void;
  handleSetIntelligence(value: number): void;
  handleSetPower(value: number): void;
  handleSetLuck(value: number): void;
  handleSetMovement(value: number): void;
  handleSetExtra1(value: number): void;
  handleSetExtra2(value: number): void;
  handleSetExtra3(value: number): void;
};

const AttributePointsContext = createContext({} as AttributePointsContextData);

interface AttributePointsProvider {
  children: ReactNode;
}

export function AttributePointsProvider({
  children,
}: AttributePointsProvider): ReactElement {
  const [appearance, setAppearance] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [education, setEducation] = useState(0);
  const [strength, setStrength] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [power, setPower] = useState(0);
  const [luck, setLuck] = useState(0);
  const [movement, setMovement] = useState(0);
  const [extra1, setExtra1] = useState(0);
  const [extra2, setExtra2] = useState(0);
  const [extra3, setExtra3] = useState(0);

  function handleSetAppearance(value: number) {
    setAppearance(value);
  }
  function handleSetConstitution(value: number) {
    setConstitution(value);
  }
  function handleSetDexterity(value: number) {
    setDexterity(value);
  }
  function handleSetEducation(value: number) {
    setEducation(value);
  }
  function handleSetStrength(value: number) {
    setStrength(value);
  }
  function handleSetIntelligence(value: number) {
    setIntelligence(value);
  }
  function handleSetPower(value: number) {
    setPower(value);
  }
  function handleSetLuck(value: number) {
    setLuck(value);
  }
  function handleSetMovement(value: number) {
    setMovement(value);
  }
  function handleSetExtra1(value: number) {
    setExtra1(value);
  }
  function handleSetExtra2(value: number) {
    setExtra2(value);
  }
  function handleSetExtra3(value: number) {
    setExtra3(value);
  }

  return (
    <AttributePointsContext.Provider
      value={{
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
        handleSetIntelligence,
        handleSetLuck,
        handleSetMovement,
        handleSetPower,
        handleSetStrength,
        handleSetExtra1,
        handleSetExtra2,
        handleSetExtra3,
      }}
    >
      {children}
    </AttributePointsContext.Provider>
  );
}

export function useAttributesPoints(): AttributePointsContextData {
  const context = useContext(AttributePointsContext);

  return context;
}
