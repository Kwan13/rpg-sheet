import { ReactElement, useState } from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { Modal } from '../../Modal';
import { Input } from '../../Input';
import { TextArea } from '../../TextArea';

import { useInventory } from '../../../hooks/useInventory';

import { Container } from './styles';

type MagicItem = {
  id: string;
  itemUrl: string;
  name: string;
  damage: number;
  range: number;
  magicEffect: string;
  description: string;
};

type EditMagicItem = {
  itemUrl: string;
  name: string;
  damage: number;
  range: number;
  magicEffect: string;
  description: string;
};

interface MagicItemProps {
  data: MagicItem;
}

export function MagicItem({ data }: MagicItemProps): ReactElement {
  const { handleSubmit, register } = useForm();
  const { handleEditMagicItems, handleDeleteMagicItems } = useInventory();

  const [editItemModal, setEditItemModal] = useState(false);

  function handleSubmitMagicItem(formData: EditMagicItem) {
    handleEditMagicItems(data.id, formData);
    handleToggleModal();
  }

  function handleToggleModal() {
    setEditItemModal(!editItemModal);
  }
  return (
    <>
      <Container>
        <header>
          <button type="button" onClick={handleToggleModal}>
            <FiEdit />
          </button>
          <button type="button" onClick={() => handleDeleteMagicItems(data.id)}>
            <FiTrash />
          </button>
        </header>

        <main>
          <img src={data.itemUrl} alt={data.name} />
          <div>
            <h3>{data.name}</h3>
            <ul>
              <li>
                <p>
                  <span className="attributes">Dano:</span>
                  {data.damage}
                </p>
              </li>
              <li>
                <p>
                  <span className="attributes">Alcance:</span>
                  {data.range}
                </p>
              </li>
              <li>
                <p>
                  <span className="attributes">Efeito mágico:</span>
                  {data.magicEffect}
                </p>
              </li>
            </ul>

            <p>
              <span>Descrição:</span>
              {data.description}
            </p>
          </div>
        </main>
      </Container>
      {editItemModal && (
        <Modal modalTitle="Editar item mágico" closeModal={handleToggleModal}>
          <form onSubmit={handleSubmit(handleSubmitMagicItem)}>
            <Input
              {...register('itemUrl')}
              type="text"
              id="itemUrl"
              placeholder="Item URL"
              defaultValue={data.itemUrl}
            />

            <Input
              {...register('name')}
              type="text"
              id="type"
              placeholder="Nome"
              defaultValue={data.name}
            />
            <Input
              {...register('damage')}
              type="text"
              id="number"
              placeholder="Dano"
              defaultValue={data.damage}
            />
            <Input
              {...register('range')}
              type="number"
              id="type"
              placeholder="Alcance"
              defaultValue={data.range}
            />
            <Input
              {...register('magicEffect')}
              type="text"
              id="type"
              placeholder="Efeito mágico"
              defaultValue={data.magicEffect}
            />

            <h4>Descrição:</h4>
            <TextArea
              {...register('description')}
              id="description"
              defaultValue={data.description}
            />

            <button type="submit" className="submitButton">
              editar
            </button>
          </form>
        </Modal>
      )}
    </>
  );
}
