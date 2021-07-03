/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';

import { SkillsContext } from '../contexts/SkillsContext';

export function useSkills() {
  const context = useContext(SkillsContext);

  return context;
}
