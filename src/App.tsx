import { ReactElement } from 'react';

import { CharacterFormProvider } from './hook/CharacterFormContext';
import { CharacterProvider } from './hook/AttributeBarContext';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <CharacterProvider>
      <CharacterFormProvider>
        <Home />
        <GlobalStyle />
      </CharacterFormProvider>
    </CharacterProvider>
  );
}

export default App;
