import { createContext, ReactElement, ReactNode, useState } from 'react';

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

export const AttributePointsContext = createContext(
  {} as AttributePointsContextData,
);

interface AttributePointsProvider {
  children: ReactNode;
}

export function AttributePointsProvider({
  children,
}: AttributePointsProvider): ReactElement {
  const [intelligence, setIntelligence] = useState(() => {
    const intelligenceResult = localStorage.getItem(
      'rpgSheet:Attribute[intelligence]',
    );

    if (!intelligenceResult) {
      return 0;
    }

    return Number(intelligenceResult);
  });
  const [constitution, setConstitution] = useState(() => {
    const constitutionData = localStorage.getItem(
      'rpgSheet:Attribute[constitution]',
    );

    if (!constitutionData) {
      return 0;
    }

    return Number(constitutionData);
  });
  const [appearance, setAppearance] = useState(() => {
    const appearanceData = localStorage.getItem(
      'rpgSheet:Attribute[appearance]',
    );

    if (!appearanceData) {
      return 0;
    }

    return Number(appearanceData);
  });
  const [dexterity, setDexterity] = useState(() => {
    const dexterityData = localStorage.getItem('rpgSheet:Attribute[dexterity]');

    if (!dexterityData) {
      return 0;
    }

    return Number(dexterityData);
  });
  const [education, setEducation] = useState(() => {
    const educationData = localStorage.getItem('rpgSheet:Attribute[education]');

    if (!educationData) {
      return 0;
    }

    return Number(educationData);
  });
  const [strength, setStrength] = useState(() => {
    const strengthData = localStorage.getItem('rpgSheet:Attribute[strength]');

    if (!strengthData) {
      return 0;
    }

    return Number(strengthData);
  });
  const [movement, setMovement] = useState(() => {
    const movementData = localStorage.getItem('rpgSheet:Attribute[movement]');

    if (!movementData) {
      return 0;
    }

    return Number(movementData);
  });
  const [extra1, setExtra1] = useState(() => {
    const extra1Data = localStorage.getItem('rpgSheet:Attribute[extra1]');

    if (!extra1Data) {
      return 0;
    }

    return Number(extra1Data);
  });
  const [extra2, setExtra2] = useState(() => {
    const extra2Data = localStorage.getItem('rpgSheet:Attribute[extra2]');

    if (!extra2Data) {
      return 0;
    }

    return Number(extra2Data);
  });
  const [extra3, setExtra3] = useState(() => {
    const extra3Data = localStorage.getItem('rpgSheet:Attribute[extra3]');

    if (!extra3Data) {
      return 0;
    }

    return Number(extra3Data);
  });
  const [power, setPower] = useState(() => {
    const powerData = localStorage.getItem('rpgSheet:Attribute[power]');

    if (!powerData) {
      return 0;
    }

    return Number(powerData);
  });
  const [luck, setLuck] = useState(() => {
    const luckData = localStorage.getItem('rpgSheet:Attribute[luck]');

    if (!luckData) {
      return 0;
    }

    return Number(luckData);
  });

  function handleSetIntelligence(value: number) {
    setIntelligence(value);
    localStorage.setItem('rpgSheet:Attribute[intelligence]', String(value));
  }

  function handleSetConstitution(value: number) {
    setConstitution(value);
    localStorage.setItem('rpgSheet:Attribute[constitution]', String(value));
  }

  function handleSetAppearance(value: number) {
    setAppearance(value);
    localStorage.setItem('rpgSheet:Attribute[appearance]', String(value));
  }

  function handleSetDexterity(value: number) {
    setDexterity(value);
    localStorage.setItem('rpgSheet:Attribute[dexterity]', String(value));
  }

  function handleSetEducation(value: number) {
    setEducation(value);
    localStorage.setItem('rpgSheet:Attribute[education]', String(value));
  }

  function handleSetStrength(value: number) {
    setStrength(value);
    localStorage.setItem('rpgSheet:Attribute[strength]', String(value));
  }

  function handleSetMovement(value: number) {
    setMovement(value);
    localStorage.setItem('rpgSheet:Attribute[movement]', String(value));
  }

  function handleSetExtra1(value: number) {
    setExtra1(value);
    localStorage.setItem('rpgSheet:Attribute[extra1]', String(value));
  }

  function handleSetExtra2(value: number) {
    setExtra2(value);
    localStorage.setItem('rpgSheet:Attribute[extra2]', String(value));
  }

  function handleSetExtra3(value: number) {
    setExtra3(value);
    localStorage.setItem('rpgSheet:Attribute[extra3]', String(value));
  }

  function handleSetPower(value: number) {
    setPower(value);
    localStorage.setItem('rpgSheet:Attribute[power]', String(value));
  }

  function handleSetLuck(value: number) {
    setLuck(value);
    localStorage.setItem('rpgSheet:Attribute[luck]', String(value));
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
        handleSetExtra1,
        handleSetExtra2,
        handleSetExtra3,
        handleSetIntelligence,
        handleSetLuck,
        handleSetMovement,
        handleSetPower,
        handleSetStrength,
      }}
    >
      {children}
    </AttributePointsContext.Provider>
  );
}
