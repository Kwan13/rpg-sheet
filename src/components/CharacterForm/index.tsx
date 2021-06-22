import { ReactElement } from 'react';
import { FaSave } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCharacterForm } from '../../hooks/CharacterFormContext';

import { Input } from '../Input';

import { Container } from './styles';

type CharacterForm = {
  avatar: string;
  name: string;
  player: string;
  occupation: string;
  age: number;
  sex: 'masc' | 'fem';
  birth_place: string;
  residence: string;
};

const schema = yup.object().shape({
  avatar: yup.string().required('campo obrigatório'),
  name: yup.string().required('campo obrigatório'),
  player: yup.string().required('campo obrigatório'),
  occupation: yup.string().required('campo obrigatório'),
  age: yup.string().required('campo obrigatório'),
  sex: yup.string().required('campo obrigatório'),
  birthplace: yup.string().required('campo obrigatório'),
  residence: yup.string().required('campo obrigatório'),
});

export function CharacterForm(): ReactElement {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { addCharacter } = useCharacterForm();

  function onSubmit(data: CharacterForm) {
    addCharacter(data);
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h3>Personagem</h3>
      <label htmlFor="avatar">Avatar URL:</label>
      <Input
        {...register('avatar')}
        id="avatar"
        name="avatar"
        error={errors.avatar?.message}
      />
      <label htmlFor="name">Nome:</label>
      <Input
        {...register('name')}
        id="name"
        name="name"
        error={errors.name?.message}
      />
      <label htmlFor="player">Jogador:</label>
      <Input
        {...register('player')}
        id="player"
        name="player"
        error={errors.player?.message}
      />
      <label htmlFor="occupation">Ocupação:</label>
      <Input
        {...register('occupation')}
        id="occupation"
        name="occupation"
        error={errors.occupation?.message}
      />

      <label htmlFor="age">Idade:</label>
      <Input
        {...register('age')}
        id="age"
        name="age"
        error={errors.age?.message}
      />
      <div className="selectionBox">
        <label htmlFor="sex">Sexo:</label>
        <select {...register('sex')} name="sex" id="sex">
          <option value="masc">Masculino</option>
          <option value="fem">Feminino</option>
        </select>
      </div>

      <label htmlFor="birthplace">Local de nascimento</label>
      <Input
        {...register('birthplace')}
        id="birthplace"
        name="birthplace"
        error={errors.birthplace?.message}
      />

      <label htmlFor="residence">Local de residência</label>
      <Input
        {...register('residence')}
        id="residence"
        name="residence"
        error={errors.residence?.message}
      />

      <button type="submit">
        <FaSave color="#FFFFFF" />
        Salvar
      </button>
    </Container>
  );
}
