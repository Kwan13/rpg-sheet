import { ReactNode, createContext, useState, ReactElement } from 'react';

type Character = {
  avatar: string;
  fullBody: string;
  name: string;
  player: string;
  occupation: string;
  age: number;
  sex: 'masculino' | 'feminino';
  birthplace: string;
  residence: string;
  description: string;
};

type CharacterContextData = {
  character: Character;
  extraDamage: number;
  body: number;
  paranormal: number;
  handleSetCharacter(data: Character): void;
  handleSetExtraDamage(value: number): void;
  handleSetParanormal(value: number): void;
  handleSetBody(value: number): void;
};

interface CharacterProvider {
  children: ReactNode;
}

export const CharacterContext = createContext({} as CharacterContextData);

export function CharacterProvider({
  children,
}: CharacterProvider): ReactElement {
  const [character, setCharacter] = useState<Character>(() => {
    const characterData = localStorage.getItem('rpgSheet:Character');

    if (!characterData) {
      localStorage.setItem('rpgSheet:Character', String(''));
      return '';
    }

    return JSON.parse(characterData);
  });
  const [extraDamage, setExtraDamage] = useState(() => {
    const extraDamageData = localStorage.getItem('rpgSheet:Character[damage]');

    if (!extraDamageData) {
      localStorage.setItem('rpgSheet:Character[damage]', String(0));
      return 0;
    }

    return JSON.parse(extraDamageData);
  });
  const [paranormal, setParanormal] = useState(() => {
    const paranormalData = localStorage.getItem(
      'rpgSheet:Character[paranormal]',
    );

    if (!paranormalData) {
      localStorage.setItem('rpgSheet:Character[paranormal]', String(0));
      return 0;
    }

    return JSON.parse(paranormalData);
  });
  const [body, setBody] = useState(() => {
    const bodyData = localStorage.getItem('rpgSheet:Character[body]');

    if (!bodyData) {
      localStorage.setItem('rpgSheet:Character[body]', String(0));
      return 0;
    }

    return JSON.parse(bodyData);
  });

  function handleSetCharacter(data: Character) {
    setCharacter(data);
    localStorage.setItem('rpgSheet:Character', JSON.stringify(data));
  }

  function handleSetBody(value: number) {
    setBody(value);
    localStorage.setItem('rpgSheet:Character[body]', String(value));
  }

  function handleSetParanormal(value: number) {
    setParanormal(value);
    localStorage.setItem('rpgSheet:Character[paranormal]', String(value));
  }

  function handleSetExtraDamage(value: number) {
    setExtraDamage(value);
    localStorage.setItem('rpgSheet:Character[damage]', String(value));
  }

  return (
    <CharacterContext.Provider
      value={{
        body,
        character,
        extraDamage,
        paranormal,
        handleSetBody,
        handleSetExtraDamage,
        handleSetParanormal,
        handleSetCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
