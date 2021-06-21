import { ReactElement, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BsPlusSquare } from 'react-icons/bs';
import {
  FiUser,
  FiSettings,
  FiActivity,
  FiTrendingUp,
  FiRadio,
  FiSlash,
  FiRss,
} from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { Modal } from '../Modal';

import { Container } from './styles';
import { Input } from '../Input';

type FormData = {
  name: string;
  type: string;
  damage: string;
  attack: string;
  range: string;
  defect: string;
  area: string;
};

export function Combat(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, register } = useForm();

  function toggleOpenCloseModal() {
    const toggle = !isOpen;
    setIsOpen(toggle);
  }

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <div>
        <h3>COMBATE</h3>
        <button type="button" onClick={toggleOpenCloseModal}>
          <BsPlusSquare color="#797D9A" size={20} />
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <td />
            <td>Nome</td>
            <td>Tipo</td>
            <td>Dano</td>
            <td>Ataque</td>
            <td>Alcance</td>
            <td>Defeito</td>
            <td>Área</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button type="button">
                <FaRegTrashAlt color="#9F7AEA" />
              </button>
            </td>
            <td>Balestra</td>
            <td>Arco</td>
            <td>1d20</td>
            <td>5</td>
            <td>10 m</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      {isOpen && (
        <Modal modalTitle="Novo item" closeModal={toggleOpenCloseModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('name')}
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              icon={FiUser}
            />

            <Input
              {...register('type')}
              type="text"
              name="type"
              id="type"
              placeholder="Tipo"
              icon={FiSettings}
            />

            <Input
              {...register('damage')}
              type="text"
              name="damage"
              id="damage"
              placeholder="Dano"
              icon={FiActivity}
            />

            <Input
              {...register('attack')}
              type="text"
              name="attack"
              id="attack"
              placeholder="Ataque"
              icon={FiTrendingUp}
            />

            <Input
              {...register('range')}
              type="text"
              name="range"
              id="range"
              placeholder="Alcance"
              icon={FiRadio}
            />

            <Input
              {...register('defect')}
              type="text"
              name="defect"
              id="defect"
              placeholder="Defeito"
              icon={FiSlash}
            />

            <Input
              {...register('area')}
              type="text"
              name="area"
              id="area"
              placeholder="Área"
              icon={FiRss}
            />
            <button type="submit" className="submitButton">
              adicionar
            </button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
