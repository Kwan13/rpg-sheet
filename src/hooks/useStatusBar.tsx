/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { StatusBarContext } from '../contexts/StatusBarContext';

export function useStatusBar() {
  const context = useContext(StatusBarContext);

  return context;
}
