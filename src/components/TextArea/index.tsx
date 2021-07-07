import {
  ForwardRefRenderFunction,
  forwardRef,
  TextareaHTMLAttributes,
} from 'react';

import { Tooltip } from '../Tooltip';

import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLTextAreaElement, InputProps> = (
  { name, error = null, ...rest },
  ref,
) => {
  return (
    <Container>
      <textarea name={name} ref={ref} {...rest} />
      {error && <Tooltip errorMessage={error} />}
    </Container>
  );
};

export const TextArea = forwardRef(InputBase);
