import {
  useEffect,
  ReactNode,
  createContext,
  useState,
  ReactElement,
} from 'react';

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
  extraDamage: number | undefined;
  body: number | undefined;
  paranormal: number | undefined;
  setCharacter(data: Character): void;
  handleSetExtraDamage(data: number): void;
  handleSetParanormal(data: number): void;
  handleSetBody(value: number): void;
};

interface CharacterProvider {
  children: ReactNode;
}

export const CharacterContext = createContext({} as CharacterContextData);

export function CharacterProvider({
  children,
}: CharacterProvider): ReactElement {
  const [character, setCharacter] = useState<Character>();
  const [extraDamage, setExtraDamage] = useState<number>();
  const [paranormal, setParanormal] = useState<number>();
  const [body, setBody] = useState<number>();

  useEffect(() => {
    const data = localStorage.getItem('rpgSheet:Character');
    const bodyData = localStorage.getItem('rpgSheet:Character[body]');
    const paranormalData = localStorage.getItem(
      'rpgSheet:Character[paranormal]',
    );
    const damageData = localStorage.getItem('rpgSheet:Character[damage]');

    if (data) {
      const characterResult = JSON.parse(data);
      setCharacter(characterResult);
      setBody(Number(bodyData));
      setParanormal(Number(paranormalData));
      setExtraDamage(Number(damageData));
      return;
    }

    setBody(0);
    setParanormal(0);
    setExtraDamage(0);
  }, []);

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
        setCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
