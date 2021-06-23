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
  dice: number;
  status: string;
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
  handleCalcDice(ability: number): void;
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
  const [dice, setDice] = useState(0);
  const [status, setStatus] = useState('');

  function handleCalcDice(ability: number) {
    const randomDice = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

    setDice(randomDice);

    if (ability <= 0) {
      setStatus('inválido');
      setDice(0);

      return;
    }

    if (ability > 20) {
      setDice(randomDice);
      setStatus('');
      return;
    }

    const table = [
      { normal: 20 },
      { normal: 19, good: 20 },
      { normal: 18, good: 20 },
      { normal: 17, good: 19 },
      { normal: 16, good: 19, extreme: 20 },
      { normal: 15, good: 18, extreme: 20 },
      { normal: 14, good: 18, extreme: 20 },
      { normal: 13, good: 17, extreme: 20 },
      { normal: 12, good: 17, extreme: 20 },
      { normal: 11, good: 16, extreme: 19 },
      { normal: 10, good: 16, extreme: 19 },
      { normal: 9, good: 15, extreme: 19 },
      { normal: 8, good: 15, extreme: 19 },
      { normal: 7, good: 14, extreme: 19 },
      { normal: 6, good: 14, extreme: 18 },
      { normal: 5, good: 13, extreme: 18 },
      { normal: 4, good: 13, extreme: 18 },
      { normal: 3, good: 12, extreme: 18 },
      { normal: 2, good: 12, extreme: 18 },
      { normal: 1, good: 11, extreme: 18 },
    ];

    const type = table[ability - 1];

    if (type.extreme) {
      if (dice >= type.extreme) {
        setStatus('Extremo');
        return;
      }
      if (dice >= type.good) {
        setStatus('Sucesso Bom');
        return;
      }
      if (dice >= type.normal) {
        setStatus('Sucesso Normal');
        return;
      }
      if (dice <= type.normal) {
        setStatus('Fracasso');
      }
    } else if (type.good) {
      if (dice >= type.good) {
        setStatus('Sucesso Bom');
        return;
      }
      if (dice >= type.normal) {
        setStatus('Sucesso Normal');
        return;
      }
      if (dice <= type.normal) {
        setStatus('Fracasso');
      }
    } else if (type.normal) {
      if (dice >= type.normal) {
        setStatus('Sucesso Normal');
        return;
      }
      if (dice <= type.normal) {
        setStatus('Fracasso');
      }
    }
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
        dice,
        status,
        handleCalcDice,
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
