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
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  function handleSetWeapon(value: Weapon) {
    setWeapons(oldState => [...oldState, value]);
  }

  function handleDeleteWeapon(id: string) {
    const filteredWeapon = weapons.filter(weapon => weapon.id !== id);
    setWeapons(filteredWeapon);
  }
  return (
    <CombatContext.Provider
      value={{ handleDeleteWeapon, handleSetWeapon, weapons }}
    >
      {children}
    </CombatContext.Provider>
  );
}
