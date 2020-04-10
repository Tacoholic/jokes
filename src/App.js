import React from 'react';
import DadJokesApi from './DadJokesApi';
import JokesApi from './JokesApi';
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
