import React from 'react';
import DadJokesApi from './ProgrammingJokesApi';
import JokesApi from './DadJokesApi';
import './App.css';

function App() {
  return (
    <div className="App">
     <DadJokesApi />
     
     <JokesApi />
    </div>
  );
}

export default App;
