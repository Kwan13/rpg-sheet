import { ReactElement, ReactNode } from 'react';
import { FaWindowClose } from 'react-icons/fa';

import { Container, Content } from './styles';

interface ModalProps {
  children: ReactNode;
  modalTitle: string;
  closeModal(): void;
}

export function Modal({
  children,
  modalTitle,
  closeModal,
}: ModalProps): ReactElement {
  return (
    <Container>
      <Content>
        <header>
          <h3>{modalTitle}</h3>
          <button type="button" className="closeButton" onClick={closeModal}>
            <FaWindowClose />
          </button>
        </header>

        {children}
      </Content>
    </Container>
  );
}
