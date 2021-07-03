import { createContext, ReactElement, ReactNode, useState } from 'react';

interface DiceProviderProps {
  children: ReactNode;
}

type DiceContextData = {
  dice: number;
  status: string;
  handleDiceStatus(ability: number): void;
};

export const DiceContext = createContext({} as DiceContextData);

export function DiceProvider({ children }: DiceProviderProps): ReactElement {
  const [dice, setDice] = useState(0);
  const [status, setStatus] = useState('');

  function handleDiceStatus(ability: number) {
    const randomDice = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

    setDice(randomDice);

    if (ability <= 0) {
      setStatus('inválido');
      setDice(0);

      return;
    }

    if (ability > 20) {
      setDice(randomDice);
      setStatus('');
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

    console.log(type);

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

  return (
    <DiceContext.Provider value={{ dice, status, handleDiceStatus }}>
      {children}
    </DiceContext.Provider>
  );
}
