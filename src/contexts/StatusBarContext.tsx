import { useState, ReactNode, createContext, ReactElement } from 'react';

interface StatusProviderProps {
  children: ReactNode;
}

type StatusBarContextData = {
  handleSetLife(value: number): void;
  handleSetSanity(value: number): void;
  handleSetOccultism(value: number): void;
  handleSetMaxLife(value: number): void;
  handleSetMaxsanity(value: number): void;
  handleSetMaxOccultism(value: number): void;
  life: number;
  sanity: number;
  occultism: number;
  maxLife: number;
  maxSanity: number;
  maxOccultism: number;
};

export const StatusBarContext = createContext({} as StatusBarContextData);

export function StatusBarProvider({
  children,
}: StatusProviderProps): ReactElement {
  const [occultism, setOccultism] = useState(() => {
    const occultismResult = localStorage.getItem(
      'rpgSheet:Character[occultism]',
    );

    if (!occultismResult) {
      localStorage.setItem('rpgSheet:Character[occultism]', String(12));
      return 12;
    }

    return Number(occultismResult);
  });
  const [sanity, setSanity] = useState(() => {
    const sanityResult = localStorage.getItem('rpgSheet:Character[sanity]');

    if (!sanityResult) {
      localStorage.setItem('rpgSheet:Character[sanity]', String(12));
      return 12;
    }

    return Number(sanityResult);
  });
  const [life, setLife] = useState(() => {
    const lifeResult = localStorage.getItem('rpgSheet:Character[life]');

    if (!lifeResult) {
      localStorage.setItem('rpgSheet:Character[life]', String(12));
      return 12;
    }

    return Number(lifeResult);
  });
  const [maxLife, setMaxLife] = useState(() => {
    const maxLifeResult = localStorage.getItem('rpgSheet:Character[maxLife]');

    if (!maxLifeResult) {
      localStorage.setItem('rpgSheet:Character[maxLife]', String(12));
      return 12;
    }

    return Number(maxLifeResult);
  });
  const [maxSanity, setMaxsanity] = useState(() => {
    const maxSanityResult = localStorage.getItem(
      'rpgSheet:Character[maxSanity]',
    );

    if (!maxSanityResult) {
      localStorage.setItem('rpgSheet:Character[maxSanity]', String(12));
      return 12;
    }

    return Number(maxSanityResult);
  });
  const [maxOccultism, setMaxOccultism] = useState(() => {
    const maxOccultismResult = localStorage.getItem(
      'rpgSheet:Character[maxOccultism]',
    );

    if (!maxOccultismResult) {
      localStorage.setItem('rpgSheet:Character[maxOccultism]', String(12));
      return 12;
    }

    return Number(maxOccultismResult);
  });

  function handleSetMaxLife(value: number) {
    setMaxLife(value);
    localStorage.setItem('rpgSheet:Character[maxLife]', String(value));
  }

  function handleSetMaxsanity(value: number) {
    setMaxsanity(value);
    localStorage.setItem('rpgSheet:Character[maxSanity]', String(value));
  }

  function handleSetMaxOccultism(value: number) {
    setMaxOccultism(value);
    localStorage.setItem('rpgSheet:Character[maxOccultism]', String(value));
  }

  function handleSetOccultism(value: number) {
    setOccultism(value);
    localStorage.setItem('rpgSheet:Character[occultism]', String(value));
  }

  function handleSetSanity(value: number) {
    setSanity(value);
    localStorage.setItem('rpgSheet:Character[sanity]', String(value));
  }

  function handleSetLife(value: number) {
    setLife(value);
    localStorage.setItem('rpgSheet:Character[life]', String(value));
  }

  return (
    <StatusBarContext.Provider
      value={{
        handleSetMaxLife,
        handleSetMaxOccultism,
        handleSetMaxsanity,
        handleSetLife,
        handleSetOccultism,
        handleSetSanity,
        life,
        occultism,
        sanity,
        maxLife,
        maxOccultism,
        maxSanity,
      }}
    >
      {children}
    </StatusBarContext.Provider>
  );
}
