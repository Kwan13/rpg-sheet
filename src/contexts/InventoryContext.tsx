import { useState, createContext, ReactElement, ReactNode } from 'react';

interface InventoryProviderProps {
  children: ReactNode;
}

type Item = {
  id: string;
  itemUrl: string;
  name: string;
  description: string;
};

type EditedItem = {
  itemUrl: string;
  name: string;
  description: string;
};

type MagicItem = {
  id: string;
  itemUrl: string;
  name: string;
  damage: number;
  range: number;
  magicEffect: string;
  description: string;
};

type EditedMagicItem = {
  itemUrl: string;
  name: string;
  damage: number;
  range: number;
  magicEffect: string;
  description: string;
};

type InventoryContextData = {
  items: Item[];
  magicItems: MagicItem[];
  handleSetItems(data: Item): void;
  handleSetMagicItems(data: MagicItem): void;
  handleDeleteItems(id: string): void;
  handleEditItems(id: string, data: EditedItem): void;
  handleEditMagicItems(id: string, data: EditedMagicItem): void;
  handleDeleteMagicItems(id: string): void;
};

export const InventoryContext = createContext({} as InventoryContextData);

export function InventoryProvider({
  children,
}: InventoryProviderProps): ReactElement {
  const [items, setItems] = useState<Item[]>(() => {
    const itemsData = localStorage.getItem('rpgSheet:Inventory[items]');

    if (!itemsData) {
      localStorage.setItem('rpgSheet:Inventory[items]', String([]));
      return [];
    }

    return JSON.parse(itemsData);
  });
  const [magicItems, setMagicItems] = useState<MagicItem[]>(() => {
    const magicItemsData = localStorage.getItem(
      'rpgSheet:Inventory[magicItems]',
    );

    if (!magicItemsData) {
      localStorage.setItem('rpgSheet:Inventory[magicItems]', String([]));
      return [];
    }

    return JSON.parse(magicItemsData);
  });

  function handleSetItems(data: Item) {
    setItems(oldState => [...oldState, data]);
    localStorage.setItem(
      'rpgSheet:Inventory[items]',
      JSON.stringify([...items, data]),
    );
  }

  function handleEditItems(id: string, data: EditedItem) {
    const editedItems = items.map(item => {
      if (item.id === id) {
        return {
          id: item.id,
          ...data,
        };
      }
      return {
        ...item,
      };
    });

    setItems(editedItems);

    localStorage.setItem(
      'rpgSheet:Inventory[items]',
      JSON.stringify(editedItems),
    );
  }

  function handleEditMagicItems(id: string, data: EditedMagicItem) {
    const editedMagicItems = magicItems.map(item => {
      if (item.id === id) {
        return {
          id: item.id,
          ...data,
        };
      }
      return {
        ...item,
      };
    });

    setMagicItems(editedMagicItems);

    localStorage.setItem(
      'rpgSheet:Inventory[magicItems]',
      JSON.stringify(editedMagicItems),
    );
  }

  function handleDeleteItems(id: string) {
    const filteredItem = items.filter(item => item.id !== id);
    setItems(filteredItem);
    localStorage.setItem(
      'rpgSheet:Inventory[items]',
      JSON.stringify(filteredItem),
    );
  }

  function handleSetMagicItems(data: MagicItem) {
    setMagicItems(oldState => [...oldState, data]);
    localStorage.setItem(
      'rpgSheet:Inventory[magicItems]',
      JSON.stringify([...magicItems, data]),
    );
  }

  function handleDeleteMagicItems(id: string) {
    const filteredMagicItem = magicItems.filter(item => item.id !== id);
    setMagicItems(filteredMagicItem);
    localStorage.setItem(
      'rpgSheet:Inventory[magicItems]',
      JSON.stringify(filteredMagicItem),
    );
  }

  return (
    <InventoryContext.Provider
      value={{
        handleSetItems,
        handleEditItems,
        handleSetMagicItems,
        handleDeleteItems,
        handleDeleteMagicItems,
        handleEditMagicItems,
        items,
        magicItems,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
