import { useState, ReactNode, createContext, ReactElement } from 'react';

type Weapon = {
  id: string;
  name: string;
  type: string;
  damage: string;
  attack: string;
  range: string;
  defect: string;
  area: string;
};

type CombatContextData = {
  weapons: Weapon[];
  handleSetWeapon(value: Weapon): void;
  handleDeleteWeapon(id: string): void;
};

interface CombatProvider {
  children: ReactNode;
}

export const CombatContext = createContext({} as CombatContextData);

export function CombatProvider({ children }: CombatProvider): ReactElement {
  const [weapons, setWeapons] = useState<Weapon[]>(() => {
    const weaponsData = localStorage.getItem('rpgSheet:Combat');

    if (!weaponsData) {
      localStorage.setItem('rpgSheet:Combat', String([]));
      return [];
    }

    return JSON.parse(weaponsData);
  });

  function handleSetWeapon(value: Weapon) {
    setWeapons(oldState => [...oldState, value]);
    localStorage.setItem(
      'rpgSheet:Combat',
      JSON.stringify([...weapons, value]),
    );
  }

  function handleDeleteWeapon(id: string) {
    const filteredWeapon = weapons.filter(weapon => weapon.id !== id);
    setWeapons(filteredWeapon);
    localStorage.setItem('rpgSheet:Combat', JSON.stringify(filteredWeapon));
  }
  return (
    <CombatContext.Provider
      value={{ handleDeleteWeapon, handleSetWeapon, weapons }}
    >
      {children}
    </CombatContext.Provider>
  );
}
