import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/FormInput';
import { Navbar } from '../../components/Navbar';
import { TextArea } from '../../components/TextArea';
import { useCharacter } from '../../hooks/useCharacter';

import { Container, Content, InputGroup } from './styles';

type FormData = {
  avatar: string;
  fullBody: string;
  name: string;
  player: string;
  occupation: string;
  age: number;
  sex: 'masculino' | 'feminino';
  birthplace: string;
  residence: string;
  description: string;
};

const schema = yup.object().shape({
  avatar: yup.string().required('campo obrigatório'),
  fullBody: yup.string().required('campo obrigatório'),
  name: yup.string().required('campo obrigatório'),
  player: yup.string().required('campo obrigatório'),
  occupation: yup.string().required('campo obrigatório'),
  age: yup.string().required('campo obrigatório'),
  sex: yup.string().required('campo obrigatório'),
  birthplace: yup.string().required('campo obrigatório'),
  residence: yup.string().required('campo obrigatório'),
  description: yup.string().required('campo obrigatório'),
});

export default function Character(): ReactElement {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const { handleSetCharacter } = useCharacter();

  function onSubmit(data: FormData) {
    handleSetCharacter(data);
    history.push('/sheet');
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Personagem</h1>
          <h5>URL:</h5>
          <InputGroup>
            <Input
              label="Avatar"
              {...register('avatar')}
              error={errors.avatar?.message}
            />
            <Input
              label="Corpo"
              {...register('fullBody')}
              error={errors.fullBody?.message}
            />
          </InputGroup>

          <h5>DADOS PESSOAIS:</h5>
          <Input
            label="Nome"
            {...register('name')}
            error={errors.name?.message}
          />
          <br />
          <Input
            label="Jogador"
            {...register('player')}
            error={errors.player?.message}
          />
          <br />
          <Input
            label="Ocupação"
            {...register('occupation')}
            error={errors.occupation?.message}
          />
          <br />
          <Input
            label="Idade"
            {...register('age')}
            error={errors.age?.message}
          />
          <br />
          <div className="selectBox">
            <label htmlFor="sex">Sexo:</label>
            <select id="sex" {...register('sex')}>
              <option value="masculino" selected>
                Masculino
              </option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <br />
          <Input
            label="Local de nascimento"
            {...register('birthplace')}
            error={errors.birthplace?.message}
          />
          <br />
          <Input
            label="Local de residência"
            {...register('residence')}
            error={errors.residence?.message}
          />
          <br />

          <h5>DESCRIÇÃO</h5>
          <TextArea
            placeholder="sobre o personagem"
            {...register('description')}
            error={errors.description?.message}
          />
          <button type="submit">criar !</button>
        </form>
      </Content>
    </Container>
  );
}
