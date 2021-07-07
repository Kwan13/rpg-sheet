import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Inventory from '../pages/Inventory';

export function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inventory" component={Inventory} />
      </Switch>
    </BrowserRouter>
  );
}
