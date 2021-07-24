import { ReactElement } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import { FaFileImport } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useSaveProfile } from '../../hooks/useSaveProfile';

import { TextArea } from '../../components/TextArea';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

type FormData = {
  profile: string;
};

export default function Home(): ReactElement {
  const { handleSubmit, register, reset } = useForm();
  const { handleImportProfile } = useSaveProfile();
  const history = useHistory();

  function onSubmit(data: FormData) {
    handleImportProfile(data);
    reset();
    history.push('/sheet');
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="alfaiate de histórias" />

        <Link to="/character/new">
          <FiUserPlus />
          Crie um personagem
        </Link>

        <div className="separator">ou importe um personagem</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextArea
            placeholder="Cole os dados do seu personagem aqui!"
            {...register('profile')}
          />

          <button type="submit">
            <FaFileImport />
            Importar
          </button>
        </form>
      </Content>
    </Container>
  );
}
