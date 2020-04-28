import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <Switch>
          <Route exact path='/login'>
          </Route>
          <Route exact path='/signup'>
          </Route>
          <Route path='/classes'>
          </Route>
          <Route path='/profile/edit'>
          </Route>
          <Route path='/profile'>
          </Route>
          <Route path='/instructor/classes/edit/:id'>
          </Route>
          <Route path='/instructor/classes/new'>
          </Route>
          <Route path='/instructor/classes'>
          </Route>

        </Switch>
      </section>
    </div>
  );
}

export default App;
