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
  setExtraDamage(value: number): void;
  setBody(value: number): void;
  setParanormal(value: number): void;
};

const CharacterContext = createContext({} as CharacterContextData);

export function CharacterProvider({
  children,
}: CharacterProviderProps): ReactElement {
  const [extraDamage, setExtraDamage] = useState(0);
  const [body, setBody] = useState(0);
  const [paranormal, setParanormal] = useState(0);

  return (
    <CharacterContext.Provider
      value={{
        body,
        extraDamage,
        paranormal,
        setBody,
        setExtraDamage,
        setParanormal,
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
