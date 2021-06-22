import {
  useState,
  ReactNode,
  createContext,
  useContext,
  ReactElement,
} from 'react';

interface AttributesBarProviderProps {
  children: ReactNode;
}

type AttributeBarContextData = {
  setLife(value: number): void;
  setSanity(value: number): void;
  setOccultism(value: number): void;
  life: number;
  sanity: number;
  occultism: number;
};

const AttributeBarContext = createContext({} as AttributeBarContextData);

export function AttributesBarProvider({
  children,
}: AttributesBarProviderProps): ReactElement {
  const [life, setLife] = useState(12);
  const [sanity, setSanity] = useState(12);
  const [occultism, setOccultism] = useState(12);

  return (
    <AttributeBarContext.Provider
      value={{ setLife, setOccultism, setSanity, life, occultism, sanity }}
    >
      {children}
    </AttributeBarContext.Provider>
  );
}

export function useAttributesBar(): AttributeBarContextData {
  const context = useContext(AttributeBarContext);

  return context;
}
