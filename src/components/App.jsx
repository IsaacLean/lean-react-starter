import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import BSStarterTemplate from './BSStarterTemplate';
import Counter from './Counter';
import counter from '../reducers';
import Error404 from './Error404';
import HelloWorld from './HelloWorld';
import MainNav from './MainNav';

const store = createStore(counter);

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={MainNav} />
        <Route exact path="/bootstrap_starter_template" component={BSStarterTemplate} />
        <Route exact path="/counter" render={() => <Counter name="Counter Example" />} />
        <Route exact path="/hello_world" component={HelloWorld} />
        <Route component={Error404} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
