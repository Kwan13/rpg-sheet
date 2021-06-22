import { ReactElement } from 'react';

import { CharacterFormProvider } from './hooks/CharacterFormContext';
import { AttributesBarProvider } from './hooks/AttributeBarContext';
import { CharacterProvider } from './hooks/CharacterContext';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <CharacterProvider>
      <AttributesBarProvider>
        <CharacterFormProvider>
          <Home />
          <GlobalStyle />
        </CharacterFormProvider>
      </AttributesBarProvider>
    </CharacterProvider>
  );
}

export default App;
