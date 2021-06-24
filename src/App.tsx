import { ReactElement } from 'react';

import { AttributePointsProvider } from './contexts/AttributePointsContext';
import { CharacterProvider } from './contexts/CharacterContext';
import { StatusBarProvider } from './contexts/StatusBarContext';
import { CombatProvider } from './contexts/CombatContext';
import { DiceProvider } from './contexts/DiceContext';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <CharacterProvider>
      <AttributePointsProvider>
        <StatusBarProvider>
          <DiceProvider>
            <CombatProvider>
              <Home />
              <GlobalStyle />
            </CombatProvider>
          </DiceProvider>
        </StatusBarProvider>
      </AttributePointsProvider>
    </CharacterProvider>
  );
}

export default App;
