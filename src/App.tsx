import { ReactElement } from 'react';

import { CharacterFormProvider } from './hooks/CharacterFormContext';
import { AttributesBarProvider } from './hooks/AttributeBarContext';
import { CharacterProvider } from './hooks/CharacterContext';
import { AttributePointsProvider } from './hooks/AttributePointsContext';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
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
  );
}

export default App;
