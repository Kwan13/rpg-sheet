import { useState, ReactNode, createContext, ReactElement } from 'react';

interface StatusProviderProps {
  children: ReactNode;
}

type StatusBarContextData = {
  setLife(value: number): void;
  setSanity(value: number): void;
  setOccultism(value: number): void;
  life: number;
  sanity: number;
  occultism: number;
};

export const StatusBarContext = createContext({} as StatusBarContextData);

export function StatusBarProvider({
  children,
}: StatusProviderProps): ReactElement {
  const [occultism, setOccultism] = useState(12);
  const [sanity, setSanity] = useState(12);
  const [life, setLife] = useState(12);

  return (
    <StatusBarContext.Provider
      value={{ setLife, setOccultism, setSanity, life, occultism, sanity }}
    >
      {children}
    </StatusBarContext.Provider>
  );
}
