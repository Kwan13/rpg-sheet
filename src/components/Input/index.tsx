import {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Tooltip } from '../Tooltip';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, icon: Icon, error = null, ...rest },
  ref,
) => {
  return (
    <Container>
      {Icon && <Icon size={15} />}
      <input name={name} ref={ref} {...rest} />
      {error && <Tooltip errorMessage={error} />}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
