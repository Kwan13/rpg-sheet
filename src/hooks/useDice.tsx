/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { DiceContext } from '../contexts/DiceContext';

export function useDice() {
  const context = useContext(DiceContext);

  return context;
}
