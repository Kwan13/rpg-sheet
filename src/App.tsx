import { ReactElement } from 'react';

import { CharacterFormProvider } from './hooks/CharacterFormContext';
import { AttributesBarProvider } from './hooks/AttributeBarContext';
import { CharacterProvider } from './hooks/CharacterContext';
import { AttributePointsProvider } from './hooks/AttributePointsContext';
import { CombatProvider } from './hooks/CombatContext';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <CombatProvider>
      <AttributePointsProvider>
        <CharacterProvider>
          <AttributesBarProvider>
            <CharacterFormProvider>
              <Home />
              <GlobalStyle />
            </CharacterFormProvider>
          </AttributesBarProvider>
        </CharacterProvider>
      </AttributePointsProvider>
    </CombatProvider>
  );
}

export default App;
