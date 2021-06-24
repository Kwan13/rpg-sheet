/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { CharacterContext } from '../contexts/CharacterContext';

export function useCharacter() {
  const context = useContext(CharacterContext);

  return context;
}
