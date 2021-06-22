import {
  useState,
  ReactNode,
  createContext,
  useContext,
  ReactElement,
} from 'react';

interface CharacterProviderProps {
  children: ReactNode;
}

type AttributeBarContextData = {
  addLife(value: number): void;
  addSanity(value: number): void;
  addOccultism(value: number): void;
  life: number;
  sanity: number;
  occultism: number;
};

const CharacterContext = createContext({} as AttributeBarContextData);

export function CharacterProvider({
  children,
}: CharacterProviderProps): ReactElement {
  const [life, setLife] = useState(12);
  const [sanity, setSanity] = useState(12);
  const [occultism, setOccultism] = useState(12);

  function addLife(value: number) {
    setLife(value);
  }

  function addSanity(value: number) {
    setSanity(value);
  }

  function addOccultism(value: number) {
    setOccultism(value);
  }

  return (
    <CharacterContext.Provider
      value={{ addLife, addOccultism, addSanity, life, occultism, sanity }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useAttributesBar(): AttributeBarContextData {
  const context = useContext(CharacterContext);

  return context;
}
