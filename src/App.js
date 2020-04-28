import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Login from './components/Login';
import { Route, Switch } from  'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={Login}/>
      </Switch>

    </div>
  );
}

export default App;
