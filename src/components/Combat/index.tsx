import { ReactElement, useState, useMemo } from 'react';
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
import { v4 as uuid } from 'uuid';

import { Modal } from '../Modal';
import { Input } from '../Input';

import { useCombat } from '../../hooks/CombatContext';

import { Container } from './styles';
import swordsImg from '../../assets/swords.png';

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
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: 0,
      type: 0,
      damage: 0,
      attack: 0,
      range: 0,
      defect: 0,
      area: 0,
    },
  });
  const { weapons, handleSetWeapon, handleDeleteWeapon } = useCombat();

  const isMaxWeapons = useMemo(() => {
    if (weapons.length >= 15) {
      return true;
    }

    return false;
  }, [weapons]);

  function toggleOpenCloseModal() {
    setIsOpen(!isOpen);
  }

  function onSubmit(data: FormData) {
    if (isMaxWeapons) return;
    const value = {
      id: uuid(),
      ...data,
    };

    handleSetWeapon(value);
  }

  return (
    <Container isMaxWeapons={isMaxWeapons}>
      <div>
        <h3>COMBATE</h3>
        {isMaxWeapons ? (
          <button type="button">
            <BsPlusSquare color="#797D9A" size={20} />
          </button>
        ) : (
          <button type="button" onClick={toggleOpenCloseModal}>
            <BsPlusSquare color="#797D9A" size={20} />
          </button>
        )}
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
          {weapons.map(weapon => (
            <tr key={weapon.id}>
              <td>
                <button
                  type="button"
                  onClick={() => handleDeleteWeapon(weapon.id)}
                >
                  <FaRegTrashAlt color="#9F7AEA" />
                </button>
              </td>
              <td>{weapon.name}</td>
              <td>{weapon.type}</td>
              <td>{weapon.damage}</td>
              <td>{weapon.attack}</td>
              <td>{weapon.range}</td>
              <td>{weapon.defect}</td>
              <td>{weapon.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {weapons.length <= 0 ? (
        <div className="emptyWeapons">
          <img src={swordsImg} alt="" />
          <p>
            parece que você está sem armas viajante... pegue uma arma e continue
            sua jornada 🛡⚔️.
          </p>
        </div>
      ) : (
        ''
      )}

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
