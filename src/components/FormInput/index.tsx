import {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from 'react';

import { Tooltip } from '../Tooltip';

import { Container, Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref,
) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <Content>
        <input id={name} name={name} ref={ref} {...rest} />
        {error && <Tooltip errorMessage={error} />}
      </Content>
    </Container>
  );
};

export const Input = forwardRef(InputBase);
