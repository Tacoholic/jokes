import React from 'react'
import SportsJokesData from '../data/SportsJokesData';
import { Link } from 'react-router-dom';
import './Buttons.css';
const initialState = {
  randomJoke: []
};

class SportsJokesApi extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomJoke = this.getRandomJoke.bind(this);
    this.state = initialState;
  }
  getRandomJoke() {
    this.setState({
      randomJoke: SportsJokesData[(SportsJokesData.length * Math.random()) << 0]
    });
  }
  render() {
    const {randomJoke} = this.state;
    return (
      <React.Fragment >
        <div class="flex">
          <p>{randomJoke.question}</p> 
        </div>
        <div class="flex">
          <p>{randomJoke.answer}</p>
        </div>
        <div class="flex">
          <button class="joke" onClick = {this.getRandomJoke}>Click here for joke </button> 
        </div>
        <div class="flex">
          <Link to="/ProgrammingJokes">
            <button class="btn programming">Programming Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/DadJokes">
            <button class="btn dad">Dad Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/SpanishJokes">
            <button class="btn spanish">Chistes en ñ</button>
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
export default SportsJokesApi;