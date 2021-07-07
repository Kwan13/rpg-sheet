/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { SaveProfileContext } from '../contexts/SaveProfileContext';

export function useSaveProfile() {
  const context = useContext(SaveProfileContext);

  return context;
}
