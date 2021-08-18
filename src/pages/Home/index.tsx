import { ReactElement, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import { FaFileImport } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSaveProfile } from '../../hooks/useSaveProfile';

import { TextArea } from '../../components/TextArea';
import { Modal } from '../../components/Modal';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

type FormData = {
  profile: string;
};

const schema = yup.object().shape({
  profile: yup.string().required('campo obrigatório'),
});

export default function Home(): ReactElement {
  const [openModal, setOpenModal] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { handleImportProfile } = useSaveProfile();
  const history = useHistory();

  function onSubmit(data: FormData) {
    handleImportProfile(data);
    window.location.reload();
  }

  function handleToggleModal() {
    setOpenModal(!openModal);
  }

  useEffect(() => {
    const characterData = localStorage.getItem('rpgSheet:Character');

    if (characterData) {
      history.push('/sheet');
    }
  }, [history]);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="alfaiate de histórias" />

        <Link to="/character/new">
          <FiUserPlus />
          Crie um personagem
        </Link>

        <div className="separator">OU</div>

        {openModal && (
          <Modal modalTitle="Importar" closeModal={handleToggleModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea
                placeholder="Cole os dados do seu personagem aqui!"
                {...register('profile')}
                error={errors.profile?.message}
              />

              <button type="submit" className="submitButton">
                Importar
              </button>
            </form>
          </Modal>
        )}

        <button type="button" onClick={handleToggleModal}>
          <FaFileImport />
          Importe
        </button>
      </Content>
    </Container>
  );
}
