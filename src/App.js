import React from 'react';
import HomePage from './components/HomePage'
import DadJokesApi from './components/DadJokesApi'
import SportsJokesApi from './components/SportsJokesApi'
import ProgrammingJokesApi from './components/ProgrammingJokesApi';
import SpanishJokesApi from './components/SpanishJokesApi';
import { Route, Switch} from "react-router-dom";
import Modal from './components/Modal';

function App() {
  return (
      <main>
        <Modal />
        <Switch>
          <Route path="/DadJokes" component={DadJokesApi} />
          <Route path="/SportsJokes" component={SportsJokesApi} />
          <Route path="/ProgrammingJokes" component={ProgrammingJokesApi} />
          <Route path="/SpanishJokes" component={SpanishJokesApi} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>

  );
}

export default App;
