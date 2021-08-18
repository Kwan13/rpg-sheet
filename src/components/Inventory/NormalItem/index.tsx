import { ReactElement, useState } from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { Modal } from '../../Modal';
import { Input } from '../../Input';
import { TextArea } from '../../TextArea';

import { useInventory } from '../../../hooks/useInventory';

import { Container } from './styles';

type Item = {
  id: string;
  itemUrl: string;
  name: string;
  description: string;
};

type EditItem = {
  itemUrl: string;
  name: string;
  description: string;
};

interface NormalItemProps {
  data: Item;
}

export function NormalItem({ data }: NormalItemProps): ReactElement {
  const { handleSubmit, register } = useForm();
  const { handleEditItems, handleDeleteItems } = useInventory();

  const [editItemModal, setEditItemModal] = useState(false);

  function handleSubmitItem(formData: EditItem) {
    handleEditItems(data.id, formData);
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
          <button type="button" onClick={() => handleDeleteItems(data.id)}>
            <FiTrash />
          </button>
        </header>

        <main>
          <img src={data.itemUrl} alt={data.name} />

          <div>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
          </div>
        </main>
      </Container>
      {editItemModal && (
        <Modal modalTitle="Editar Item" closeModal={handleToggleModal}>
          <form onSubmit={handleSubmit(handleSubmitItem)}>
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
