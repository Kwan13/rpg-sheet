/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { AttributePointsContext } from '../contexts/AttributePointsContext';

export function useAttribute() {
  const context = useContext(AttributePointsContext);

  return context;
}
