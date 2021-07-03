import { useState, ReactNode, createContext, ReactElement } from 'react';

type Skills = {
  accounting: number;
  anotherLanguage: number;
  anthropology: number;
  archeology: number;
  art: number;
  astronomy: number;
  bargain: number;
  biology: number;
  charm: number;
  chemical: number;
  climb: number;
  computing: number;
  counterattack: number;
  cover: number;
  craft: number;
  credit: number;
  defend: number;
  disguise: number;
  dodge: number;
  drive: number;
  drugstore: number;
  electricalRepair: number;
  electronics: number;
  energy: number;
  firstAid: number;
  geology: number;
  heavyMachine: number;
  hide: number;
  jump: number;
  lipService: number;
  listen: number;
  locate: number;
  locksmith: number;
  martialArts: number;
  mechanicalRepair: number;
  medicine: number;
  nativeLanguage: number;
  naturalHistory: number;
  navigate: number;
  occultism: number;
  persuade: number;
  photography: number;
  physical: number;
  pilot: number;
  pitch: number;
  prestidigitation: number;
  psychoanalysis: number;
  psychology: number;
  regeneration: number;
  resist: number;
  ride: number;
  right: number;
  stealth: number;
  story: number;
  swim: number;
  trackBack: number;
  trick: number;
};

type SkillsContextData = {
  skills: Skills;
  setSkills(value: Skills): void;
};

interface SkillsProviderProps {
  children: ReactNode;
}

export const SkillsContext = createContext({} as SkillsContextData);

export function SkillsProvider({
  children,
}: SkillsProviderProps): ReactElement {
  const [skills, setSkills] = useState<Skills>({
    accounting: 0,
    anotherLanguage: 0,
    anthropology: 0,
    archeology: 0,
    art: 0,
    astronomy: 0,
    bargain: 0,
    biology: 0,
    charm: 0,
    chemical: 0,
    climb: 0,
    computing: 0,
    counterattack: 0,
    cover: 0,
    craft: 0,
    credit: 0,
    defend: 0,
    disguise: 0,
    dodge: 0,
    drive: 0,
    drugstore: 0,
    electricalRepair: 0,
    electronics: 0,
    energy: 0,
    firstAid: 0,
    geology: 0,
    heavyMachine: 0,
    hide: 0,
    jump: 0,
    lipService: 0,
    listen: 0,
    locate: 0,
    locksmith: 0,
    martialArts: 0,
    mechanicalRepair: 0,
    medicine: 0,
    nativeLanguage: 0,
    naturalHistory: 0,
    navigate: 0,
    occultism: 0,
    persuade: 0,
    photography: 0,
    physical: 0,
    pilot: 0,
    pitch: 0,
    prestidigitation: 0,
    psychoanalysis: 0,
    psychology: 0,
    regeneration: 0,
    resist: 0,
    ride: 0,
    right: 0,
    stealth: 0,
    story: 0,
    swim: 0,
    trackBack: 0,
    trick: 0,
  });
  return (
    <SkillsContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillsContext.Provider>
  );
}
