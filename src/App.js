import React from 'react';
import DadJokesApi from './ProgrammingJokesApi';
import JokesApi from './DadJokesApi';
import SportsJokesApi from './SportsJokesApi';
import './App.css';

function App() {
  return (
    <div className="App">
     <DadJokesApi />
     <SportsJokesApi />
     <JokesApi />
    </div>
  );
}

export default App;
