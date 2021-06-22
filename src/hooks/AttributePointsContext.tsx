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
  setAppearance(value: number): void;
  setConstitution(value: number): void;
  setDexterity(value: number): void;
  setEducation(value: number): void;
  setStrength(value: number): void;
  setIntelligence(value: number): void;
  setPower(value: number): void;
  setLuck(value: number): void;
  setMovement(value: number): void;
  setExtra1(value: number): void;
  setExtra2(value: number): void;
  setExtra3(value: number): void;
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
