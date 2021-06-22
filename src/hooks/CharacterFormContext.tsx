import {
  ReactNode,
  createContext,
  useState,
  ReactElement,
  useContext,
} from 'react';

interface CharacterFormProvider {
  children: ReactNode;
}

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

type CharacterForm = {
  character: Character | undefined;
  addCharacter(data: Character): void;
};

const CharacterForm = createContext({} as CharacterForm);

export function CharacterFormProvider({
  children,
}: CharacterFormProvider): ReactElement {
  const [character, setCharacter] = useState<Character>();

  function addCharacter(data: Character) {
    setCharacter(data);
  }

  return (
    <CharacterForm.Provider value={{ character, addCharacter }}>
      {children}
    </CharacterForm.Provider>
  );
}

export function useCharacterForm(): CharacterForm {
  const context = useContext(CharacterForm);

  return context;
}
