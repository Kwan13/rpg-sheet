import { ReactElement, useState } from 'react';
import { GiCrossedSwords } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { useInventory } from '../../hooks/useInventory';

import { ItemsGrid } from './ItemsGrid';
import { NormalItem } from './NormalItem';
import { MagicItem } from './MagicItem';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

import { Container, Header } from './styles';

type ItemFormData = {
  itemUrl: string;
  name: string;
  description: string;
};

type MagicItemFormData = {
  itemUrl: string;
  name: string;
  damage: number;
  range: number;
  magicEffect: string;
  description: string;
};

export function InventoryItems(): ReactElement {
  const [toggleItens, setToggleItens] = useState(true);
  const [openNormalItemModal, setOpenNormalItemModal] = useState(false);
  const [openMagicItemModal, setOpenMagicItemModal] = useState(false);

  const { handleSetItems, handleSetMagicItems, items, magicItems } =
    useInventory();

  const { handleSubmit, register, reset } = useForm();

  function handleNormalItens() {
    setToggleItens(true);
  }

  function handleMagicItens() {
    setToggleItens(false);
  }

  function handleToggleNormalItemModal() {
    setOpenNormalItemModal(!openNormalItemModal);
  }

  function handleToggleMagicItemModal() {
    setOpenMagicItemModal(!openMagicItemModal);
  }

  function handleSubmitItem(data: ItemFormData) {
    const item = {
      id: uuid(),
      ...data,
    };
    handleSetItems(item);
    reset();
  }

  function handleSubmitMagicItem(data: MagicItemFormData) {
    const magicItem = {
      id: uuid(),
      ...data,
    };
    handleSetMagicItems(magicItem);
    reset();
  }

  return (
    <Container>
      <Header>
        <h3>Items</h3>
        <div>
          <button
            className={toggleItens ? 'button-active' : ''}
            type="button"
            onClick={handleNormalItens}
          >
            <GiCrossedSwords />
          </button>
          <button
            className={toggleItens ? '' : 'button-active'}
            type="button"
            onClick={handleMagicItens}
          >
            <AiFillStar />
          </button>
        </div>
      </Header>
      {toggleItens ? (
        <ItemsGrid handleAddItem={handleToggleNormalItemModal}>
          {items.map(item => (
            <NormalItem key={item.id} data={item} />
          ))}
        </ItemsGrid>
      ) : (
        <ItemsGrid handleAddItem={handleToggleMagicItemModal}>
          {magicItems.map(item => (
            <MagicItem key={item.id} data={item} />
          ))}
        </ItemsGrid>
      )}
      {openNormalItemModal && (
        <Modal
          modalTitle="Adicionar item"
          closeModal={handleToggleNormalItemModal}
        >
          <form onSubmit={handleSubmit(handleSubmitItem)}>
            <Input
              {...register('itemUrl')}
              type="text"
              id="itemUrl"
              placeholder="Item URL"
            />

            <Input
              {...register('name')}
              type="text"
              id="type"
              placeholder="Nome"
            />

            <h4>Descrição:</h4>
            <TextArea {...register('description')} id="description" />

            <button type="submit" className="submitButton">
              adicionar
            </button>
          </form>
        </Modal>
      )}
      {openMagicItemModal && (
        <Modal
          modalTitle="Adicionar item mágico"
          closeModal={handleToggleMagicItemModal}
        >
          <form onSubmit={handleSubmit(handleSubmitMagicItem)}>
            <Input
              {...register('itemUrl')}
              type="text"
              id="itemUrl"
              placeholder="Item URL"
            />

            <Input
              {...register('name')}
              type="text"
              id="type"
              placeholder="Nome"
            />
            <Input
              {...register('damage')}
              type="text"
              id="number"
              placeholder="Dano"
            />
            <Input
              {...register('range')}
              type="number"
              id="type"
              placeholder="Alcance"
            />
            <Input
              {...register('magicEffect')}
              type="text"
              id="type"
              placeholder="Efeito mágico"
            />

            <h4>Descrição:</h4>
            <TextArea {...register('description')} id="description" />

            <button type="submit" className="submitButton">
              adicionar
            </button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
