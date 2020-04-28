import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';

// Components
import Header from './components/Header';
import AddClass from "./components/AddClass"
import { useSelector, useDispatch } from 'react-redux';

import * as act from './store/actions'

function App() {
  const loggedIn = useSelector(state => state.account.loggedIn);
  const authToken = useSelector(state => state.account.authToken);
  const dispatch = useDispatch();

  useEffect(() => {
    // load token from localstorage
    // send get request for account data with token
    const token = authToken || localStorage.getItem('authToken')
    if (token) {
      // ping api with token to verify it
      // set token value in state, loggedIn to true
      dispatch({type: act.account_set_token, payload: token})
    }
    else {
      dispatch({type: act.account_logout})
    }

  }, [])



  return (
    <div className="App">
      <Header loggedIn={loggedIn} />

      <section>
        <Switch>
          <Route exact path='/login' component={Login} >
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
          <Route path='/instructor/classes/new' component={AddClass}>
          </Route>
          <Route path='/instructor/classes'>
          </Route>

        </Switch>
      </section>
    </div>
  );
}

export default App;
