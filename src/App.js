import React from 'react';
import HomePage from './components/HomePage'
import DadJokesApi from './components/DadJokesApi'
import SportsJokesApi from './components/SportsJokesApi'
import ProgrammingJokesApi from './components/ProgrammingJokesApi';
import { Route, Switch} from "react-router-dom";

function App() {
  return (
      <main>
        <Switch>
          
          <Route path="/DadJokes" component={DadJokesApi} />
          <Route path="/SportsJokes" component={SportsJokesApi} />
          <Route path="/ProgrammingJokes" component={ProgrammingJokesApi} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>

  );
}

export default App;
