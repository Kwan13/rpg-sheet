import { useState, ReactElement, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../Input';
import { Modal } from '../Modal';

import { Container, Bar } from './styles';

interface StatusBarProps {
  name: string;
  color: string;
  value: number;
  maxValue: number;
  setValue(value: number): void;
  setMaxValue(value: number): void;
}

type FormData = {
  currentValue: number;
  maxValue: number;
};

export function StatusBar({
  name,
  color,
  value,
  maxValue,
  setMaxValue,
  setValue,
}: StatusBarProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, register } = useForm();

  const percentage = useMemo(() => {
    const maxStatus = maxValue;
    const currentValue = value;
    const result = (currentValue * 100) / maxStatus;

    return result;
  }, [maxValue, value]);

  function onSubmit(data: FormData) {
    if (Number(data.maxValue) < Number(data.currentValue)) {
      return;
    }

    setValue(data.currentValue);
    setMaxValue(data.maxValue);
    handleToggleModal();
  }

  function handleToggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <h5>{name}</h5>
      <div>
        {percentage === 0 ? (
          <Bar color={color} percentage="3%" onClick={handleToggleModal}>
            0
          </Bar>
        ) : (
          <Bar
            color={color}
            percentage={`${percentage}%`}
            onClick={handleToggleModal}
          >
            {`${value}/${maxValue}`}
          </Bar>
        )}
      </div>

      {isOpen && (
        <Modal modalTitle={`alterar ${name}`} closeModal={handleToggleModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="current_value">atual</label>
            <Input
              {...register('currentValue')}
              type="number"
              id="currentValue"
              defaultValue={value}
              max={maxValue}
            />
            <label htmlFor="max_value">máximo</label>
            <Input
              {...register('maxValue')}
              type="number"
              id="maxValue"
              defaultValue={maxValue}
            />

            <button type="submit" className="submitButton">
              salvar
            </button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
