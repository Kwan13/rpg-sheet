import { ReactElement } from 'react';

import { AttributePointsProvider } from './contexts/AttributePointsContext';
import { CharacterProvider } from './contexts/CharacterContext';
import { StatusBarProvider } from './contexts/StatusBarContext';
import { CombatProvider } from './contexts/CombatContext';
import { DiceProvider } from './contexts/DiceContext';
import { SkillsProvider } from './contexts/SkillsContext';

import { Routes } from './routes';
import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <SkillsProvider>
      <CharacterProvider>
        <AttributePointsProvider>
          <StatusBarProvider>
            <DiceProvider>
              <CombatProvider>
                <Routes />
                <GlobalStyle />
              </CombatProvider>
            </DiceProvider>
          </StatusBarProvider>
        </AttributePointsProvider>
      </CharacterProvider>
    </SkillsProvider>
  );
}

export default App;
