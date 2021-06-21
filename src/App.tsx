import { ReactElement } from 'react';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
