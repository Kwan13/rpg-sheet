import {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from 'react';

import { Container } from './styles';
import diceImg from '../../assets/dice.svg';

interface InputAttributePointProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const inputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputAttributePointProps
> = ({ name, ...rest }, ref) => {
  return (
    <Container>
      <button type="button">
        <img src={diceImg} alt="dice" />
      </button>
      <h4>{name}</h4>
      <input name={name} ref={ref} {...rest} />
    </Container>
  );
};

export const InputAttributePoint = forwardRef(inputBase);
