import { ReactNode, createContext, useState, ReactElement } from 'react';

type Character = {
  avatar: string;
  name: string;
  player: string;
  occupation: string;
  age: number;
  sex: 'masc' | 'fem';
  birth_place: string;
  residence: string;
};

type CharacterContextData = {
  character: Character | undefined;
  extraDamage: number;
  body: number;
  paranormal: number;
  setCharacter(data: Character): void;
  setExtraDamage(data: number): void;
  setBody(data: number): void;
  setParanormal(data: number): void;
};

interface CharacterProvider {
  children: ReactNode;
}

export const CharacterContext = createContext({} as CharacterContextData);

export function CharacterProvider({
  children,
}: CharacterProvider): ReactElement {
  const [character, setCharacter] = useState<Character>();
  const [extraDamage, setExtraDamage] = useState(0);
  const [paranormal, setParanormal] = useState(0);
  const [body, setBody] = useState(0);

  return (
    <CharacterContext.Provider
      value={{
        character,
        body,
        extraDamage,
        paranormal,
        setBody,
        setExtraDamage,
        setParanormal,
        setCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
