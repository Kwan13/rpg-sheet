import {
  useContext,
  ReactNode,
  createContext,
  ReactElement,
  useState,
} from 'react';

interface CharacterProviderProps {
  children: ReactNode;
}

type CharacterContextData = {
  extraDamage: number;
  body: number;
  paranormal: number;
  addExtraDamage(value: number): void;
  addBody(value: number): void;
  addParanormal(value: number): void;
};

const CharacterContext = createContext({} as CharacterContextData);

export function CharacterProvider({
  children,
}: CharacterProviderProps): ReactElement {
  const [extraDamage, setExtraDamage] = useState(0);
  const [body, setBody] = useState(0);
  const [paranormal, setParanormal] = useState(0);

  function addExtraDamage(value: number) {
    setExtraDamage(value);
  }

  function addBody(value: number) {
    setBody(value);
  }

  function addParanormal(value: number) {
    setParanormal(value);
  }

  return (
    <CharacterContext.Provider
      value={{
        body,
        extraDamage,
        paranormal,
        addBody,
        addExtraDamage,
        addParanormal,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter(): CharacterContextData {
  const context = useContext(CharacterContext);

  return context;
}
