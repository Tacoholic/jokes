import React from 'react'
import SpanishJokesData from '../data/SpanishJokesData';
import { Link } from 'react-router-dom';
import './SpanishJokes.css';
import './Buttons.css';

const initialState = {
  randomJoke: []
};

class SpanishJokesApi extends React.Component {

  constructor(props) {
    super(props);
    this.getRandomJoke = this.getRandomJoke.bind(this);
    this.state = initialState;
  }

  getRandomJoke() {
    this.setState({
      randomJoke: SpanishJokesData[(SpanishJokesData.length * Math.random()) << 0]
    });
  }

  render() {
    const { randomJoke } = this.state;
    return (
      <React.Fragment >
        <div class="flex">
          <p> {randomJoke.question} </p> 
        </div>
        <div class="flex">
          <p> {randomJoke.answer} </p>
        </div>
        <div class="flex">
          <button class="btn joke"onClick = {this.getRandomJoke}>Oprima aquí para el chiste </button> 
        </div>
        <div class="flex">
          <Link to="/ProgrammingJokes">
          <button class="btn programming">Programming Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/DadJokes">
          <button class="btn sports"> Sports Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/DadJokes">
          <button class="btn dad"> Dad Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/">
          <button class="btn home">Home Page</button>
          </Link>
         </div> 
      </React.Fragment >
    );
  }
}
export default SpanishJokesApi;