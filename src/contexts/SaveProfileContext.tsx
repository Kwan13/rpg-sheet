import { createContext, ReactElement, ReactNode } from 'react';

interface SaveProfileProviderProvider {
  children: ReactNode;
}

type Profile = {
  profile: string;
};

type SaveProfileContextdata = {
  handleExportProfile(): void;
  handleImportProfile(data: Profile): void;
  handleDeleteProfile(): void;
};

type ProfileData = {
  character: {
    characterData: string;
    body: string;
    damage: string;
    paranormal: string;
  };
  status: {
    life: string;
    sanity: string;
    occultism: string;
  };
  attributes: {
    appearance: string;
    constitution: string;
    dexterity: string;
    education: string;
    strength: string;
    movement: string;
    extra1: string;
    extra2: string;
    extra3: string;
    power: string;
    luck: string;
  };
  combat: {
    combatData: string;
  };
  skills: {
    skillsdata: string;
  };
  inventory: {
    itemsData: string;
    magicItemsData: string;
  };
};

export const SaveProfileContext = createContext({} as SaveProfileContextdata);

export function SaveProfileProvider({
  children,
}: SaveProfileProviderProvider): ReactElement {
  function handleExportProfile() {
    const data = {
      character: {
        characterData: localStorage.getItem('rpgSheet:Character'),
        body: localStorage.getItem('rpgSheet:Character[body]'),
        damage: localStorage.getItem('rpgSheet:Character[damage]'),
        paranormal: localStorage.getItem('rpgSheet:Character[paranormal]'),
      },
      status: {
        life: localStorage.getItem('rpgSheet:Character[life]'),
        sanity: localStorage.getItem('rpgSheet:Character[sanity]'),
        occultism: localStorage.getItem('rpgSheet:Character[occultism]'),
      },
      attributes: {
        appearance: localStorage.getItem('rpgSheet:Attribute[appearance]'),
        constitution: localStorage.getItem('rpgSheet:Attribute[constitution]'),
        dexterity: localStorage.getItem('rpgSheet:Attribute[dexterity]'),
        education: localStorage.getItem('rpgSheet:Attribute[education]'),
        strength: localStorage.getItem('rpgSheet:Attribute[strength]'),
        movement: localStorage.getItem('rpgSheet:Attribute[movement]'),
        extra1: localStorage.getItem('rpgSheet:Attribute[extra1]'),
        extra2: localStorage.getItem('rpgSheet:Attribute[extra2]'),
        extra3: localStorage.getItem('rpgSheet:Attribute[extra3]'),
        power: localStorage.getItem('rpgSheet:Attribute[power]'),
        luck: localStorage.getItem('rpgSheet:Attribute[luck]'),
      },
      combat: {
        combatData: localStorage.getItem('rpgSheet:Combat'),
      },
      skills: {
        skillsdata: localStorage.getItem('rpgSheet:Skills'),
      },
      inventory: {
        itemsData: localStorage.getItem('rpgSheet:Inventory[items]'),
        magicItemsData: localStorage.getItem('rpgSheet:Inventory[magicItems]'),
      },
    };

    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(data)], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'myProfile.txt';
    document.body.appendChild(element);
    element.click();
  }

  function handleImportProfile(data: Profile) {
    const dataParsed: ProfileData = JSON.parse(data.profile);

    const { character, attributes, combat, skills, status, inventory } =
      dataParsed;

    localStorage.setItem('rpgSheet:Character', character.characterData);
    localStorage.setItem('rpgSheet:Character[body]', character.body);
    localStorage.setItem('rpgSheet:Character[damage]', character.damage);
    localStorage.setItem(
      'rpgSheet:Character[paranormal]',
      character.paranormal,
    );
    localStorage.setItem('rpgSheet:Character[life]', status.life);
    localStorage.setItem('rpgSheet:Character[sanity]', status.sanity);
    localStorage.setItem('rpgSheet:Character[occultism]', status.occultism);
    localStorage.setItem(
      'rpgSheet:Attribute[appearance]',
      attributes.appearance,
    );
    localStorage.setItem(
      'rpgSheet:Attribute[constitution]',
      attributes.constitution,
    );
    localStorage.setItem('rpgSheet:Attribute[dexterity]', attributes.dexterity);
    localStorage.setItem('rpgSheet:Attribute[education]', attributes.education);
    localStorage.setItem('rpgSheet:Attribute[strength]', attributes.strength);
    localStorage.setItem('rpgSheet:Attribute[movement]', attributes.movement);
    localStorage.setItem('rpgSheet:Attribute[extra1]', attributes.extra1);
    localStorage.setItem('rpgSheet:Attribute[extra2]', attributes.extra2);
    localStorage.setItem('rpgSheet:Attribute[extra3]', attributes.extra3);
    localStorage.setItem('rpgSheet:Attribute[power]', attributes.power);
    localStorage.setItem('rpgSheet:Attribute[luck]', attributes.luck);
    localStorage.setItem('rpgSheet:Combat', combat.combatData);
    localStorage.setItem('rpgSheet:Skills', skills.skillsdata);
    localStorage.setItem('rpgSheet:Inventory[items]', inventory.itemsData);
    localStorage.setItem(
      'rpgSheet:Inventory[magicItems]',
      inventory.magicItemsData,
    );
  }

  function handleDeleteProfile() {
    const confirm = window.confirm(
      'Você realmente deseja deletar seu personagem?',
    );

    if (!confirm) {
      return;
    }

    localStorage.clear();
  }

  return (
    <SaveProfileContext.Provider
      value={{ handleExportProfile, handleImportProfile, handleDeleteProfile }}
    >
      {children}
    </SaveProfileContext.Provider>
  );
}
