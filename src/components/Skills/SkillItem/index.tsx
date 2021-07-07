import { useState, ReactElement, ReactNode } from 'react';

import { Container, Content } from './styles';

interface SkillItemProps {
  name: string;
  children: ReactNode;
}

export function SkillItem({ name, children }: SkillItemProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <button type="button" onClick={handleToggle}>
        {name}
      </button>
      <Content hide={isOpen}>{children}</Content>
    </Container>
  );
}
