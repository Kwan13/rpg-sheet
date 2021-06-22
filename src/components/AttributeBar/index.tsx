import { useState, ReactElement, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../Input';
import { Modal } from '../Modal';

import { Container, Bar } from './styles';

interface AttributeBarProps {
  name: string;
  color: string;
  value: number;
  setValue(value: number): void;
}

type FormData = {
  current_value: number;
  max_value: number;
};

export function AttributeBar({
  name,
  color,
  value,
  setValue,
}: AttributeBarProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [maxValue, setMaxValue] = useState(12);

  const percentage = useMemo(() => {
    const maxStatus = maxValue;
    const currentValue = value;
    const result = (currentValue * 100) / maxStatus;

    return result;
  }, [maxValue, value]);

  const { handleSubmit, register } = useForm();

  function onSubmit(data: FormData) {
    setValue(data.current_value);
    setMaxValue(data.max_value);
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
              {...register('current_value')}
              type="number"
              id="current_value"
              name="current_value"
              defaultValue={value}
              max={maxValue}
            />
            <label htmlFor="max_value">máximo</label>
            <Input
              {...register('max_value')}
              type="number"
              id="max_value"
              name="max_value"
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
