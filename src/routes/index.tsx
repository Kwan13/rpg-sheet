import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sheet from '../pages/Sheet';
import Inventory from '../pages/Inventory';

export function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/sheet" component={Sheet} />
        <Route path="/character/new" component={Sheet} />
      </Switch>
    </BrowserRouter>
  );
}
