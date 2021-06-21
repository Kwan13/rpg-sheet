import { useState, ReactElement } from 'react';

import { useForm } from 'react-hook-form';

import { InputAttributePoint } from '../InputAttributePoint';

import { Container, Content } from './styles';

type FormData = {
  aparencia: number;
  constituicao: number;
  destreza: number;
  educacao: number;
  forca: number;
  inteligencia: number;
  poder: number;
  sorte: number;
  movimento: number;
};

export function AttributePointsContainer(): ReactElement {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      aparencia: 0,
      constituicao: 0,
      destreza: 0,
      educacao: 0,
      forca: 0,
      inteligencia: 0,
      movimento: 0,
      poder: 0,
      sorte: 0,
    },
  });

  const [attributes, setAttributes] = useState<FormData>();

  function onSubmit(data: FormData) {
    setAttributes(data);
    console.log(data);
  }

  return (
    <Container>
      <h3>Atributos</h3>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <InputAttributePoint {...register('aparencia')} name="aparencia" />
        <InputAttributePoint
          {...register('constituicao')}
          name="constituicao"
        />
        <InputAttributePoint {...register('destreza')} name="destreza" />
        <InputAttributePoint {...register('educacao')} name="educacao" />
        <InputAttributePoint {...register('forca')} name="forca" />
        <InputAttributePoint
          {...register('inteligencia')}
          name="inteligencia"
        />
        <InputAttributePoint {...register('poder')} name="poder" />
        <InputAttributePoint {...register('sorte')} name="sorte" />
        <InputAttributePoint {...register('movimento')} name="movimento" />
        <button type="submit">tes</button>
      </Content>
    </Container>
  );
}
