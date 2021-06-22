import { InputHTMLAttributes, ReactElement, useState } from 'react';

import { Modal } from '../Modal';

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
  const [status, setStatus] = useState('');
  const [diceValue, setDiceValue] = useState(0);

  function handleCalcDice() {
    const dice = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    const ability = abilityValue;
    setDiceValue(dice);

    if (ability <= 0 || ability > 20) {
      setStatus('inválido');
      setDiceValue(0);

      return;
    }

    const table = [
      { normal: 20 },
      { normal: 19, good: 20 },
      { normal: 18, good: 20 },
      { normal: 17, good: 19 },
      { normal: 16, good: 19, extreme: 20 },
      { normal: 15, good: 18, extreme: 20 },
      { normal: 14, good: 18, extreme: 20 },
      { normal: 13, good: 17, extreme: 20 },
      { normal: 12, good: 17, extreme: 20 },
      { normal: 11, good: 16, extreme: 19 },
      { normal: 10, good: 16, extreme: 19 },
      { normal: 9, good: 15, extreme: 19 },
      { normal: 8, good: 15, extreme: 19 },
      { normal: 7, good: 14, extreme: 19 },
      { normal: 6, good: 14, extreme: 18 },
      { normal: 5, good: 13, extreme: 18 },
      { normal: 4, good: 13, extreme: 18 },
      { normal: 3, good: 12, extreme: 18 },
      { normal: 2, good: 12, extreme: 18 },
      { normal: 1, good: 11, extreme: 18 },
    ];

    const type = table[ability - 1];

    if (type.extreme) {
      if (dice >= type.extreme) {
        setStatus('Extremo');
        return;
      }
      if (dice >= type.good) {
        setStatus('Sucesso Bom');
        return;
      }
      if (dice >= type.normal) {
        setStatus('Sucesso Normal');
        return;
      }
      if (dice <= type.normal) {
        setStatus('Fracasso');
      }
    } else if (type.good) {
      if (dice >= type.good) {
        setStatus('Sucesso Bom');
        return;
      }
      if (dice >= type.normal) {
        setStatus('Sucesso Normal');
        return;
      }
      if (dice <= type.normal) {
        setStatus('Fracasso');
      }
    } else if (type.normal) {
      if (dice >= type.normal) {
        setStatus('Sucesso Normal');
        return;
      }
      if (dice <= type.normal) {
        setStatus('Fracasso');
      }
    }
  }

  function handleToggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          handleToggleModal();
          handleCalcDice();
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
            <p>{diceValue}</p>

            <h2>{status}</h2>

            <strong />
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
