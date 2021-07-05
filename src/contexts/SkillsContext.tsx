import { useState, ReactNode, createContext, ReactElement } from 'react';

type Skills = {
  strength: {
    pitch: number;
    martialArts: number;
    ride: number;
    climb: number;
    swim: number;
    jump: number;
  };
  constitution: {
    listen: number;
    heavyMachine: number;
    resist: number;
    defend: number;
    energy: number;
    regeneration: number;
  };
  wisdom: {
    art: number;
    locksmith: number;
    photography: number;
    story: number;
    naturalHistory: number;
    nativeLanguage: number;
    locate: number;
    occultism: number;
    craft: number;
  };
  dexterity: {
    dodge: number;
    stealth: number;
    hide: number;
    drive: number;
    pilot: number;
    counterattack: number;
    prestidigitation: number;
  };
  intelligence: {
    anthropology: number;
    archeology: number;
    astronomy: number;
    biology: number;
    computing: number;
    accounting: number;
    credit: number;
    right: number;
    electronics: number;
    drugstore: number;
    physical: number;
    geology: number;
    medicine: number;
    navigate: number;
    anotherLanguage: number;
    firstAid: number;
    psychoanalysis: number;
    psychology: number;
    chemical: number;
    trackBack: number;
    electricalRepair: number;
    mechanicalRepair: number;
  };
  charisma: {
    bargain: number;
    disguise: number;
    lipService: number;
    cover: number;
    persuade: number;
    charm: number;
    trick: number;
  };
};

type SkillsContextData = {
  skills: Skills;
  handleSetSkills(data: Skills): void;
};

interface SkillsProviderProps {
  children: ReactNode;
}

export const SkillsContext = createContext({} as SkillsContextData);

export function SkillsProvider({
  children,
}: SkillsProviderProps): ReactElement {
  const [skills, setSkills] = useState<Skills>(() => {
    const skillsData = localStorage.getItem('rpgSheet:Skills');

    if (!skillsData) {
      const data = {
        strength: {
          pitch: 0,
          martialArts: 0,
          ride: 0,
          climb: 0,
          swim: 0,
          jump: 0,
        },
        constitution: {
          listen: 0,
          heavyMachine: 0,
          resist: 0,
          defend: 0,
          energy: 0,
          regeneration: 0,
        },
        wisdom: {
          art: 0,
          locksmith: 0,
          photography: 0,
          story: 0,
          naturalHistory: 0,
          nativeLanguage: 0,
          locate: 0,
          occultism: 0,
          craft: 0,
        },
        dexterity: {
          dodge: 0,
          stealth: 0,
          hide: 0,
          drive: 0,
          pilot: 0,
          counterattack: 0,
          prestidigitation: 0,
        },
        intelligence: {
          anthropology: 0,
          archeology: 0,
          astronomy: 0,
          biology: 0,
          computing: 0,
          accounting: 0,
          credit: 0,
          right: 0,
          electronics: 0,
          drugstore: 0,
          physical: 0,
          geology: 0,
          medicine: 0,
          navigate: 0,
          anotherLanguage: 0,
          firstAid: 0,
          psychoanalysis: 0,
          psychology: 0,
          chemical: 0,
          trackBack: 0,
          electricalRepair: 0,
          mechanicalRepair: 0,
        },
        charisma: {
          bargain: 0,
          disguise: 0,
          lipService: 0,
          cover: 0,
          persuade: 0,
          charm: 0,
          trick: 0,
        },
      };

      return data;
    }

    return JSON.parse(skillsData);
  });

  function handleSetSkills(data: Skills) {
    setSkills(data);
    localStorage.setItem('rpgSheet:Skills', JSON.stringify(data));
  }
  return (
    <SkillsContext.Provider value={{ skills, handleSetSkills }}>
      {children}
    </SkillsContext.Provider>
  );
}
