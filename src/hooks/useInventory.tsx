/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { InventoryContext } from '../contexts/InventoryContext';

export function useInventory() {
  const context = useContext(InventoryContext);

  return context;
}
