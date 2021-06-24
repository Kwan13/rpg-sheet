import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1168px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const PersonalDataSession = styled.section`
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const AttributesSession = styled.section`
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const CombateSession = styled.section`
  min-height: 450px;
  margin-top: 20px;
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;
`;
