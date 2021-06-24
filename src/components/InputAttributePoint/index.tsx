import { InputHTMLAttributes, ReactElement, useState } from 'react';

import { Modal } from '../Modal';
import { useDice } from '../../hooks/useDice';

import { Container, ModalContent } from './styles';
import diceImg from '../../assets/dice.svg';

interface InputAttributePointProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  abilityValue: number;
}

export function InputAttributePoint({
  name,
  abilityValue,
  ...rest
}: InputAttributePointProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const { handleDiceStatus, dice, status } = useDice();

  function handleToggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          handleToggleModal();
          handleDiceStatus(abilityValue);
        }}
      >
        <img src={diceImg} alt="dice" />
      </button>
      <h4>{name}</h4>
      <input name={name} {...rest} max={20} defaultValue={abilityValue} />
      {isOpen && (
        <Modal closeModal={handleToggleModal} modalTitle="status">
          <ModalContent>
            <img src={diceImg} alt="dice" />
            <p>{dice}</p>
            <h2>{status}</h2>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
