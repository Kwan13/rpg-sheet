/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { CombatContext } from '../contexts/CombatContext';

export function useCombat() {
  const context = useContext(CombatContext);

  return context;
}
