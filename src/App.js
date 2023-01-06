import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import React from 'react';

const App = () => (
  <BrowserRouter>
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/page1" exact component={Page1} />
      <Route path="/page2" exact component={Page2} />
    </Switch>
  </BrowserRouter>
);

export default App;